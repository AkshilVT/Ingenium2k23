import React from "react";

function events() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <h1 className="text-2xl my-20">Events!</h1>
      <div className="grid gap-4 gap-y-9 lg:grid-cols-3 md:grid-cols-2 justify-items-center">
        {arr.map((item) => (
          <div className="bg-[#85d8e4] rounded-xl m-2 " key={item}>
            <div className="m-6 min-w-[300px] aspect-square">
              <img src="https://picsum.photos/200/300" alt="" className="w-[100%] h-[100%] rounded-xl"/>
              <h3>Event {item}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>);
}

export default events;
