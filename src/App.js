import "./App.css";
import NavBar from "./components/navbar/navbar";
import Head from "./components/landingpage/Head";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="back">
      <NavBar />
      <Head />
      <Outlet />
    </div>
  );
}

export default App;
