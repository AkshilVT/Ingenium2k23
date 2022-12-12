import React from "react";
import { Link } from "@remix-run/react";
import styles from "./styles/events.css";

export default () => {
  return (
    <React.Fragment>
      <div className="p-6 max-w-[400px] rounded-3xl min-h-[540px] aspect-[9/11]">
        <div className="h-full group rounded-3xl bg-cover bg-center bg-[url('public/poster.jpg')] overflow-hidden">
          <div className="data text-white flex items-end h-full ">
            <div className="content rounded-3xl p-3 translate-y-[116px] group-hover:translate-y-0 duration-300 ease-linear bg-slate-500">
              <span className="author py-3">Lorem ipsum</span>
              <h1 className="title text-3xl font-[200] py-2">hackathon</h1>
              <div className="opacity-0 group-hover:opacity-100 duration-300 ease-linear">
                <p className="text font-ligh text-sm py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus ad id minus quis consequuntur provident voluptas
                  debitis!
                </p>
                <Link
                  to="/eventDetails"
                  className="ReadMore flex justify-center py-2"
                >
                  Read more
                </Link>{" "}
                <img
                  src="https://img.icons8.com/metro/52/000000/long-arrow-up.png"
                  alt="arrow icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
