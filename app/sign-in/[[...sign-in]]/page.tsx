import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Palette, ArrowLeft, Shield, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col lg:flex-row">
      {/* Left Side - Branding & Features */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-8 xl:px-12 py-16">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-400 rounded-xl flex items-center justify-center">
              <Palette className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              WeDraw
            </span>
          </div>

          {/* Main Content */}
          <div className="max-w-md">
            <h1 className="text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
              Sign in to your
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"> Account</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              Continue creating, collaborating, and bringing your ideas to life with the most powerful visual workspace for teams.
            </p>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-600/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Real-time Collaboration</h3>
                  <p className="text-gray-400 text-sm">Work together seamlessly with your team</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-600/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Lightning Fast</h3>
                  <p className="text-gray-400 text-sm">Optimized performance for smooth workflows</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-600/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Enterprise Security</h3>
                  <p className="text-gray-400 text-sm">Bank-grade encryption and compliance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-auto pt-12">
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>SOC 2 Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Sign In Form */}
      <div className="w-full lg:w-1/2 flex flex-col min-h-screen lg:min-h-0">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-800">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Back to Home</span>
          </Link>
          
          {/* Mobile Logo */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
              <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              WeDraw
            </span>
          </div>
        </div>

        {/* Mobile Features Section */}
        {/* <div className="lg:hidden px-4 sm:px-6 py-6 bg-gray-800/50 border-b border-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 sm:flex-col sm:text-center">
              <div className="w-8 h-8 bg-purple-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-4 h-4 text-purple-400" />
              </div>
              <div className="sm:mt-2">
                <h3 className="text-white font-semibold text-sm">Real-time Collaboration</h3>
                <p className="text-gray-400 text-xs mt-1 sm:hidden">Work together seamlessly</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:flex-col sm:text-center">
              <div className="w-8 h-8 bg-purple-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-purple-400" />
              </div>
              <div className="sm:mt-2">
                <h3 className="text-white font-semibold text-sm">Lightning Fast</h3>
                <p className="text-gray-400 text-xs mt-1 sm:hidden">Optimized performance</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:flex-col sm:text-center">
              <div className="w-8 h-8 bg-purple-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-purple-400" />
              </div>
              <div className="sm:mt-2">
                <h3 className="text-white font-semibold text-sm">Enterprise Security</h3>
                <p className="text-gray-400 text-xs mt-1 sm:hidden">Bank-grade encryption</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Sign In Form Container */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 xl:p-12">
          <div className="w-full max-w-md">
            {/* Mobile Welcome Text */}
            <div className="text-center mb-6 sm:mb-8 lg:hidden">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Welcome back</h1>
              <p className="text-gray-400 text-sm sm:text-base">Sign in to your WeDraw account</p>
            </div>

            {/* Clerk Sign In Component */}
            <div className="w-full">
              <SignIn 
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
                    card: "bg-gray-800 shadow-2xl border border-gray-700 w-full",
                    headerTitle: "text-white text-xl sm:text-2xl font-bold",
                    headerSubtitle: "text-gray-400 text-sm sm:text-base",
                    socialButtonsBlockButton: "bg-gray-700 border-gray-600 text-white hover:bg-gray-600 transition-all text-sm sm:text-base py-2 sm:py-3",
                    socialButtonsBlockButtonText: "text-white font-medium",
                    formFieldLabel: "text-gray-300 font-medium text-sm sm:text-base",
                    formFieldInput: "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 text-sm sm:text-base py-2 sm:py-3",
                    formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 sm:py-3 transition-all hover:scale-[1.02] shadow-lg text-sm sm:text-base",
                    footerActionLink: "text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base",
                    identityPreviewText: "text-gray-300 text-sm sm:text-base",
                    identityPreviewEditButton: "text-purple-400 hover:text-purple-300 text-sm sm:text-base",
                    formFieldSuccessText: "text-green-400 text-sm",
                    formFieldErrorText: "text-red-400 text-sm",
                    formFieldHintText: "text-gray-400 text-sm",
                    dividerLine: "bg-gray-600",
                    dividerText: "text-gray-400 text-sm sm:text-base",
                    formHeaderTitle: "text-white text-lg sm:text-xl",
                    formHeaderSubtitle: "text-gray-400 text-sm sm:text-base",
                    modalCloseButton: "text-gray-400 hover:text-white",
                    cardBox: "shadow-2xl",
                    rootBox: "w-full",
                    main: "w-full",
                    logoBox: "mb-4 sm:mb-6",
                    logoImage: "w-8 h-8 sm:w-10 sm:h-10",
                  }
                }}
              />
            </div>

            {/* Additional Info */}
            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                By signing in, you agree to our{" "}
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
        <div className="p-4 sm:p-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            Need help? {" "}
            <Link href="/support" className="text-purple-400 hover:text-purple-300 transition-colors">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}