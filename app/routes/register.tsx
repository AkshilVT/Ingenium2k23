import React, { useState, useEffect } from "react";
import Section1 from "components/section1";
import Section2 from "components/section2";

const register = () => {
  const [section, setSection] = useState("part1");
  return (
    <div className="padding">
      <div className="flex flex-wrap h-full bg-[#121212] text-[#EEEEEE] rounded-2xl shadow-xl p-10 min-h-[40rem]">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:border-r-2">
          Bxx
        </div>
        <div className="w-full md:w-1/2 space-y-1.5 flex flex-col justify-center items-center p-10">
          <div className="flex flex-col justify-center border-[#454545]">
            <h1 className="text-3xl font-semibold">Welcome to Ingenium</h1>
            <p className="text-sm flex justify-center">
              Please fill in the form to create an account
            </p>
          </div>
          <br className="breaker" />
          {section === "part1" ? (
            <div className="">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <p className="-mb-0.5 text-sm">First Name</p>
                  <input
                    type="text"
                    className="input w-[7.5rem] bg-[#271717] rounded-lg border-2 border-[#BCBCBC]"
                    placeholder="First Name"
                  />
                </div>
                <div className="w-1/2">
                  <p className="-mb-0.5 text-sm">Last Name</p>
                  <input
                    type="text"
                    className="input w-[7.5rem] bg-[#121212] rounded-lg border-2 border-[#BCBCBC]"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div>
                <p className="-mb-0.5 text-sm">Mail</p>
                <input
                  type="text"
                  className="input w-64 bg-[#121212] rounded-lg border-2 border-[#BCBCBC]"
                  placeholder="Mail"
                />
              </div>
              <div>
                <p className="-mb-0.5 text-sm">Password</p>
                <input
                  type="password"
                  className="input w-64 bg-[#121212] rounded-lg border-2 border-[#BCBCBC]"
                  placeholder="Password"
                />
              </div>
              <div>
                <p className="-mb-0.5 text-sm">Number</p>
                <input
                  type="text"
                  className="input w-64 bg-[#121212] rounded-lg border-2 border-[#BCBCBC]"
                  placeholder="Number"
                />
              </div>
            </div>
          ) : (
            <div>
              <div>
                <p className="-mb-0.5 text-sm">Collage</p>
                <input
                  type="text"
                  className="input w-64 bg-[#121212] rounded-lg border-2 border-[#BCBCBC]"
                  placeholder="Collage"
                />
              </div>
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <p className="-mb-0.5 text-sm branch" id="branch">
                    Branch
                  </p>
                  <input
                    type="text"
                    className="input w-32 bg-[#121212] rounded-lg border-2 border-[#BCBCBC]"
                    placeholder="Branch"
                  />
                </div>
                <div>
                  <p className="-mb-0.5 text-sm">Year</p>
                  <input
                    type="text"
                    className="input w-32 bg-[#121212] rounded-lg border-2 border-[#BCBCBC]"
                    placeholder="Year"
                  />
                </div>
              </div>
            </div>
          )}
          <div className="w-64 flex justify-end !mt-5">
            <button
              className="custom-btn btn-15 !text-black"
              onClick={() => setSection("part2")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
