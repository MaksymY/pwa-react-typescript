export function isTrue(obj) {
  return obj === true;
}

const isPos = (v, z) => (isTrue(z) ? v >= 0 : v > 0);

export function isString(obj) {
  return typeof obj === "string";
}

export function isFunction(obj) {
  return typeof obj === "function";
}

export function isPosInt(obj, zero) {
  return Number.isInteger(obj) && isPos(obj, zero);
}
