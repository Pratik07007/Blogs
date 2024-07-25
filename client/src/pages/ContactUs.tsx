import axios from "axios";
import { FormEvent, useState } from "react";
import BACKEND_URL from "../utils/Backend_Url";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [contactUsPayload, setContactUsPayload] = useState({
    email: "",
    subject: "",
    message: "",
  });

  async function handelContactUsSubmit(
    e: FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    setIsLoading(true);
    const response = await axios.post(
      `${BACKEND_URL}/contact`,
      contactUsPayload
    );
    setIsLoading(false);
    {
      response.data.succes
        ? toast.success(response.data.msg)
        : toast.error(response.data.msg);
    }
  }

  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white ">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
        </p>
        <form onSubmit={handelContactUsSubmit} className="space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-white ">
              Your email
            </label>
            <input
              value={contactUsPayload.email}
              onChange={(e) =>
                setContactUsPayload({
                  ...contactUsPayload,
                  email: e.target.value,
                })
              }
              className="shadow-sm text-black placeholder:text-gray-500 bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white ">
              Subject
            </label>
            <input
              value={contactUsPayload.subject}
              onChange={(e) =>
                setContactUsPayload({
                  ...contactUsPayload,
                  subject: e.target.value,
                })
              }
              className=" placeholder:text-gray-500 block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-white dark:text-gray-400">
              Your message
            </label>
            <textarea
              value={contactUsPayload.message}
              onChange={(e) =>
                setContactUsPayload({
                  ...contactUsPayload,
                  message: e.target.value,
                })
              }
              rows={6}
              className=" placeholder:text-gray-500 block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="py-3 px-5 border-[0.2px] hover:bg-blue-400 duration-500 rounded-2xl text-sm font-medium text-center text-white bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            {isLoading ? (
              <div className="flex gap-5 items-center">
                <Spinner />
                <h1 className="text-xl">Loading....</h1>
              </div>
            ) : (
              "Send message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
