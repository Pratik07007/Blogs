import SignInForm from "../components/SignInForm";
import SignUpImage from "../components/AuthSideImage";

const SignIn = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <SignInForm />
      <SignUpImage />
    </div>
  );
};

export default SignIn;
