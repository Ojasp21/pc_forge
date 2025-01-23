import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const validateForm = () => {
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (!formData.password) {
      toast.error("Password is required");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      login(formData);
      
    }
  };

  return (
    <>
    <img className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1] opacity-50" src="/src/images/Loginbg.jpg" alt="" />
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-gray-200 shadow-lg rounded-lg px-8 py-6 w-full max-w-md ">
        <h1 className="log text-2xl flex justify-center mb-4 text-gray-700 mt-3">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="font-medium w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-control mb-6">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Logging In..." : "Log In"}
          </button>
        </form>

        <div className="mt-4 text-gray-600 mb-3">
          <p className="">
            {"Don't have an account? "}
            <Link to="/signup" className="text-blue-500 hover:text-blue-600 font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginPage;

