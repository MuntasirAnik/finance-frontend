import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import FooterComponent from "./Component/Footer/Footer";
import Layouts from "./Component/Layout/Layout";

function App() {
  return (
    <>
    <Layouts/>
      {/* <Navbar />
      <Outlet /> */}
      {/* <FooterComponent /> */}
    </>
  );
}

export default App;
