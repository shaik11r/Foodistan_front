import "./App.css";
import LoginPage from "./components/login/login";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="back">
      <LoginPage />
    </div>
  );
}

export default App;
