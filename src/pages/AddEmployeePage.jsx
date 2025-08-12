import { useState } from "react";
import API from "../api/api";

export default function AddEmployeePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    joiningDate: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/employee", form);
      alert("Employee added successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Error adding employee");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add New Employee
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="Enter full name"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none border-gray-300"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email address"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none border-gray-300"
            />
          </div>

          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Department
            </label>
            <input
              id="department"
              name="department"
              placeholder="Enter department"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none border-gray-300"
            />
          </div>

          <div>
            <label
              htmlFor="joiningDate"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Joining Date
            </label>
            <input
              id="joiningDate"
              type="date"
              name="joiningDate"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none border-gray-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}
