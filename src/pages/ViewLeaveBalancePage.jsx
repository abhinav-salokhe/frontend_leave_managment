import { useState } from "react";
import API from "../api/api";

export default function ViewLeaveBalancePage() {
  const [empId, setEmpId] = useState("");
  const [balance, setBalance] = useState(null);

  const handleCheck = async () => {
    try {
      const res = await API.get(`/employee/${empId}/leave-balance`);
      setBalance(res.data.leaveBalance);
    } catch (err) {
      alert(err.response?.data?.error || "Error fetching leave balance");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Check Leave Balance
        </h2>

        <div className="space-y-5">
          <div>
            <label
              htmlFor="empId"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Employee ID
            </label>
            <input
              id="empId"
              value={empId}
              onChange={(e) => setEmpId(e.target.value)}
              placeholder="Enter Employee ID"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none border-gray-300"
            />
          </div>

          <button
            onClick={handleCheck}
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Check Balance
          </button>

          {balance !== null && (
            <p className="mt-4 text-center text-lg font-medium text-green-600">
              Leave Balance: {balance} days
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
