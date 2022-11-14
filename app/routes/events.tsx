import React from "react";
import styles from "./styles/events.css";

function events() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <h1 className="text-2xl my-20">Events!</h1>
      <div className="grid gap-4 gap-y-9 lg:grid-cols-3 md:grid-cols-2 justify-items-center max-w-[1200px] my-0 mx-auto px-4">
        {arr.map((item) => (
            <div className="p-6 max-w-[400px] min-h-[540px] aspect-[9/11]" key={item}>
              <div className="h-full group rounded-xl bg-cover bg-center bg-[url('public/poster.jpg')]">
                <div className="data text-white p-3 flex items-end h-full overflow-hidden ">
                  <div className="content rounded-xl translate-y-[116px] group-hover:translate-y-0 duration-300 ease-linear backdrop-blur">
                    <span className="author py-3">Jane Doe</span>
                    <h1 className="title text-3xl font-[200] py-2">Stranger Things: The sound of the Upside Down</h1>
                    <div className="opacity-0 group-hover:opacity-100 duration-300 ease-linear">
                      <p className="text font-ligh text-sm py-2">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                      <a className="flex justify-center py-2">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default events;
