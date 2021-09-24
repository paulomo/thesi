import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { motion } from "framer-motion";
import Women from "../../../../common/images/women-working.png";

let schema = yup.object().shape({
  email: yup.string().email().required("Email is a required field"),
  profession: yup.string().required("Company Type is a required field"),
});

export interface SignUpProps {
  email: string;
  profession: string;
}

export const Top: React.FC = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<SignUpProps>({
    // resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    reset();
    const dataToUpload: any = {
      tenantName: data.companyName,
      country: data.country,
      email: data.email,
      password: data.password,
      accountType: data.type,
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3 } }}
      exit={{ opacity: 0 }}
    >
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 text-textSecondaryColor">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block py-3 mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  New Colaboration
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight sm:text-4xl sm:leading-none lg:text-5xl">
                Write and Schedule
                <br className="hidden md:block" />
                <p className="pt-2 hidden md:block">Instagram Post with AI</p>
              </h2>
              <p className="text-base text-textSecondaryColor md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <Link
                to=""
                className="inline-flex items-center text-white justify-center w-full h-12 px-6 mb-3 font-medium 
                tracking-wide transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-mainorange 
                hover:bg-secondaryorange focus:shadow-outline focus:outline-none"
              >
                Join The Waitlist
              </Link>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src={Women}
            alt=""
          />
        </div>
      </div>
      {/* <div className="h-screen">
        <img
          src={BusinessWoman}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="h-screen">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Write and Schdule Instagram Post <br className="hidden md:block" />
                  <span className="text-teal-accent-400">
                    or setting up a website
                  </span>
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  Sell to millions of consumers using their measurements, no
                  upfront investments, signup and get verified in under 48
                  hours.
                </p>
                <Link
                  to=""
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-gray-400 hover:text-teal-accent-700"
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </Link>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Join The Wailist
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="Email"
                        className="inline-block mb-1 font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        placeholder="paul@gmail.com"
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        {...register("email")}
                        disabled={isSubmitting}
                      />
                      {errors.email && errors.email.type === "required" && (
                        <p className="text-base text-red-400 font-semibold">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium text-gray-700"
                      >
                        Profession
                      </label>
                      <input
                        placeholder="Lawyer ..."
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="profession"
                        {...register("profession")}
                        disabled={isSubmitting}
                      />
                      {errors.profession &&
                        errors.profession.type === "required" && (
                          <p className="text-base text-red-400 font-semibold">
                            {errors.profession.message}
                          </p>
                        )}
                    </div>

                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full 
                                      h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded 
                                      shadow-md bg-mainblue hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        disabled={isSubmitting}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                  <div>
                    <div>
                      <Link to="/sign-in">
                        <h2 className="flex text-xs text-gray-500 justify-center mb-2 mt-3">
                          Have An Account? Sign In
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </motion.div>
  );
};
