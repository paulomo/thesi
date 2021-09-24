import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { motion } from "framer-motion";

export const ThankYou: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3 } }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full mt-10 lg:mt-16 text-textSecondaryColor">
        <div className="lg:grid lg:justify-center p-6 lg:gap-3 text-center">
          <h2 className="text-xl font-bold lg:text-2xl mt-6">
            Wow - You Must Really Like What We Are Doing!
          </h2>
          <h2 className="text-xl font-bold lg:mt-6 lg:text-2xl mt-6">
            {" "}
            Thank You
          </h2>
        </div>
        <div className="lg:grid lg:grid-cols-8 lg:gap-10">
          <div className="text-base text-center lg:col-start-2 lg:col-end-8">
            <div className="mt-10">
              <h2 className="text-xl px-6 text-primaryOne">
                Share with Family and Friends
              </h2>
              <h2 className="mt-4 mb-6 font-semibold text-primaryOne">
                Connect with them on ClothME
              </h2>
            </div>
            <div className="">
              <h2 className="font-semibold mt-20 text-red-400">
                Click To Share
              </h2>
            </div>
            <div className="flex justify-center gap-4 mb-10 mt-4">
              <div>
                <FacebookShareButton
                  url={"https://clothme.io"}
                  quote={"Fashion Commerce"}
                  hashtag="#clothme"
                >
                  <FacebookIcon size={44} />
                </FacebookShareButton>
              </div>
              <div>
                <TwitterShareButton
                  url={"https://clothme.io"}
                  title={"Fashion Commerce"}
                >
                  <TwitterIcon size={44} />
                </TwitterShareButton>
              </div>
              <div>
                <LinkedinShareButton
                  url="https://clothme.io"
                  title=""
                  summary=""
                  source=""
                >
                  <LinkedinIcon size={44} />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
