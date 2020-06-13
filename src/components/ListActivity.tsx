import React, { useEffect, useState } from "react";
import { ItemActivity } from "./ItemActivity";
import { EventInput } from "@fullcalendar/core";
import Bus from "../Bus";

export const ListActivity = () => {
  const [alldates, setAllDates] = useState<EventInput[]>([]);

  useEffect(() => {
    Bus.on("EventDates", (data: any) => {
      setAllDates(data);
    });
  });

  return (
    <div>
      <h1>Prochains Evenements</h1>
      <ul>
        {alldates &&
          alldates.map((value) => {
            return <ItemActivity dateEvent={value} />;
          })}
      </ul>
    </div>
  );
};
