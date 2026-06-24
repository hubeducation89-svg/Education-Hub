import { Link } from "react-router-dom";
import { Youtube, Instagram, Facebook, Send } from "lucide-react";
import logoImg from "../assets/images/edu_hub_logo_1781763284457.jpg";

export function Footer() {
  return (
    <footer className="bg-[#0f2147] text-blue-100 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="bg-white p-1 rounded-full inline-flex items-center justify-center shadow-md">
                <img src={logoImg} alt="Education Hub Logo" className="h-12 w-12 object-contain rounded-full" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col justify-center text-left">
                <span className="font-extrabold text-2xl text-white tracking-wide leading-none">
                  EDUCATION <span className="text-[#ffb703]">HUB</span>
                </span>
                <span className="font-cursive text-[#ffb703] text-sm tracking-widest italic">
                  Gunjan Gaur
                </span>
              </div>
            </div>
            <p className="max-w-xs text-blue-200">
              Empowering students with practical skills and quality education. A place to learn, grow & build your future.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-white text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-3 font-medium">
              <Link to="/" className="text-blue-200 hover:text-[#ffb703] transition-colors inline-block transition-transform hover:translate-x-1">Home</Link>
              <Link to="/about" className="text-blue-200 hover:text-[#ffb703] transition-colors inline-block transition-transform hover:translate-x-1">About Us</Link>
              <Link to="/courses" className="text-blue-200 hover:text-[#ffb703] transition-colors inline-block transition-transform hover:translate-x-1">Courses</Link>
              <Link to="/blog" className="text-blue-200 hover:text-[#ffb703] transition-colors inline-block transition-transform hover:translate-x-1">Blog</Link>
              <Link to="/contact" className="text-blue-200 hover:text-[#ffb703] transition-colors inline-block transition-transform hover:translate-x-1">Contact Us</Link>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-white text-lg mb-6 uppercase tracking-wider">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@EducationHubbyGUNJANGAUR" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-[#ffb703] hover:text-[#0f2147] transition-all transform hover:-translate-y-1">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-[#ffb703] hover:text-[#0f2147] transition-all transform hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/hubeducation89" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-[#ffb703] hover:text-[#0f2147] transition-all transform hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-[#ffb703] hover:text-[#0f2147] transition-all transform hover:-translate-y-1">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700/50 mt-16 pt-8 text-center text-sm font-medium text-blue-200/60">
          <p>&copy; {new Date().getFullYear()} EDUCATION HUB By Gunjan Gaur. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
