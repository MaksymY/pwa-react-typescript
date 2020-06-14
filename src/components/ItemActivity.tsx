import React from "react";
import { isToday, isTomorrow, isThisWeek, isThisMonth } from "date-fns";

type Props = {
  dateEvent: {
    title: string;
    start: Date | number;
    dateStr: string;
  };
};

export const ItemActivity = ({ dateEvent }: Props) => {
  const isActual = (() => {
    const day = dateEvent.start;
    if (isToday(day)) return "Aujourd'hui";
    if (isTomorrow(day)) return "Demain";
    if (isThisWeek(day)) return "Cette semaine";
    if (isThisMonth(day)) return "Ce mois-ci";
    return "A venir";
  })();

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
