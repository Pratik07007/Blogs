import SignUpImage from "../components/AuthSideImage";
import SignUpForm from "../components/SignUpForm";



const SignUpPage = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <SignUpForm />
      <SignUpImage />
    </div>
  );
};

export default SignUpPage;
