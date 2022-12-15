import { ActionArgs } from "@remix-run/node";
import { Form, useSubmit } from "@remix-run/react";
import RegisterAPI from "components/Airtable/data";
import React, { useState, useEffect } from "react";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  RegisterAPI(
    values.name as string,
    values.email as string,
    values.phone as string,
    values.password as string,
    values.college as string,
    values.branch as string,
    values.year as string
  );
  return "done";
};
const Register = (loader: any) => {
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
          <Form method="post">
            <div className="">
              <div>
                <p className="-mb-0.5 text-sm">Name</p>
                <input
                  required
                  type="text"
                  name="name"
                  className="input w-64 bg-[#121212] rounded-lg border-2 border-[#BCBCBC]"
                  placeholder="Name"
                />
              </div>
              <div>
                <p className="-mb-0.5 text-sm">Email</p>
                <input
                  required
                  type="email"
                  name="email"
                  className="input w-64 bg-[#121212] rounded-lg border-2 border-[#BCBCBC]"
                  placeholder="Email"
                />
              </div>
              <div>
                <p className="-mb-0.5 text-sm">Password</p>
                <input
                  required
                  type="password"
                  name="password"
                  className="input w-64 bg-[#121212] rounded-lg border-2 border-[#BCBCBC]"
                  placeholder="Password"
                />
              </div>
              <div>
                <p className="-mb-0.5 text-sm">Number</p>
                <input
                  required
                  type="text"
                  name="phone"
                  className="input w-64 bg-[#121212] rounded-lg border-2 border-[#BCBCBC]"
                  placeholder="Number"
                />
              </div>
            </div>
            <div>
              <div>
                <p className="-mb-0.5 text-sm">College</p>
                <input
                  required
                  type="text"
                  name="college"
                  className="input w-64 bg-[#121212] rounded-lg border-2 border-[#BCBCBC]"
                  placeholder="College"
                />
              </div>
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <p className="-mb-0.5 text-sm branch" id="branch">
                    Branch
                  </p>
                  <input
                    required
                    type="text"
                    name="branch"
                    className="input w-32 bg-[#121212] rounded-lg border-2 border-[#BCBCBC]"
                    placeholder="Branch"
                  />
                </div>
                <div>
                  <p className="-mb-0.5 text-sm">Year</p>
                  <input
                    required
                    type="text"
                    name="year"
                    className="input w-32 bg-[#121212] rounded-lg border-2 border-[#BCBCBC]"
                    placeholder="Year"
                  />
                </div>
              </div>
              <div className="w-64 flex justify-between !mt-5">
                <button
                  className="custom-btn btn-15 !text-black !w-fit"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
