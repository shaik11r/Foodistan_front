import "./App.css";
import LoginPage from "./components/login/login";
import NavBar from "./components/navbar/navbar"
import Head from "./components/landingpage/Head"
import Body from "./components/landingpage/Body";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="back">
      <NavBar />
      <Head />
      <Outlet/>
    </div>
  );
}

export default App;
