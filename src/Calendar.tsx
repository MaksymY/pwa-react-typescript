import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import { EventInput } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import frLocale from "@fullcalendar/core/locales/fr";
import "./main.scss";
import Bus from "./Bus";

const BaseEvent = {
  title: "Entrainement en apesanteur",
  start: new Date(),
  dateStr: "2020-06-14",
};

export const Calendar = () => {
  /*const [calendarWeekends, setCalendarWeekends] = useState<boolean>(true); */
  const [calendarEvents, setcalendarEvents] = useState<EventInput[]>([
    BaseEvent,
  ]);

  useEffect(() => {
    Bus.emit("EventDates", calendarEvents);
  });

  const handleDateClick = (arg: any) => {
    console.log(arg);
    setcalendarEvents(
      calendarEvents.concat({
        title: "New Event",
        start: arg.date,
        allDay: arg.allDay,
      }),
    );
  };

  return (
    <FullCalendar
      defaultView="dayGridMonth"
      locales={[frLocale]}
      locale={"fr"}
      /* header={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }} */
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      events={calendarEvents}
      dateClick={handleDateClick}
    />
  );
};
