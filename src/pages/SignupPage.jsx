import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  // const [form, setForm] = useState({ username: "", password: "" });
  // const [message, setMessage] = useState("");
  // const navigate = useNavigate();
  // const handleChange = (e) =>
  //   setForm({ ...form, [e.target.name]: e.target.value });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await API.post("/auth/signup", form);
  //     setMessage(res.data.message);
  //     // If signup is successful, redirect to dashboard
  //     if (res.status === 200 || res.status === 201) {
  //       setTimeout(() => {
  //         navigate("/dashboard");
  //       }, 1000); // small delay so user sees success message
  //     }
  //   } catch (err) {
  //     setMessage(err.response?.data?.message || "Error");
  //   }
  // };

  // return (
  //   <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
  //     <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
  //       <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
  //         Create an Account
  //       </h2>

  //       <form onSubmit={handleSubmit} className="space-y-5">
  //         <div>
  //           <label
  //             htmlFor="username"
  //             className="block text-sm font-medium text-gray-600 mb-1"
  //           >
  //             Email
  //           </label>
  //           <input
  //             id="username"
  //             name="username"
  //             type="email"
  //             placeholder="Enter your email"
  //             onChange={handleChange}
  //             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none border-gray-300"
  //           />
  //         </div>

  //         <div>
  //           <label
  //             htmlFor="password"
  //             className="block text-sm font-medium text-gray-600 mb-1"
  //           >
  //             Password
  //           </label>
  //           <input
  //             id="password"
  //             name="password"
  //             type="password"
  //             placeholder="Enter your password"
  //             onChange={handleChange}
  //             className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none border-gray-300"
  //           />
  //         </div>

  //         <button
  //           type="submit"
  //           className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
  //         >
  //           Signup
  //         </button>
  //       </form>

  //       {message && (
  //         <p
  //           className={`mt-4 text-center text-sm ${
  //             message.toLowerCase().includes("error")
  //               ? "text-red-500"
  //               : "text-green-600"
  //           }`}
  //         >
  //           {message}
  //         </p>
  //       )}
  //     </div>
  //   </div>
  // );





  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await API.post("/auth/signup", form);
      setMessage(res.data.message);
      
      // If signup is successful, redirect to signin page
      if (res.status === 200 || res.status === 201) {
        setTimeout(() => {
          navigate("/signin"); // Changed from /dashboard to /signin
        }, 1500);
      }
    } catch (err) {
      console.error("Signup error:", err);
      setMessage(err.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Email
            </label>
            <input
              id="username"
              name="username"
              type="email"
              placeholder="Enter your email"
              value={form.username}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none border-gray-300 disabled:opacity-50"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
              disabled={loading}
              minLength={6}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none border-gray-300 disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Signup"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.toLowerCase().includes("error") || message.toLowerCase().includes("failed")
                ? "text-red-500"
                : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}

        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="/signin"
            className="text-blue-500 hover:underline font-medium"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
