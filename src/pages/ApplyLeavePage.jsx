import { useState } from "react";
import API from "../api/api";

export default function ApplyLeavePage() {
  const [form, setForm] = useState({
    employeeId: "",
    startDate: "",
    endDate: "",
    reason: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/leave", form);
      alert("Leave applied successfully");
    } catch (err) {
      alert(err.response?.data?.error || "Error applying leave");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Apply for Leave
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="employeeId"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Employee ID
            </label>
            <input
              id="employeeId"
              name="employeeId"
              placeholder="Enter Employee ID"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none border-gray-300"
            />
          </div>

          <div>
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Start Date
            </label>
            <input
              id="startDate"
              type="date"
              name="startDate"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none border-gray-300"
            />
          </div>

          <div>
            <label
              htmlFor="endDate"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              End Date
            </label>
            <input
              id="endDate"
              type="date"
              name="endDate"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none border-gray-300"
            />
          </div>

          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Reason
            </label>
            <textarea
              id="reason"
              name="reason"
              placeholder="Enter reason for leave"
              rows="3"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none border-gray-300 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
}
