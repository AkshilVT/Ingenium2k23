import { ActionArgs, redirect } from "@remix-run/node";
import { Form, useTransition } from "@remix-run/react";
import RegisterAPI from "components/Airtable/data";
import ParticleBackground from "components/particles/ParticleBackground";
import React from "react";

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
  return redirect("/");
};

function Registration() {
  const transition = useTransition();
  const loading = Boolean(transition.submission);
  return (
    <div className="h-screen text-white">
      <ParticleBackground />
      <h1 className="text-6xl flex justify-center my-24">
        Register for Ingenium2k23
      </h1>
      <div className="bg-black/70 border w-full rounded-lg max-w-xl mx-auto">
        <Form
          method="post"
          className="flex flex-col items-center p-6 space-y-2"
        >
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
              className={
                `custom-btn btn-15 !text-black !w-fit ` +
                (loading ? "opacity-30" : "")
              }
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting" : "Submit"}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Registration;
