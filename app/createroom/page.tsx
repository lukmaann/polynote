"use client";

import { Poppins, Roboto } from "next/font/google";
import { useOrganizationList } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import NewButton from "./_components/newButton";
import OrganizationBox from "../home/_components/orgbox";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "./_components/Navbar";
import { 
  Users, 
  Zap, 
  Building, 
  ArrowLeft, 
  ArrowRight, 
  Palette,
  Star,
  Clock,
  Shield,
  Brain,
  Sparkles,
  FileText,
  PenLine,
  BarChart3,
  Calendar,
  MessageSquare,
  TrendingUp,
  Activity,
  Plus,
  ChevronRight
} from "lucide-react";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const Page = () => {
  const [showOrgBox, setShowOrgBox] = useState(false);
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  const organizationLength = userMemberships.data?.length || 0;
  const { user } = useUser();

  const quickActions = [
    {
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
      title: "Start AI Document",
      description: "Create a new document with AI writing assistance",
      color: "blue",
      bgColor: "bg-blue-600/10",
      hoverBg: "group-hover:bg-blue-600/20",
      borderColor: "hover:border-blue-500"
    },
    {
      icon: <PenLine className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />,
      title: "Open Canvas",
      description: "Start brainstorming with infinite whiteboard",
      color: "green",
      bgColor: "bg-green-600/10",
      hoverBg: "group-hover:bg-green-600/20",
      borderColor: "hover:border-green-500"
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />,
      title: "Invite Team",
      description: "Collaborate with your team in real-time",
      color: "purple",
      bgColor: "bg-purple-600/10",
      hoverBg: "group-hover:bg-purple-600/20",
      borderColor: "hover:border-purple-500"
    },
    {
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />,
      title: "AI Summarize",
      description: "Get AI insights from existing documents",
      color: "pink",
      bgColor: "bg-pink-600/10",
      hoverBg: "group-hover:bg-pink-600/20",
      borderColor: "hover:border-pink-500"
    }
  ];

  const stats = [
    {
      icon: <Building className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />,
      value: organizationLength,
      label: "Workspaces",
      description: "Active collaborative spaces",
      trend: "+2 this week"
    },
    {
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
      value: "12",
      label: "AI Documents",
      description: "Smart documents created",
      trend: "+5 this week"
    },
    {
      icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />,
      value: "24h",
      label: "Last Active",
      description: "Recent collaboration time",
      trend: "Very active"
    },
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />,
      value: "89%",
      label: "Productivity",
      description: "AI-enhanced efficiency",
      trend: "+15% this month"
    }
  ];

  const recentActivity = [
    {
      type: "document",
      title: "Product Strategy Meeting Notes",
      action: "AI summarized",
      time: "2 hours ago",
      icon: <Brain className="w-4 h-4 text-purple-400" />,
      bgColor: "bg-purple-600/10"
    },
    {
      type: "canvas",
      title: "UI Wireframes Canvas",
      action: "Collaborated with team",
      time: "4 hours ago",
      icon: <PenLine className="w-4 h-4 text-green-400" />,
      bgColor: "bg-green-600/10"
    },
    {
      type: "document",
      title: "Q2 Planning Document",
      action: "Created new document",
      time: "1 day ago",
      icon: <FileText className="w-4 h-4 text-blue-400" />,
      bgColor: "bg-blue-600/10"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-900 relative overflow-y-auto">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 via-blue-900/10 to-gray-900"></div>
      
      {/* Dynamic Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="relative z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
                <Palette className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                PolyNote
              </span>
              <div className="hidden sm:flex items-center gap-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                <Brain className="w-3 h-3" />
                AI Powered
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-xs sm:text-sm text-white font-medium">
                  {user?.fullName?.charAt(0) || 'U'}
                </div>
                <span className="text-xs sm:text-sm hidden sm:inline">{user?.fullName}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <div className={`transition-all duration-700 transform`}>
          {showOrgBox ? (
            <div className="bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 sm:p-8 md:p-12 border border-gray-700 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Building className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h2 className={`${poppins.className} text-2xl sm:text-3xl md:text-4xl font-bold text-white`}>
                    Your Workspaces
                  </h2>
                </div>
                <Button
                  variant="outline"
                  className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white w-full sm:w-auto"
                  onClick={() => setShowOrgBox(false)}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </div>
              <OrganizationBox />
            </div>
          ) : (
            <div className="space-y-8 sm:space-y-12 animate-fadeIn">
              {/* Welcome Section */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-600/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                  <span className="text-xs sm:text-sm text-purple-300">AI-Enhanced Workspace</span>
                </div>
                
                <h1 className={`${poppins.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight px-4`}>
                  Welcome back,{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {user?.fullName?.split(' ')[0] || 'User'}
                  </span>
                </h1>
                
                <p className={`${roboto.className} text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4`}>
                  Ready to create something amazing? Start a new AI-enhanced project or continue collaborating with your team.
                </p>
              </div>

              {/* Quick Start Actions */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
                <div className="w-full sm:w-auto">
                  <NewButton />
                </div>
                {organizationLength > 0 && (
                  <Button
                    variant="outline"
                    className="bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-3 rounded-xl group transition-all hover:scale-105 w-full sm:w-auto"
                    onClick={() => setShowOrgBox(true)}
                  >
                    <Building className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    View Workspaces
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700 hover:border-purple-500/50 transition-all group">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600/10 rounded-xl flex items-center justify-center group-hover:bg-purple-600/20 transition-colors">
                        {stat.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-300 mb-2">{stat.description}</div>
                    <div className="text-xs text-green-400">{stat.trend}</div>
                  </div>
                ))}
              </div>

              {/* Main Dashboard Grid */}
              <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 px-4">
                {/* Quick Actions */}
                <div className="lg:col-span-2 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className={`${poppins.className} text-xl sm:text-2xl font-bold text-white`}>
                      Quick Actions
                    </h3>
                    <div className="text-xs bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full">
                      AI Powered
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {quickActions.map((action, index) => (
                      <div key={index} className={`bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 ${action.borderColor} transition-all group cursor-pointer hover:scale-105`}>
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 ${action.bgColor} rounded-xl flex items-center justify-center ${action.hoverBg} transition-colors flex-shrink-0`}>
                            {action.icon}
                          </div>
                          <div className="text-left flex-1">
                            <h4 className="font-semibold text-white mb-1 text-sm sm:text-base flex items-center gap-2">
                              {action.title}
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-400">{action.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700">
                  <h3 className={`${poppins.className} text-xl sm:text-2xl font-bold text-white mb-6`}>
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all">
                        <div className={`w-8 h-8 ${activity.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          {activity.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-white truncate">{activity.title}</h4>
                          <p className="text-xs text-gray-400">{activity.action}</p>
                          <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                    <button className="w-full text-sm text-purple-400 hover:text-purple-300 py-2 text-center border border-gray-700 rounded-lg hover:border-purple-500 transition-all">
                      View all activity
                    </button>
                  </div>
                </div>
              </div>

              {/* AI Insights Banner */}
              <div className="bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 rounded-2xl p-6 sm:p-8 border border-purple-500/30 mx-4">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      AI-Powered Productivity Insights
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      You've been 89% more productive this month with AI assistance! Your team collaboration has increased by 45%.
                    </p>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-all hover:scale-105 flex-shrink-0">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Page;