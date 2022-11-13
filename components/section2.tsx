import React from "react";

const section2 = () => {
  return (
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
  );
};

export default section2;
