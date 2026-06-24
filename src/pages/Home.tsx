import { Link } from "react-router-dom";
import { CheckCircle, Users, BookOpen, Sparkles, ArrowRight, PlayCircle } from "lucide-react";
import { COURSES } from "../data";
import heroImg from "../assets/images/hero_illustration_1781763701194.jpg";
import { SEO } from "../components/SEO";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO title="Home" />
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 top-0 w-full h-[600px] bg-gradient-to-br from-[#0f2147] via-[#0f2147] to-[#1a365d] rounded-br-[100px] lg:rounded-br-[200px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-20 pb-20 lg:pt-32 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-left space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffb703]/10 border border-[#ffb703]/20 text-[#ffb703] font-medium text-sm shadow-sm">
                <Sparkles className="w-4 h-4" />
                <span className="tracking-widest uppercase">Learn | Grow | Achieve</span>
              </div>
              
              <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                EDUCATION <span className="text-[#ffb703]">HUB</span>
                <span className="block text-2xl lg:text-4xl font-cursive font-normal mt-4 text-[#e2e8f0]">by Gunjan Gaur</span>
              </h1>
              
              <p className="text-xl text-blue-100 max-w-lg leading-relaxed pt-2">
                Empowering students with practical skills and quality education. Join our community and build a brighter future.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/courses" className="inline-flex justify-center items-center gap-2 px-8 py-4 border border-transparent text-lg font-bold rounded-full text-[#0f2147] bg-[#ffb703] hover:bg-yellow-400 shadow-[0_0_15px_rgba(255,183,3,0.4)] hover:shadow-[0_0_25px_rgba(255,183,3,0.6)] transition-all duration-200 transform hover:-translate-y-1">
                  Explore Courses
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/about" className="inline-flex justify-center items-center gap-2 px-8 py-4 border-2 border-slate-600/50 text-lg font-bold rounded-full text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-200 ease-in-out transform hover:-translate-y-1">
                  <PlayCircle className="w-5 h-5 text-gray-300" />
                  Our Story
                </Link>
              </div>
              

            </div>
            
            {/* Visual/Image Content */}
            <div className="relative hidden lg:block z-10 pl-8">
              <div className="absolute inset-0 bg-[#ffb703] blur-3xl opacity-20 transform scale-110 rounded-full" />
              <div className="relative border-[8px] border-white rounded-[3rem] shadow-2xl overflow-hidden bg-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src={heroImg} alt="Education Hub by GUNJAN GAUR - Best Programming and Science Courses Banner" className="w-full h-[450px] object-cover" />
                
                {/* Floating Badge */}
                <div className="absolute top-6 -left-6 bg-[#0f2147] p-4 rounded-xl shadow-xl border border-slate-700 flex items-center gap-4 animate-bounce-slow">
                  <div className="bg-[#ffb703] p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-[#0f2147]" />
                  </div>
                  <div className="pr-2">
                    <div className="font-bold text-white text-sm">Expert Guidance</div>
                    <div className="text-xs text-blue-200">Learn from the best</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f2147] mb-4">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-[#ffb703] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Expert Guidance",
              "Practical Learning Approach",
              "Affordable Courses",
              "Career-Oriented Training",
              "Beginner Friendly Content",
              "Certificate Courses",
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 p-6 border-b-4 border-transparent hover:border-[#ffb703] rounded-2xl shadow-sm bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-[#ffb703]/10 p-3 rounded-full h-fit mt-1">
                  <CheckCircle className="w-6 h-6 text-[#ffb703] flex-shrink-0" />
                </div>
                <div className="font-bold text-[#0f2147] text-lg lg:text-xl pt-2">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="py-20 px-4 bg-white relative">
        <div className="absolute left-0 top-0 w-64 h-64 bg-[#ffb703]/5 rounded-full blur-3xl -ml-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f2147] mb-4">Popular Courses</h2>
              <div className="w-24 h-1 bg-[#ffb703] rounded-full"></div>
            </div>
            <Link to="/courses" className="hidden md:inline-flex justify-center items-center gap-2 px-6 py-3 border border-[#0f2147] text-base font-bold rounded-full text-[#0f2147] bg-transparent hover:bg-[#0f2147] hover:text-white transition-colors">
              View all courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.slice(0, 3).map((course, i) => (
              <div key={course.id} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col">
                <div className="relative overflow-hidden">
                  {course.image && (
                    <img src={course.image} alt={`${course.title} free video course by Education Hub by GUNJAN GAUR`} className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,33,71,0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-[#ffb703] font-bold text-sm tracking-widest uppercase">Explore Module</span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-extrabold text-xl text-[#0f2147] mb-3 leading-tight group-hover:text-blue-700 transition-colors">{course.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed flex-1">{course.description}</p>
                  <a href={course.videoLink || course.modules[0]?.videoLink || "#"} target="_blank" rel="noopener noreferrer" className="text-[#ffb703] font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto uppercase tracking-wider">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 md:hidden">
            <Link to="/courses" className="inline-flex justify-center items-center gap-2 px-8 py-4 border border-[#0f2147] font-bold rounded-full text-[#0f2147] hover:bg-[#0f2147] hover:text-white transition-colors w-full">
              View all courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Student Success Section */}
      <section className="py-24 px-4 text-center bg-[#0f2147] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1a365d] rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Student Success</h2>
            <div className="w-24 h-1 bg-[#ffb703] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transform hover:-translate-y-2 transition-transform">
              <div className="text-5xl font-extrabold text-[#ffb703] mb-4">500+</div>
              <div className="text-blue-100 font-medium text-lg uppercase tracking-wider">Students Trained</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transform hover:-translate-y-2 transition-transform">
              <div className="text-5xl font-extrabold text-[#ffb703] mb-4">100+</div>
              <div className="text-blue-100 font-medium text-lg uppercase tracking-wider">Practical Projects</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transform hover:-translate-y-2 transition-transform flex flex-col items-center justify-center">
              <div className="mb-4">
                <Users className="w-12 h-12 text-[#ffb703]" />
              </div>
              <div className="text-blue-100 font-medium text-lg uppercase tracking-wider">Growing Community</div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#ffb703] text-[#0f2147] font-extrabold px-8 py-3 rounded-full text-lg shadow-lg">
              Testimonials
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="bg-[#f8faff] p-8 rounded-2xl text-left border border-slate-100 relative">
                <div className="text-8xl text-slate-200 font-serif absolute top-4 right-4 opacity-50">"</div>
                <p className="italic text-slate-700 text-lg relative z-10 font-medium">
                  The teaching style is simple and easy to understand. Highly recommended!
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0f2147] flex items-center justify-center text-white font-bold">R</div>
                  <div className="font-bold text-[#0f2147]">Rahul Sharma</div>
                </div>
              </div>
              <div className="bg-[#f8faff] p-8 rounded-2xl text-left border border-slate-100 relative">
                <div className="text-8xl text-slate-200 font-serif absolute top-4 right-4 opacity-50">"</div>
                <p className="italic text-slate-700 text-lg relative z-10 font-medium">
                  Best platform for learning digital skills. Helped me build a great foundation.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ffb703] flex items-center justify-center text-[#0f2147] font-bold">P</div>
                  <div className="font-bold text-[#0f2147]">Priya Patel</div>
                </div>
              </div>
              <div className="bg-[#f8faff] p-8 rounded-2xl text-left border border-slate-100 relative">
                <div className="text-8xl text-slate-200 font-serif absolute top-4 right-4 opacity-50">"</div>
                <p className="italic text-slate-700 text-lg relative z-10 font-medium">
                  The C Programming course cleared all my doubts. Gunjan ma'am explains concepts very well.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">A</div>
                  <div className="font-bold text-[#0f2147]">Amit Kumar</div>
                </div>
              </div>
              <div className="bg-[#f8faff] p-8 rounded-2xl text-left border border-slate-100 relative">
                <div className="text-8xl text-slate-200 font-serif absolute top-4 right-4 opacity-50">"</div>
                <p className="italic text-slate-700 text-lg relative z-10 font-medium">
                  I joined the MS Office course, and it is amazing. I can now work much faster in Excel!
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold">N</div>
                  <div className="font-bold text-[#0f2147]">Neha Verma</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
