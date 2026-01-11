import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import Layout from "../components/Layout";
import { loginUser } from "../api/api";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(formData);
      navigate("/home");
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center bg-gray-100 dark:bg-slate-900 px-4 min-h-[73vh]">
        <div className="w-full md:w-7/12 p-8 md:p-10 flex items-center justify-center bg-white dark:bg-slate-900 rounded-lg shadow-lg">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 dark:text-gray-100 mb-6 text-center transition-all duration-300 transform hover:scale-105">
              Welcome Back
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
                className="w-full p-4 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 text-slate-800 dark:text-gray-100 bg-gray-100 dark:bg-slate-800 transition-transform duration-300 hover:scale-105"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
                className="w-full p-4 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 text-slate-800 dark:text-gray-100 bg-gray-100 dark:bg-slate-800 transition-transform duration-300 hover:scale-105"
              />
              <button
                type="submit"
                className="w-full py-3 bg-green-500 dark:bg-green-600 text-white rounded-lg shadow-md hover:bg-green-600 dark:hover:bg-green-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-all duration-300 transform hover:scale-105"
              >
                Login
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-slate-700 dark:text-gray-300">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default Login;
