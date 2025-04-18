import Login from "./pages/Login";
import QuizList from "./pages/QuizList";
import Register from "./pages/Register";
import QuizDetail from "./pages/QuizDetail";
import { Result } from "antd";

export const routes = [
  { element: <QuizList />, path: "/" },
  { element: <Login />, path: "/login" },
  { element: <Register />, path: "/register" },
  { element: <QuizDetail />, path: "/quiz/:id" },
  { element: <Result />, path: "/result" },
];
