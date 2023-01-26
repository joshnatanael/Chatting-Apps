import { createBrowserRouter } from "react-router-dom";
import HomePage from "../view/HomePage";
import LoginPage from "../view/LoginPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default router;