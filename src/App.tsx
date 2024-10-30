import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import FooterComponent from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <FooterComponent /> */}
    </>
  );
}

export default App;
