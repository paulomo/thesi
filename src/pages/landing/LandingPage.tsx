import React from "react";
import { EmailForm, Feature, Footer, Nav, Step, Top } from "./component";

export const LandingPage: React.FC = () => {
  return (
    <React.Fragment>
      <div>
        <Top />
      </div>

      <div>
        <Feature />
      </div>

      <div>
        <EmailForm />
      </div>

      <div>
        <Step />
      </div>

      <div>
        <Footer />
      </div>
    </React.Fragment>
  );
};
