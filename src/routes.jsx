import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Quiz from "./pages/Quiz";
import PrivateRoutes from "./components/PrivateRoutes";
import Answers from "./pages/Answers";
import Topic from "./pages/Topic";
import DefaultLayout from "./layouts/DefaultLayout";

export const routes = [
  {
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      { path: "/quiz", element: <Quiz /> },
      { path: "/topic", element: <Topic /> },
      { path: "/answers", element: <Answers /> },
      { path: "/result", element: <Result /> },
    ],
  },
];
