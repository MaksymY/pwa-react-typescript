import React from "react";
import { EventInput } from "@fullcalendar/core";

/* type Props = {
  dateEvent: {
    title: string;
    start: any;
    dateStr: string;
  };
}; */

type Props = {
  dateEvent: EventInput;
};

export const ItemActivity = ({ dateEvent }: Props) => {
  return (
    <div>
      <h2>Aujourd'hui</h2>
      <li>
        <p>mercredi</p>
        <p>10 juin</p>
        <p>{dateEvent.title}</p>
        <p>10:00 - 13:00</p>
      </li>
    </div>
  );
};
