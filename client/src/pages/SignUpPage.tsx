import React from "react";
import SignUpForm from "../components/SignUpForm";
import SignUpImage from "../components/SignUpImage";

const SignUpPage = () => {
  return (
    <div className="flex ">
      <SignUpForm />
      <SignUpImage />
    </div>
  );
};

export default SignUpPage;
