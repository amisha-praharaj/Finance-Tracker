import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { signupUser } from "../api/api";
import { showErrorToast } from "../utils/toast";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      showErrorToast("Please fill in all fields.");
      return;
    }

    try {
      await signupUser(formData);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center bg-gray-100 dark:bg-slate-900 px-4 min-h-[73vh]">
        <div className="w-full md:w-7/12 p-8 md:p-10 flex items-center justify-center bg-white dark:bg-slate-900 rounded-lg shadow-lg">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 dark:text-slate-100 mb-6 text-center transition-all duration-300 transform hover:scale-105">
              Create Your Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 text-slate-800 dark:text-gray-100 bg-gray-100 dark:bg-slate-800 transition-transform duration-300 hover:scale-105"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 text-slate-800 dark:text-gray-100 bg-gray-100 dark:bg-slate-800 transition-transform duration-300 hover:scale-105"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-4 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 text-slate-800 dark:text-gray-100 bg-gray-100 dark:bg-slate-800 transition-transform duration-300 hover:scale-105"
              />
              <button
                type="submit"
                className="w-full py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 transform hover:scale-105"
              >
                Signup
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-slate-800 dark:text-slate-300">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-600 hover:underline transition-all duration-300 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
