import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { FaPerson } from "react-icons/fa6";

const LeftNav = () => {
  return (
    <div className=" mt-3">
      <div className="flex justify-start">
        <FaHome className="mt-1 "></FaHome>
        <NavLink className="ml-2" to="/">
          Home
        </NavLink>
        <br />
      </div>
      <div className="flex justify-start">
        <FaPerson className="mt-1 "></FaPerson>
        <NavLink className="ml-2" to="/">
          Employees
        </NavLink>
        <br />
      </div>
      <div className="flex justify-start">
        <IoIosPersonAdd className="mt-1 "></IoIosPersonAdd>
        <NavLink className="ml-2" to="/addemployee">
          Add Employees
        </NavLink>
      </div>
    </div>
  );
};

export default LeftNav;
