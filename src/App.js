import "./App.css";
import NavBar from "./components/navbar/navbar";
import Head from "./components/landingpage/Head";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";
import store from "./utils/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="back">
        <NavBar />
        <Head />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
