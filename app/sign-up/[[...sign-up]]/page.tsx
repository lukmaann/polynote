"use client"

import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Palette, ArrowLeft, Shield, Users, Zap, PenLine, Type, Brain, Sparkles, FileText, TrendingUp, Check, Star, Gift, Clock } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col lg:flex-row">
      {/* Left Side - Branding & Features */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 via-blue-900/10 to-gray-900"></div>
        
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-8 xl:px-12 py-16">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-400 rounded-xl flex items-center justify-center">
              <Palette className="w-7 h-7 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                PolyNote
              </span>
              <div className="flex items-center gap-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                <Brain className="w-3 h-3" />
                AI Powered
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-md mb-8">
            <h1 className="text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
              Start creating with{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI assistance
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Join thousands of teams using AI-enhanced collaboration. Write smarter, sketch freely, 
              and let intelligent features handle the heavy lifting.
            </p>

            {/* Special Offer Banner */}
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/30 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Gift className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-green-300 font-semibold">Limited Time Offer</div>
              </div>
              <div className="text-white font-bold text-lg mb-1">Free Pro Plan for 3 months</div>
              <div className="text-green-200 text-sm">Includes unlimited AI features & team collaboration</div>
            </div>

            {/* What's Included */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4">What you get free forever:</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Unlimited AI-powered documents</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Real-time collaboration for 5 team members</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Infinite canvas with AI diagram recognition</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Smart summarization & content insights</span>
                </div>
              </div>
            </div>

            {/* Enhanced Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600/20 to-blue-600/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Writing Assistant</h3>
                  <p className="text-gray-400 text-sm">Smart summarization & content suggestions</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600/20 to-green-600/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Real-time Collaboration</h3>
                  <p className="text-gray-400 text-sm">Multi-cursor editing & shared canvases</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-purple-600/10 rounded-lg flex items-center justify-center">
                  <PenLine className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Infinite Canvas</h3>
                  <p className="text-gray-400 text-sm">Sketch, diagram, and annotate with AI help</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-600/20 to-pink-600/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Smart Organization</h3>
                  <p className="text-gray-400 text-sm">AI-powered content structure & insights</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-auto pt-8">
            <div className="bg-gray-800/20 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
              <div className="flex items-center justify-between text-sm mb-3">
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>99.9% Uptime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-purple-400" />
                    <span>Enterprise Security</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span>Trusted by 50,000+ teams worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex flex-col min-h-screen lg:min-h-0 relative">
        {/* Background for mobile */}
        <div className="absolute inset-0 lg:hidden bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900"></div>
        
        {/* Header */}
        <div className="relative z-10 flex items-center justify-between p-4 sm:p-6 border-b border-gray-800">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm sm:text-base">Back to Home</span>
          </Link>
          
          {/* Mobile Logo */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
              <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              PolyNote
            </span>
            <div className="hidden sm:flex items-center gap-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 px-2 py-1 rounded-full text-xs">
              <Brain className="w-3 h-3" />
              AI
            </div>
          </div>
        </div>

        {/* Sign Up Form Container */}
        <div className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 xl:p-12">
          <div className="w-full max-w-md">
            {/* Mobile Welcome Text */}
            <div className="text-center mb-6 sm:mb-8 lg:hidden">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-600/30 rounded-full px-3 py-1.5 mb-4">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">AI-Enhanced Workspace</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Join PolyNote</h1>
              <p className="text-gray-400 text-sm sm:text-base">Start creating with AI assistance</p>
            </div>

            {/* Mobile Special Offer */}
            <div className="lg:hidden mb-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl p-4 border border-green-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="w-4 h-4 text-green-400" />
                <span className="text-green-300 font-semibold text-sm">Free Pro Plan for 3 months</span>
              </div>
              <p className="text-green-200 text-xs">Unlimited AI features included</p>
            </div>

            {/* Mobile feature highlights */}
            <div className="lg:hidden mb-6 grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-gray-400">
                <Check className="w-4 h-4 text-green-400" />
                <span>AI Writing</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Check className="w-4 h-4 text-green-400" />
                <span>Team Collaboration</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Check className="w-4 h-4 text-green-400" />
                <span>Infinite Canvas</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Check className="w-4 h-4 text-green-400" />
                <span>Smart Insights</span>
              </div>
            </div>

            {/* Clerk Sign Up Component */}
            <div className="w-full">
              <SignUp 
                appearance={{
                  baseTheme: dark,
                  variables: {
                    colorPrimary: "#8b5cf6",
                    colorBackground: "#1f2937",
                    colorInputBackground: "#374151",
                    colorInputText: "#f9fafb",
                    colorText: "#f9fafb",
                    colorTextSecondary: "#d1d5db",
                    colorTextOnPrimaryBackground: "#ffffff",
                    colorDanger: "#ef4444",
                    colorSuccess: "#10b981",
                    colorWarning: "#f59e0b",
                    borderRadius: "0.75rem",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  },
                  elements: {
                    card: "bg-gray-800/95 backdrop-blur-sm shadow-2xl border border-gray-700 w-full",
                    headerTitle: "text-white text-xl sm:text-2xl font-bold",
                    headerSubtitle: "text-gray-400 text-sm sm:text-base",
                    socialButtonsBlockButton: "bg-gradient-to-r from-gray-700 to-gray-600 border-gray-600 text-white hover:from-gray-600 hover:to-gray-500 transition-all text-sm sm:text-base py-2 sm:py-3 hover:scale-[1.02]",
                    socialButtonsBlockButtonText: "text-white font-medium",
                    formFieldLabel: "text-gray-300 font-medium text-sm sm:text-base",
                    formFieldInput: "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 text-sm sm:text-base py-2 sm:py-3 transition-all",
                    formButtonPrimary: "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 sm:py-3 transition-all hover:scale-[1.02] shadow-lg shadow-purple-500/25 text-sm sm:text-base",
                    footerActionLink: "text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base transition-colors",
                    dividerLine: "bg-gray-600",
                    dividerText: "text-gray-400",
                  }
                }}
              />
            </div>

            {/* Quick Setup Promise */}
            <div className="mt-6 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 rounded-xl p-4 border border-purple-500/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm">
                  <div className="text-white font-medium">Ready in 30 seconds</div>
                  <div className="text-gray-300">Start creating immediately after signup</div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                By creating an account, you agree to our{" "}
                <Link href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 p-4 sm:p-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            Already have an account? {" "}
            <Link href="/sign-in" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
              Sign in
            </Link>
            {" "} • {" "}
            <Link href="/support" className="text-purple-400 hover:text-purple-300 transition-colors">
              Need help?
            </Link>
          </p>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
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
}