import React from "react";
import EventCards from "./eventCards";
import styles from "./styles/events.css";

function events() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="">
      <h1 className="text-2xl w-full backdrop-blur-xl z-10 text-slate-200 fixed p-4">Events!</h1>
      <div className="grid py-[5rem] gap-4 gap-y-9 lg:grid-cols-3 md:grid-cols-2 justify-items-center max-w-[1200px] mx-auto">
        {arr.map((item) => (
            <EventCards key={item}/>
        ))}
      </div>
    </div>
  );
}

export default events;
