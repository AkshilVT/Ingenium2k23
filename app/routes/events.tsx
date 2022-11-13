import React from "react";
import styles from "./styles/events.css";

function events() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <h1 className="text-2xl my-20">Events!</h1>
      <div className="grid gap-4 gap-y-9 lg:grid-cols-3 md:grid-cols-2 justify-items-center max-w-[1200px] my-0 mx-auto">
        {arr.map((item) => (
          <div key={item}>
            <div className="m-6 min-w-[300px]">
              <div className="w-[100%] h-[100%] aspect-[9/11] rounded-xl bg-cover bg-center bg-[url('https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg')]">
                <div className="data text-white p-3">
                  <div className="content">
                    <span className="author">Jane Doe</span>
                    <h1 className="title text-3xl font-[200] py-2">
                      <a href="#">
                        Stranger Things: The sound of the Upside Down
                      </a>
                    </h1>
                    <p className="text font-light py-2">
                      The antsy bingers of Netflix will eagerly anticipate the
                      digital release of the Survive soundtrack, out today.
                    </p>
                    <a className="flex justify-center py-2">Read more</a>
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
