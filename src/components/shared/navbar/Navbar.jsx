import { FaHome, FaClock, FaChartLine } from "react-icons/fa";
import { NavLink } from "react-router";


const Navbar = () => {

   const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded ${
      isActive
        ? "bg-[#244D3F] text-white"
        : "text-gray-600 hover:bg-[#244D3F] hover:text-white"
    }`;

const menuItems = (
  <>
    <li>
      <NavLink to="/" end className={linkClass}>
        <FaHome />
        Home
      </NavLink>
    </li>

    <li>
      <NavLink to="/timeline" className={linkClass}>
        <FaClock />
        Timeline
      </NavLink>
    </li>

    <li>
      <NavLink to="/stats" className={linkClass}>
        <FaChartLine />
        Stats
      </NavLink>
    </li>
  </>
);

  return (
    <div className="bg-base-200 shadow-sm">
      <div className="navbar md:mx-auto md:max-w-7xl">
        <div className="flex-1">
          <a className="text-2xl"> <span className="font-bold">Keen</span>Keeper</a>
        </div>
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            onClick={() => document.activeElement.blur()}
            >
            {menuItems}
            </ul>
        </div>


        <div className="hidden lg:flex flex-none">
          <ul className="menu menu-horizontal px-1 items-center gap-2 font-semibold">
            {menuItems}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;