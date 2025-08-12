import { Link } from "react-router-dom";
import { logout } from "../utils/auth";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">HR Dashboard</h2>

        <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            to="/add-employee"
            className="block bg-blue-500 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-600 transition"
          >
            ➕ Add Employee
          </Link>
          <Link
            to="/employees"
            className="block bg-green-500 text-white text-center py-3 rounded-lg font-medium hover:bg-green-600 transition"
          >
            👥 View Employees
          </Link>
          <Link
            to="/apply-leave"
            className="block bg-yellow-500 text-white text-center py-3 rounded-lg font-medium hover:bg-yellow-600 transition"
          >
            📝 Apply Leave
          </Link>
          <Link
            to="/leave-requests"
            className="block bg-purple-500 text-white text-center py-3 rounded-lg font-medium hover:bg-purple-600 transition"
          >
            📄 Leave Requests
          </Link>
          <Link
            to="/leave-balance"
            className="block bg-indigo-500 text-white text-center py-3 rounded-lg font-medium hover:bg-indigo-600 transition"
          >
            📊 Leave Balance
          </Link>
          <button
            onClick={logout}
            className="block w-full bg-red-500 text-white text-center py-3 rounded-lg font-medium hover:bg-red-600 transition"
          >
            🚪 Logout
          </button>
        </nav>
      </div>
    </div>
  );
}
