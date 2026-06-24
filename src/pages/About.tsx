import { BookOpen, Target, Eye } from "lucide-react";
import { SEO } from "../components/SEO";

export function About() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
      <SEO title="About" />
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Education Hub</h1>
        <p className="text-xl text-indigo-600 font-medium">By Gunjan Gaur</p>
      </div>

      <div className="prose prose-lg text-gray-700 mb-16 mx-auto">
        <p>
          Education Hub By Gunjan Gaur is an educational platform dedicated to helping students learn modern skills that are useful in academics and career growth.
        </p>
        <p>
          Our mission is to provide quality education in simple language so that every learner can understand and apply knowledge practically.
        </p>
        <p>
          We focus on skill development, practical training, and career-building courses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100">
          <Target className="w-10 h-10 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
          <p className="text-gray-700">
            To make quality education accessible for every student.
          </p>
        </div>

        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
          <Eye className="w-10 h-10 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h2>
          <p className="text-gray-700">
            To create skilled and confident learners for the future.
          </p>
        </div>
      </div>
    </div>
  );
}
