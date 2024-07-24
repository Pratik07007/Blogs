import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./utils/Layout";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import AddBlog from "./pages/AddBlog";
import ContactUs from "./pages/ContactUs";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "signup",
          element: <SignUpPage />,
        },
        {
          path: "signin",
          element: <SignIn />,
        },
        {
          path: "blog/:blogId",
          element: <Blog />,
        },
        {
          path: "blogs",
          element: <Blogs />,
        },
        {
          path: "upload",
          element: <AddBlog />,
        },{
          path:"contacts",
          element: <ContactUs/>
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
