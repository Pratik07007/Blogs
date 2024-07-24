import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { signInInputsTypes } from "@pratik07007/commons"; // Adjust import path as needed
import BACKEND_URL from "../utils/Backend_Url"; // Adjust import path as needed
import toast from "react-hot-toast";
import Spinner from "./Spinner";

const SignInForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [signInPayload, setSignInPayload] = useState<signInInputsTypes>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${BACKEND_URL}/auth/signin`,
        signInPayload
      );

      if (response?.data?.succes) {
        toast.success(response?.data?.msg);
        localStorage.setItem("token", response.data.token);
        navigate("/"); // Navigate to home page after successful signin
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.error("Error during signin:", error);
      toast.error("Server side exception occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Update form fields in state as they change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-screen md:w-1/2">
      <section className="text-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-black text-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={signInPayload.email}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={signInPayload.password}
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full border-[0.5px] border-white outline-none hover:bg-blue-400 duration-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex gap-5 items-center">
                      <Spinner />
                      <h1 className="text-xl">Loading....</h1>
                    </div>
                  ) : (
                    "Sign in"
                  )}
                </button>

                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignInForm;
