import React, { useState } from "react";
import { Link, Routes, Route, useNavigate, useParams, Navigate } from "react-router-dom";
import { useAppContext } from "../context";
import { COURSES } from "../data";
import { CheckCircle, MessageSquare, Book, User, ArrowLeft, Send } from "lucide-react";
import { cn } from "../lib/utils";

// Sub-components for the dashboard
function StudentProgress() {
  const { state } = useAppContext();
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Learning Progress</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {COURSES.map(course => {
          const progress = state.progress[course.id] || { completedModules: [] };
          const completedCount = progress.completedModules.length;
          const totalCount = course.modules.length;
          const percent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);
          
          return (
            <div key={course.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-gray-900">{course.title}</h3>
                <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                  {percent}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${percent}%` }}></div>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                {completedCount} of {totalCount} modules completed
              </div>
              <Link to={`/dashboard/course/${course.id}`} className="text-indigo-600 font-medium hover:text-indigo-800 text-sm">
                Continue Learning &rarr;
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TeacherMessaging() {
  const { state, sendMessage } = useAppContext();
  const [msgText, setMsgText] = useState("");
  
  // A simple view of messages
  const sortedMessages = [...state.messages].sort((a, b) => a.timestamp - b.timestamp);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (msgText.trim()) {
      // In a real app we'd target a specific user. For this prototype, teacher messages student1.
      sendMessage(msgText.trim(), state.role === "teacher" ? "student1" : "teacher1");
      setMsgText("");
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">
          {state.role === "teacher" ? "Student Messages" : "Teacher Messages"}
        </h2>
        <span className="text-sm font-medium text-gray-500">
          Logged in as: {state.role}
        </span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {sortedMessages.map(msg => {
          const isMe = msg.senderId === (state.role === "teacher" ? "teacher1" : "student1");
          return (
            <div key={msg.id} className={cn("flex flex-col", isMe ? "items-end" : "items-start")}>
              <div className="text-xs text-gray-500 mb-1 mx-1">{msg.senderName}</div>
              <div className={cn(
                "px-4 py-2 rounded-2xl max-w-[80%]",
                isMe ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-900"
              )}>
                {msg.text}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="p-4 bg-white border-t border-gray-200">
        <form onSubmit={handleSend} className="flex gap-2">
          <input 
            type="text" 
            value={msgText}
            onChange={(e) => setMsgText(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          />
          <button type="submit" className="bg-indigo-600 text-white p-2 w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-700 transition">
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}

function CourseViewer() {
  const { courseId } = useParams();
  const { state, markModuleComplete } = useAppContext();
  const navigate = useNavigate();
  
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return <Navigate to="/dashboard" />;

  const progress = state.progress[course.id] || { completedModules: [] };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-indigo-600 px-6 py-8 text-white relative">
        <button onClick={() => navigate(-1)} className="absolute top-4 left-4 text-white/80 hover:text-white flex items-center gap-1 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <h2 className="text-3xl font-bold mt-4">{course.title}</h2>
        <p className="opacity-90 mt-2">{course.description}</p>
        
        {course.videoLink && (
          <div className="mt-6">
            <a href={course.videoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch Video on YouTube
            </a>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Interactive Modules</h3>
        <div className="space-y-4">
          {course.modules.map((module, idx) => {
            const isCompleted = progress.completedModules.includes(module.name);
            return (
              <div key={idx} className={cn(
                "p-4 rounded-lg border flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors",
                isCompleted ? "bg-indigo-50 border-indigo-100" : "bg-white border-gray-200"
              )}>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 font-bold flex items-center justify-center text-sm shrink-0">
                    {idx + 1}
                  </div>
                  <span className={cn("font-medium break-words", isCompleted ? "text-indigo-900" : "text-gray-800")}>
                    {module.name}
                  </span>
                </div>
                <div className="flex items-center gap-4 self-end md:self-auto">
                  {module.videoLink && (
                    <a href={module.videoLink} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 flex items-center gap-1.5 text-sm font-medium transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      Watch Topic
                    </a>
                  )}
                  {state.role === "student" && (
                    <button
                      onClick={() => markModuleComplete(course.id, module.name)}
                      disabled={isCompleted}
                      className={cn(
                        "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition",
                        isCompleted 
                          ? "text-green-600 bg-green-50" 
                          : "text-indigo-600 bg-indigo-50 hover:bg-indigo-100"
                      )}
                    >
                      <CheckCircle className="w-4 h-4" />
                      {isCompleted ? "Completed" : "Mark Done"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Dashboard() {
  const { state, setRole } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 pl-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 sticky top-24">
            <div className="flex items-center gap-3 mb-8 px-2">
              <div 
                className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center cursor-pointer"
                onDoubleClick={() => setRole(state.role === "student" ? "teacher" : "student")}
              >
                <User className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-gray-900">{state.userName}</div>
                <div className="text-xs text-gray-500 capitalize">{state.role} Account</div>
              </div>
            </div>

            <nav className="space-y-1">
              <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 font-medium">
                <Book className="w-5 h-5 text-gray-400" />
                {state.role === "teacher" ? "Course Management" : "My Learning"}
              </Link>
              <Link to="/dashboard/messages" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 font-medium">
                <MessageSquare className="w-5 h-5 text-gray-400" />
                Messages
              </Link>
            </nav>

            {/* Demo controls hidden from shared users */}
            {(window.location.hostname.includes("ais-dev") || window.location.search.includes("admin=true") || window.location.hostname === "localhost") && (
              <div className="mt-8 pt-8 border-t border-gray-100 px-2">
                <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">Demo Controls</p>
                <button 
                  onClick={() => setRole(state.role === "student" ? "teacher" : "student")}
                  className="w-full text-left text-sm text-indigo-600 font-medium px-3 py-2 rounded-md hover:bg-indigo-50"
                >
                  Switch to {state.role === "student" ? "Teacher" : "Student"} View
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<StudentProgress />} />
            <Route path="messages" element={<TeacherMessaging />} />
            <Route path="course/:courseId" element={<CourseViewer />} />
          </Routes>
        </div>

      </div>
    </div>
  );
}
