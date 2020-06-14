import React, { useEffect, useState } from "react";
import { ItemActivity } from "./ItemActivity";
import Bus from "../Bus";

type Props = {
  title: string;
  start: Date;
  dateStr: string;
};

export const ListActivity = () => {
  const [alldates, setAllDates] = useState<Props[]>([]);

  useEffect(() => {
    Bus.on("EventDates", setAllDates);
  }, []);

  return (
    <div>
      <h1>Prochains Evenements</h1>
      <ul>
        {alldates &&
          alldates.map((value) => {
            return <ItemActivity key={value.title} dateEvent={value} />;
          })}
      </ul>
    </div>
  );
};
