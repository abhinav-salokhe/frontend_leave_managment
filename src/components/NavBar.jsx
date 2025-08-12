import { NavLink } from "react-router-dom";
import { logout, getToken } from "../utils/auth";

export default function NavBar() {
  const isAuth = !!getToken();

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-500 hover:text-white"
    }`;

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <ul className="flex space-x-4">
            {!isAuth && (
              <>
                <li>
                  <NavLink to="/signin" className={linkClass}>
                    Signin
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/signup" className={linkClass}>
                    Signup
                  </NavLink>
                </li>
              </>
            )}

            {isAuth && (
              <>
                <li>
                  <NavLink to="/" className={linkClass}>
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/add-employee" className={linkClass}>
                    Add Employee
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/employees" className={linkClass}>
                    Employees
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/apply-leave" className={linkClass}>
                    Apply Leave
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/leave-requests" className={linkClass}>
                    Leave Requests
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/leave-balance" className={linkClass}>
                    Leave Balance
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={() => logout()}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-red-500 hover:text-white transition-colors duration-200"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
