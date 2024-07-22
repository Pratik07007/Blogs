import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Home</h1>,
    },
    {
      path:"/signin",
      element: <SignUpPage/>
    },
    {
      path:"/signup",
      element: <h1>Signup</h1>
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
