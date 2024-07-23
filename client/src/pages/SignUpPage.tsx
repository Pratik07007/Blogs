import SignUpImage from "../components/SignUpImage";
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
