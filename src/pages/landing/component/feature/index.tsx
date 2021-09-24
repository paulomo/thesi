import React from "react";
import { FcEditImage, FcPlanner, FcStatistics } from "react-icons/fc";

export const Feature = () => {
  return (
    <div
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28 
    text-textSecondaryColor"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12">
        <h2
          className="max-w-lg lg:max-w-4xl mb-2 font-sans text-3xl lg:text-5xl font-bold leading-none tracking-tight 
        sm:text-4xl md:mx-auto"
        >
          Save 10+ hours weekly with AI powered
        </h2>
        <h2
          className="max-w-lg lg:max-w-4xl mb-5 font-sans text-3xl lg:text-5xl font-bold leading-none tracking-tight 
        sm:text-4xl md:mx-auto"
        >
          Instagram automation tools
        </h2>
        <p className="text-lg text-textSecondaryColor md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
        <div className="sm:text-center">
          <div
            className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 
          sm:h-24"
          >
            <FcEditImage className="w-14 h-14" />
            {/* <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg> */}
          </div>
          <h6 className="text-lg text-red-400 mb-2 font-bold leading-5">
            Write Post
          </h6>
          <p className="max-w-md mb-3 text-sm text-textSecondaryColor sm:mx-auto">
            Cheese on toast airedale the big cheese. Danish fontina cheesy grin
            airedale danish
          </p>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FcPlanner className="w-14 h-14" />
          </div>
          <h6 className="text-lg text-red-400 mb-2 font-bold leading-5">
            Schedule Post
          </h6>
          <p className="max-w-md mb-3 text-sm text-textSecondaryColor sm:mx-auto">
            Satoshi Nakamoto launched lots of decentralisation when Litecoin
            required
          </p>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FcStatistics className="w-14 h-14" />
          </div>
          <h6 className="text-lg text-red-400 mb-2 font-bold leading-5">
            See Performance
          </h6>
          <p className="max-w-md mb-3 text-sm text-textSecondaryColor sm:mx-auto">
            Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i
            mechad
          </p>
          {/* <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a> */}
        </div>
      </div>
    </div>
  );
};