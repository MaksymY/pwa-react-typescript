import React from "react";
import { EventInput } from "@fullcalendar/core";
import { isToday } from "date-fns";
import { is } from "date-fns/esm/locale";

type Props = {
  dateEvent: {
    title: string;
    start: Date | number;
    dateStr: string;
  };
};

/* type Props = {
  dateEvent: EventInput;
}; */

export const ItemActivity = ({ dateEvent }: Props) => {
  const isActual = () => {
    return isToday(dateEvent.start)
      ? "Aujourd'hui"
      : "IL FAUT FINIR LA CONDIITON";
  };
  return (
    <div>
      <h2>{isActual}</h2>
      <li>
        <p>mercredi</p>
        <p>10 juin</p>
        <p>{dateEvent.title}</p>
        <p>10:00 - 13:00</p>
      </li>
    </div>
  );
};
