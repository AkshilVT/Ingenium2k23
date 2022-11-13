import React from "react";

const section1 = () => {
  return (
    <div className="!bg-white">
      <div className="flex space-x-4">
        <div className="w-1/2">
          <p className="-mb-0.5 text-sm">First Name</p>
          <input
            type="text"
            className="input w-[7.5rem] bg-[#121212] rounded-lg border-2 border-[#BCBCBC]"
            placeholder="First Name"
          />
        </div>
        <div className="flex justify-center">
          <p className="-mb-0.5 text-sm">Last Name</p>
          <input
            type="text"
            className="input w-[7.5rem] bg-[#121212] rounded-lg border-2 border-[#BCBCBC]"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="flex justify-center">
        {/* <div className=""> */}
        <p className="-mb-0.5 text-sm">Email</p>
        <input
          type="email"
          className="input w-64 bg-[#121212] rounded-lg border-2 border-[#BCBCBC]"
          placeholder="Email"
        />
      </div>
      <div>
        <p className="-mb-0.5 text-sm">Password</p>
        <input
          type="text"
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
  );
};

export default section1;
