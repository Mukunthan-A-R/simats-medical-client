import React, { useState } from "react";
import { UserIcon, KeyIcon, LogInIcon } from "lucide-react";
import Banner from "../../public/loginBanner.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (username === "s" && password === "s") {
      alert("Logged in as student!");
      navigate("/student/dashboard");
      // Here you can redirect or call a login API
    } else if (username === "t" && password === "t") {
      alert("Logged in as faculty!");
      navigate("/faculty/dashboard");
    } else if (username === "p" && password === "p") {
      alert("Logged in as patient!");
    } else {
      setError(
        "Invalid credentials. Use username/password: s/s for student, p/p for patient, t/t for faculty."
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Hero Image Section */}
      <div className="relative h-80 sm:h-96 md:h-[32rem]  w-full">
        <img
          src={Banner}
          alt="Saveetha Medical College and Hospitals"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Login Form Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 -mt-12 sm:-mt-16 z-10">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-8 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-gray-800">
              Medical Portal Login
            </h2>

            <form className="space-y-5" onSubmit={handleLoginSubmit}>
              {/* Username */}
              <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50 px-4 py-3 shadow-inner">
                <UserIcon className="h-5 w-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="ID / Username"
                  className="flex-1 outline-none bg-transparent text-gray-700"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50 px-4 py-3 shadow-inner">
                <KeyIcon className="h-5 w-5 text-gray-400 mr-3" />
                <input
                  type="password"
                  placeholder="Password"
                  className="flex-1 outline-none bg-transparent text-gray-700"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Error message */}
              {error && (
                <div className="text-red-600 text-sm px-3 py-2 bg-red-50 border border-red-200 rounded-lg">
                  {error}
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg flex items-center justify-center font-medium text-white relative overflow-hidden transition-all active:translate-y-0.5 active:shadow-inner before:absolute before:inset-0 before:bg-gradient-to-b before:from-white before:via-transparent before:to-transparent before:opacity-50 bg-gradient-to-b from-blue-500 to-blue-700 shadow-md"
              >
                <LogInIcon className="h-5 w-5 mr-2" />
                Login
              </button>
            </form>

            {/* Forgot Password */}
            <div className="mt-5 text-center">
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </div>

        {/* Footer / Support */}
        <div className="mt-6 text-center text-sm text-gray-600 px-4">
          <p>Need help? Contact hospital support at</p>
          <p className="font-medium">support@saveethamedical.com</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
