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
  Shield
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

  return (
    <div className="min-h-screen w-full bg-gray-900 relative overflow-y-auto">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
                <Palette className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                WeDraw
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs sm:text-sm">
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
                  Back
                </Button>
              </div>
              <OrganizationBox />
            </div>
          ) : (
            <div className="text-center animate-fadeIn">
              {/* Welcome Section */}
              <div className="mb-8 sm:mb-12">
                <div className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-600/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                  <span className="text-xs sm:text-sm text-purple-300">Welcome to your workspace</span>
                </div>
                
                <h1 className={`${poppins.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight px-4`}>
                  Welcome back,{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                    {user?.fullName?.split(' ')[0] || 'User'}
                  </span>
                </h1>
                
                <p className={`${roboto.className} text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4`}>
                  Ready to create something amazing? Start a new project or continue working on your existing workspaces.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-4">
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

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700 hover:border-purple-500 transition-all group">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600/10 rounded-xl flex items-center justify-center group-hover:bg-purple-600/20 transition-colors">
                      <Building className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl sm:text-2xl font-bold text-white">{organizationLength}</div>
                      <div className="text-xs sm:text-sm text-gray-400">Workspaces</div>
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">Active workspaces ready for collaboration</div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700 hover:border-purple-500 transition-all group">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600/10 rounded-xl flex items-center justify-center group-hover:bg-purple-600/20 transition-colors">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl sm:text-2xl font-bold text-white">∞</div>
                      <div className="text-xs sm:text-sm text-gray-400">Possibilities</div>
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">Unlimited creative potential awaits</div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700 hover:border-purple-500 transition-all group sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600/10 rounded-xl flex items-center justify-center group-hover:bg-purple-600/20 transition-colors">
                      <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl sm:text-2xl font-bold text-white">24/7</div>
                      <div className="text-xs sm:text-sm text-gray-400">Available</div>
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">Always accessible, always secure</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-4 sm:p-8 border border-gray-700 max-w-4xl mx-auto px-4">
                <h3 className={`${poppins.className} text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6`}>
                  Quick Actions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-purple-500 transition-all group cursor-pointer">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600/10 rounded-xl flex items-center justify-center group-hover:bg-purple-600/20 transition-colors flex-shrink-0">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Invite Team Members</h4>
                        <p className="text-xs sm:text-sm text-gray-400">Collaborate with your team in real-time</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-purple-500 transition-all group cursor-pointer">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600/10 rounded-xl flex items-center justify-center group-hover:bg-purple-600/20 transition-colors flex-shrink-0">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Recent Activity</h4>
                        <p className="text-xs sm:text-sm text-gray-400">Check your latest projects and updates</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fade-in animation style */}
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
      `}</style>
    </div>
  );
};

export default Page;