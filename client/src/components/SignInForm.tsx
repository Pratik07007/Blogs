import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <div className="w-screen md:w-1/2">

    <section className=" text-white  ">
      <div className="  flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="  w-full bg-black text-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
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
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
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
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              <div className="flex items-center justify-between"></div>
              <button
                type="submit"
                className="w-full border-[0.5px] border-white outline-none hover:bg-blue-400 duration-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <Link to={"/signup"}>
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Sign up
                  </a>
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
