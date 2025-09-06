import { ArrowRight, BookOpen, Users, Calendar, MessageSquare, BarChart, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const applications = [
  {
    id: 1,
    title: "My Classroom",
    description: "Manage your classes, assignments, and student interactions seamlessly with our integrated Google Classroom platform.",
    icon: BookOpen,
    color: "from-cyan-400 via-blue-500 to-purple-600",
    textColor: "text-white",
    bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
    link: "#",
    features: ["Assignment Management", "Student Progress", "Resource Sharing"]
  },
  {
    id: 2,
    title: "My AI Krishna",
    description: "Comprehensive student management system for tracking attendance, grades, and academic progress.",
    icon: Users,
    color: "from-lime-400 via-green-500 to-emerald-600",
    textColor: "text-white",
    bgColor: "bg-gradient-to-br from-lime-500 to-green-600",
    link: "#",
    features: ["Grade Tracking", "Attendance", "Parent Portal"]
  },
  {
    id: 3,
    title: "My Research Work",
    description: "Efficient timetable and schedule management for classes, events, and academic calendar.",
    icon: Calendar,
    color: "from-violet-400 via-purple-500 to-indigo-600",
    textColor: "text-white",
    bgColor: "bg-gradient-to-br from-violet-500 to-purple-600",
    link: "#",
    features: ["Class Scheduling", "Event Planning", "Resource Booking"]
  },
  {
    id: 4,
    title: "Communication Hub",
    description: "Stay connected with students, parents, and faculty through our integrated communication platform.",
    icon: MessageSquare,
    color: "from-orange-400 via-red-500 to-pink-600",
    textColor: "text-white",
    bgColor: "bg-gradient-to-br from-orange-500 to-red-600",
    link: "#",
    features: ["Messaging", "Announcements", "Video Calls"]
  },
  {
    id: 5,
    title: "My Timetable",
    description: "Comprehensive insights and analytics to track student performance and institutional metrics.",
    icon: BarChart,
    color: "from-teal-400 via-cyan-500 to-blue-600",
    textColor: "text-white",
    bgColor: "bg-gradient-to-br from-teal-500 to-cyan-600",
    link: "#",
    features: ["Performance Analytics", "Reports", "Data Visualization"]
  },
  {
    id: 6,
    title: "My Projects",
    description: "Administrative tools for managing institutional settings, user accounts, and system configurations.",
    icon: Settings,
    color: "from-rose-400 via-pink-500 to-purple-600",
    textColor: "text-white",
    bgColor: "bg-gradient-to-br from-rose-500 to-pink-600",
    link: "#",
    features: ["User Management", "System Settings", "Security Controls"]
  }
];

export function ApplicationCards() {
  return (
    <section id="apps" className="py-20 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent mb-4 drop-shadow-2xl">
            Our Offerings
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
            Discover our comprehensive suite of educational tools designed to enhance teaching and learning experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {applications.map((app) => {
            const Icon = app.icon;
            return (
              <div 
                key={app.id} 
                className="group flex flex-col items-center text-center"
              >
                {/* Circular Card */}
                <div className={`w-72 h-72 rounded-full ${app.bgColor} p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:rotate-3 border-4 border-white/30 backdrop-blur-sm group-hover:border-white/60 flex flex-col items-center justify-center relative overflow-hidden`}>
                  {/* Background Glow Effect */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${app.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${app.color} flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-500 shadow-xl relative z-10`}>
                    <Icon className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-xl font-bold ${app.textColor} mb-3 drop-shadow-lg relative z-10 group-hover:scale-105 transition-transform duration-300`}>
                    {app.title}
                  </h3>
                  
                  {/* Features as dots */}
                  <div className="flex space-x-2 mb-4 relative z-10">
                    {app.features.map((_, index) => (
                      <div 
                        key={index} 
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${app.color} shadow-lg group-hover:scale-125 transition-transform duration-300`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Description and Button Outside Circle */}
                <div className="mt-8 max-w-xs">
                  <p className="text-white/90 mb-6 leading-relaxed text-sm drop-shadow-lg">
                    {app.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 drop-shadow-lg">Key Features:</h4>
                    <ul className="space-y-2">
                      {app.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-white/80">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${app.color} mr-3 shadow-lg`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${app.color} hover:scale-105 text-white border-none shadow-2xl group-hover:shadow-3xl transition-all duration-300 rounded-full py-3 font-semibold hover:shadow-white/25`}
                  >
                    Launch Application
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-12 text-white shadow-3xl border-4 border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-500">
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-2xl">Ready to Transform Education?</h3>
            <p className="text-xl mb-8 text-white/95 drop-shadow-lg max-w-2xl mx-auto">
              Join thousands of educators already using Vivekananda Gurukula's comprehensive platform
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white px-12 py-4 font-bold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 rounded-full border-2 border-white/30 hover:scale-110"
            >
              Get Started Today
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}