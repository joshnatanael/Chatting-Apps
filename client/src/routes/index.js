import { createBrowserRouter } from "react-router-dom";
import HomePage from "../view/HomePage";
import LoginRegisterPage from "../view/LoginRegisterPage";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <LoginRegisterPage type="register"/>,
  },
  {
    path: "/login",
    element: <LoginRegisterPage type="login"/>,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default router;