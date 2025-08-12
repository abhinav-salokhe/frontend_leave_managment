import { useEffect, useState } from "react";
import API from "../api/api";

export default function EmployeeListPage() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    API.get("/employee") // Ensure backend GET /employee returns all employees
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Employees</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-2 text-left">ID</th> {/* Added */}
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Department</th>
                <th className="px-4 py-2 text-left">Joining Date</th>
                <th className="px-4 py-2 text-left">Leave Balance</th>
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 ? (
                employees.map((emp) => (
                  <tr
                    key={emp.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-2">{emp.id}</td> {/* Added */}
                    <td className="px-4 py-2">{emp.name}</td>
                    <td className="px-4 py-2">{emp.email}</td>
                    <td className="px-4 py-2">{emp.department}</td>
                    <td className="px-4 py-2">
                      {new Date(emp.joiningDate).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2">{emp.leaveBalance}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6" // Updated colspan since now we have 6 columns
                    className="px-4 py-4 text-center text-gray-500"
                  >
                    No employees found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
