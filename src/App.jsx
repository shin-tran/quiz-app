import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import "@ant-design/v5-patch-for-react-19";

function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;
