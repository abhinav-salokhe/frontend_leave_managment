import { useEffect, useState } from "react";
import API from "../api/api";

export default function LeaveRequestsPage() {
  const [leaves, setLeaves] = useState([]);

  const fetchLeaves = () => {
    API.get("/leave")
      .then((res) => setLeaves(res.data))
      .catch((err) => console.error(err));
  };

  const handleApprove = async (leaveId) => {
    try {
      await API.post(`/leave/${leaveId}/approve`);
      fetchLeaves();
    } catch (err) {
      console.error(err);
    }
  };

  const handleReject = async (leaveId) => {
    try {
      await API.post(`/leave/${leaveId}/reject`);
      fetchLeaves();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Leave Requests
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-2 text-left">Leave ID</th>
                <th className="px-4 py-2 text-left">Employee ID</th>
                <th className="px-4 py-2 text-left">Start</th>
                <th className="px-4 py-2 text-left">End</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Reason</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaves.length > 0 ? (
                leaves.map((leave) => (
                  <tr
                    key={leave.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-2">{leave.id}</td>
                    <td className="px-4 py-2">{leave.employeeId}</td>
                    <td className="px-4 py-2">
                      {new Date(leave.startDate).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2">
                      {new Date(leave.endDate).toLocaleDateString()}
                    </td>
                    <td
                      className={`px-4 py-2 font-medium ${
                        leave.status === "PENDING"
                          ? "text-yellow-600"
                          : leave.status === "APPROVED"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {leave.status}
                    </td>
                    <td className="px-4 py-2">{leave.reason}</td>
                    <td className="px-4 py-2">
                      {leave.status === "PENDING" && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleApprove(leave.id)}
                            className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleReject(leave.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                          >
                            Reject
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="px-4 py-4 text-center text-gray-500"
                  >
                    No leave requests found
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
