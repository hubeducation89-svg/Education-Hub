import { Link } from "react-router-dom";
import { LogIn, LayoutDashboard } from "lucide-react";
import logoImg from "../assets/images/edu_hub_logo_1781763284457.jpg";

export function Navbar() {
  return (
    <nav className="bg-[#0f2147] border-b border-[#0f2147] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[80px] items-center">
          <div className="flex flex-shrink-0 items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-1 shadow-sm">
                <img src={logoImg} alt="Education Hub Logo" className="w-full h-full rounded-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-2xl text-white tracking-wide leading-none hidden sm:block">
                  EDUCATION <span className="text-[#ffb703]">HUB</span>
                </span>
                <span className="font-cursive text-[#ffb703] text-sm tracking-widest hidden sm:block italic">
                  by Gunjan Gaur
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-100 hover:text-[#ffb703] font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-gray-100 hover:text-[#ffb703] font-medium transition-colors">About Us</Link>
            <Link to="/courses" className="text-gray-100 hover:text-[#ffb703] font-medium transition-colors">Courses</Link>
            <Link to="/notes" className="text-gray-100 hover:text-[#ffb703] font-medium transition-colors">Notes</Link>
            <Link to="/blog" className="text-gray-100 hover:text-[#ffb703] font-medium transition-colors">Blog</Link>
            <Link to="/contact" className="text-gray-100 hover:text-[#ffb703] font-medium transition-colors">Contact Us</Link>
          </div>
          <div className="flex gap-4">
            <Link to="/dashboard" className="inline-flex items-center gap-2 justify-center rounded-full text-sm font-bold transition-all focus-visible:outline-none bg-white text-[#0f2147] shadow-sm hover:bg-gray-100 h-10 px-5 py-2">
              <LayoutDashboard className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
            <button className="inline-flex items-center gap-2 justify-center rounded-full text-sm font-bold transition-all focus-visible:outline-none bg-[#ffb703] text-[#0f2147] shadow hover:bg-yellow-500 h-10 px-5 py-2">
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
