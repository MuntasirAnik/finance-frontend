import { Link } from "react-router-dom";
import logo from "./logo.png";
// import { useAuth } from "../../Context/useAuth";

interface Props {}

const Navbar = (props: Props) => {
  // const { isLoggedIn, user, logout } = useAuth();
  return (
    <nav className="w-full container mx-auto p-6 sticky top-0 z-20 bg-slate-900">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className=" font-bold lg:flex">
            <Link to="/search" className="text-white hover:text-darkBlue">
              Search
            </Link>
          </div>
        </div>
        {/* {isLoggedIn() ? (*/}
        <div className="hidden lg:flex items-center space-x-6 text-white">
          <div className="hover:text-darkBlue">
            Welcome, {/*{user?.userName}*/}
          </div>
          <a
            // onClick={logout}
            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
            Logout
          </a>
        </div>
        {/* ) : (*/}
        <div className="lg:flex items-center space-x-6 text-white">
          <Link to="/login" className="hover:text-darkBlue">
            Login
          </Link>
          <Link
            to="/register"
            className="px-8 py-3 font-bold rounded text-white
          bg-lightGreen hover:opacity-70"
          >
            Signup
          </Link>
        </div>
        {/* )} */}
      </div>
    </nav>
  );
};

export default Navbar;
