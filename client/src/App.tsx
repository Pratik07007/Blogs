import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import Test from "./pages/Test";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Test />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/signin",
      element: <h1>Signin</h1>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
