import { SEO } from "../components/SEO";
import { Download, FileText, ShoppingCart } from "lucide-react";
import React from "react";

const mockNotes = [
  {
    id: 1,
    title: "C Programming Complete Notes",
    description: "Comprehensive handwritten and typed notes covering basics to advanced concepts of C programming, including pointers, arrays, and file handling.",
    price: "₹99",
    category: "Programming",
    pages: 120,
    coverColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    title: "C++ Object Oriented Programming",
    description: "Detailed notes on OOPS concepts, classes, objects, inheritance, polymorphism, and templates in C++.",
    price: "₹149",
    category: "Programming",
    pages: 150,
    coverColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    id: 3,
    title: "Logical Organization of Computers",
    description: "Simplified notes on logic gates, boolean algebra, K-maps, combinational and sequential circuits.",
    price: "₹120",
    category: "Computer Science",
    pages: 95,
    coverColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 4,
    title: "Digital Marketing Master Guide",
    description: "Step-by-step guide on SEO, SEM, social media marketing, and email marketing strategies.",
    price: "₹199",
    category: "Marketing",
    pages: 80,
    coverColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    id: 5,
    title: "Computer Basics & MS Office",
    description: "Perfect for beginners. Covers fundamental computer operations, Word, Excel, and PowerPoint shortcuts.",
    price: "₹49",
    category: "Basics",
    pages: 60,
    coverColor: "bg-green-100",
    iconColor: "text-green-600",
  },
];

export function Notes() {
  const [purchasingId, setPurchasingId] = React.useState<number | null>(null);

  const handlePurchase = (id: number) => {
    setPurchasingId(id);
    setTimeout(() => {
      alert("This is a demo. In a real app, this would redirect to a payment gateway (like Razorpay or Stripe) to complete the purchase and download the PDF.");
      setPurchasingId(null);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <SEO 
        title="Download Premium Notes | Education Hub" 
        description="Download premium handwritten and typed PDF notes for C, C++, Logical Organization, and Digital Marketing by Gunjan Gaur." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f2147] mb-6">Premium PDF Notes</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            High-quality, easy-to-understand PDF notes prepared by Gunjan Gaur to help you score better in exams and build strong fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockNotes.map((note) => (
            <div key={note.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
              <div className={`h-40 ${note.coverColor} flex items-center justify-center p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-transparent to-transparent"></div>
                <FileText className={`w-20 h-20 ${note.iconColor} transform group-hover:scale-110 transition-transform duration-300 relative z-10`} />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-slate-800 shadow-sm">
                  {note.price}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                    {note.category}
                  </span>
                  <span className="text-sm text-slate-500 font-medium">
                    {note.pages} Pages
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{note.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-1 line-clamp-3">
                  {note.description}
                </p>
                <button
                  onClick={() => handlePurchase(note.id)}
                  disabled={purchasingId === note.id}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0f2147] text-white py-3 px-4 rounded-xl font-medium hover:bg-[#1a3673] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {purchasingId === note.id ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Buy & Download PDF
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
