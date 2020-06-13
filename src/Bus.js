import { isString, isFunction, isPosInt } from "./utils";

function copy(target) {
  return Object.entries(target).reduce((acc, [key, val]) => {
    acc[key] = Array.from(val);
    return acc;
  }, {});
}

let states = {};
let once = {};
let events = {};

async function dispatchOnce(name, data) {
  if (Array.isArray(once[name])) {
    const clone = Array.from(once[name]);
    delete once[name];
    clone.forEach(async (callback) => callback(data));
  }
}

async function dispatchEvents(name, data) {
  if (Array.isArray(events[name])) {
    const event = events[name];
    if (event.length && states[name]) {
      event.forEach(async (callback) => callback(data));
    }
  }
}

export default Object.freeze({
  get states() {
    return copy(states);
  },
  get onceEvents() {
    return copy(once);
  },
  get events() {
    return copy(events);
  },
  async emit(name, data) {
    if (isString(name) && name.length) {
      dispatchOnce(name, data);
      dispatchEvents(name, data);
    }
  },
  end(name) {
    delete states[name];
    delete events[name];
  },
  clear(name) {
    delete once[name];
    this.end(name);
  },
  on(name, callback) {
    if (!isString(name) || !name.length || !isFunction(callback)) return -1;

    if (!(name in events)) {
      states[name] = true;
      events[name] = [callback];
      return 0;
    }
    const index = events[name].findIndex((c) => c === callback);
    return index >= 0 ? index : events[name].push(callback) - 1;
  },
  once(name, callback) {
    if (!isString(name) || !name.length || !isFunction(callback)) return -1;

    if (!(name in once)) {
      once[name] = [callback];
      return 0;
    }
    const index = once[name].findIndex((c) => c === callback);
    return index >= 0 ? index : once[name].push(callback) - 1;
  },
  offIndex(name, index) {
    if (
      !isString(name) ||
      !name.length ||
      !isPosInt(index, true) ||
      (Array.isArray(events[name]) && index > events[name].length)
    )
      return;

    events[name].splice(index, 1);
  },
  off(name, reference) {
    if (!isString(name) || !isFunction(reference) || !events[name]) return;
    const index = events[name].findIndex((c) => c === reference);
    if (index > -1) events[name].splice(index, 1);
    if (!events[name].length) this.clear(name);
  },
});
