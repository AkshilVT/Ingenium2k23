import { ActionArgs } from "@remix-run/node";
import { Form, useSubmit } from "@remix-run/react";
import RegisterAPI from "components/Airtable/data";
import React, { useState, useEffect } from "react";

export const action = async ({ request }: ActionArgs) => {
  // get the form data from the POST
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  // console.log(values.name);
  // get the values from form data converting types
  // const name = formData.get('name');
  RegisterAPI(
    values.name,
    values.email,
    values.phone,
    values.password,
    values.college,
    values.branch,
    values.year
  );
  // const amount = Number(formData.get('amount'));
  // call function on back end to create cart
  // const cart = await createCart(id, amount);
  // return the cart to the client
  // return json({ cart });
  return "done";
};
const Register = (loader: any) => {
  // RegisterAPI('a', 'a', 'a', 'a', 'a', 'a', 'a');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [section, setSection] = useState(true);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [phone, setPhone] = useState('');
  // const [college, setCollege] = useState('');
  // const [year, setYear] = useState('');
  // const [branch, setBranch] = useState('');
  // const submit = useSubmit();
  // const handleSubmit = (e: any) => {
  //   submit(e.target.form);
  // };
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
          <Form
            method="post"
            // onSubmit={(e) => {
            //   // e.preventDefault();
            //   RegisterAPI(name, email, phone, password, college, branch, year);
            //   console.log(name, email, phone, password, college, branch, year);
            // }}
          >
            {/* {section === true ? ( */}
            <div className="">
              {/* <div className='flex space-x-4'>
                <div className='w-1/2'>
                  <p className='-mb-0.5 text-sm'>First Name</p>
                  <input
                    type='text'
                    className='input w-[7.5rem] bg-[#271717] rounded-lg border-2 border-[#BCBCBC]'
                    placeholder='First Name'
                  />
                </div>
                <div className='w-1/2'>
                  <p className='-mb-0.5 text-sm'>Last Name</p>
                  <input
                    type='text'
                    className='input w-[7.5rem] bg-[#121212] rounded-lg border-2 border-[#BCBCBC]'
                    placeholder='Last Name'
                  />
                </div>
              </div> */}
              <div>
                <p className="-mb-0.5 text-sm">Name</p>
                <input
                  required
                  type="text"
                  name="name"
                  className="input w-64 bg-[#121212] rounded-lg border-2 border-[#BCBCBC]"
                  placeholder="Name"
                  // onChange={(e) => setName(e.target.value)}
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
                  // onChange={(e) => setEmail(e.target.value)}
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
                  // onChange={(e) => setPassword(e.target.value)}
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
                  // onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {/* <div className='w-64 flex justify-end !mt-5'>
                <button
                  className='custom-btn btn-15 !text-black'
                  onClick={() => setSection(!section)}
                >
                  Next
                </button>
              </div> */}
            </div>
            {/* ) : ( */}
            <div>
              <div>
                <p className="-mb-0.5 text-sm">College</p>
                <input
                  required
                  type="text"
                  name="college"
                  className="input w-64 bg-[#121212] rounded-lg border-2 border-[#BCBCBC]"
                  placeholder="College"
                  // onChange={(e) => setCollege(e.target.value)}
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
                    // onChange={(e) => setBranch(e.target.value)}
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
                    // onChange={(e) => setYear(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-64 flex justify-between !mt-5">
                {/* <button
                  className='custom-btn btn-15 !text-black !w-fit'
                  onClick={() => setSection(!section)}
                >
                  Previous
                </button> */}
                <button
                  className="custom-btn btn-15 !text-black !w-fit"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
            {/* )} */}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
