import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useMutation } from "react-query";
import { LeadService } from "../../../../networking";
import { LandingRoutes } from "../../../../route/RouteEnum";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


let schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  email: yup.string().required("Must be a valid email"),
});

type DataInputs = {
  firstName: string;
  email: string;
};

export const EmailForm: React.FC = () => {
  const history = useHistory();
  const leadsService = new LeadService();
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<DataInputs>({
    // resolver: yupResolver(schema),
  });
  const mutation = useMutation<any, any>(leadsService.addLead, {
    onSuccess: () => {
      setIsSuccessfullySubmitted(true);
      history.push(LandingRoutes.thankyou);
    },
  });

  const onSubmit = (data: any) => {
    reset();
    mutation.mutateAsync(data);
  };

  return (
    <React.Fragment>
      <div className="flex justify-center text-textSecondaryColor py-16">
        <div className="">
          <div className="">
            <div>
              <div className="flex justify-center mb-8">
                <div className="text-2xl">Be the first to take advantage of this huge productivity</div>
              </div>
              <div className="flex justify-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col md:flex-row">
                    <input
                      id="firstName"
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border 
                      border-gray-500 rounded shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 
                      focus:outline-none focus:shadow-outline"
                      placeholder="First Name"
                      {...register("firstName")}
                      disabled={isSubmitting || isSuccessfullySubmitted}
                    />
                    {errors.firstName &&
                      errors.firstName.type === "required" && (
                        <p className="text-base text-red-400 font-semibold">
                          {errors.firstName.message}
                        </p>
                      )}
                    <input
                      id="email"
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border 
                      border-gray-500 rounded shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 
                      focus:outline-none focus:shadow-outline"
                      placeholder="Email"
                      {...register("email")}
                      disabled={isSubmitting || isSuccessfullySubmitted}
                    />
                    {errors.email && errors.email.type === "required" && (
                      <p className="text-base text-red-400 font-semibold">
                        {errors.email.message}
                      </p>
                    )}
                    {errors.email && errors.email.type === "email" && (
                      <p className="text-base text-red-400 font-semibold">
                        {errors.email.message}
                      </p>
                    )}
                    <button
                      className="flex-grow w-full h-12 text-white bg-mainorange active:bg-pink-600 font-semibold 
                      text-lg px-3 py-2 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      style={{ transition: "all .15s ease" }}
                    >
                      {isSubmitting ? "Loading..." : "Join The Wailist Now!"}
                    </button>
                  </div>
                </form>
                {isSuccessfullySubmitted && (
                  <div className="text-base text-green-800 font-semibold">
                    Request was successfull
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
