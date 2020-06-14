import React from "react";
import {
  isToday,
  isTomorrow,
  isThisWeek,
  isThisMonth,
  getDate,
} from "date-fns";

type Props = {
  dateEvent: {
    title: string;
    start: Date;
    dateStr: string;
  };
};

export const ItemActivity = ({ dateEvent }: Props) => {
  const day = dateEvent.start;

  const isActual = (() => {
    if (isToday(day)) return "Aujourd'hui";
    if (isTomorrow(day)) return "Demain";
    if (isThisWeek(day)) return "Cette semaine";
    if (isThisMonth(day)) return "Ce mois-ci";
    return "A venir";
  })();

  const theDay = day.toLocaleString("default", { weekday: "long" });

  const theMounth = `${getDate(day)} ${day.toLocaleString("default", {
    month: "long",
  })}`;

  return (
    <div>
      <h2>{isActual}</h2>
      <li>
        <p>{theDay}</p>
        <p>{theMounth}</p>
        <p>{dateEvent.title}</p>
        <p>10:00 - 13:00</p>
      </li>
    </div>
  );
};
