"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  MoveRight, 
  Unlock, 
  CircleUserRound, 
  Zap, 
  Users, 
  Shield, 
  Palette, 
  Cloud, 
  Smartphone, 
  Play, 
  Check, 
  Star,
  ArrowRight,
  Globe,
  Monitor,
  Layers,
  Menu,
  X
} from "lucide-react";

export default function WeDraw() {
  const router = useRouter();
  const [activeFeature, setActiveFeature] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "Real-time Collaboration",
      description: "Work together seamlessly with unlimited team members. See changes instantly as your team creates and edits.",
      details: "Multi-cursor support, live presence indicators, and conflict-free collaborative editing"
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with smooth drawing, instant sync, and responsive interactions even with complex diagrams.",
      details: "WebGL-accelerated rendering, efficient data structures, and smart caching"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption, SOC 2 compliance, and granular permissions to keep your ideas secure.",
      details: "End-to-end encryption, SSO integration, and audit trails"
    },
    {
      icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "Advanced Drawing Tools",
      description: "Professional-grade tools including custom brushes, vector shapes, smart connectors, and infinite canvas.",
      details: "Pressure-sensitive drawing, shape libraries, and advanced typography"
    },
    {
      icon: <Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "Cloud-Native Architecture",
      description: "Access your work anywhere with automatic sync, version history, and 99.9% uptime guarantee.",
      details: "Real-time backup, conflict resolution, and offline support"
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "Cross-Platform Support",
      description: "Native apps for web, desktop, and mobile with seamless sync across all your devices.",
      details: "iOS, Android, Windows, macOS, and Linux support"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Design Director, TechCorp",
      content: "WeDraw transformed our design process. The real-time collaboration is game-changing.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager, StartupXYZ",
      content: "Finally, a tool that keeps up with our fast-paced brainstorming sessions.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "UX Designer, DesignStudio",
      content: "The performance and feature set blow other tools out of the water.",
      rating: 5
    }
  ];

  const useCases = [
    {
      title: "Design & Prototyping",
      description: "Create wireframes, mockups, and interactive prototypes with professional design tools.",
      icon: <Monitor className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-400" />
    },
    {
      title: "Team Brainstorming",
      description: "Facilitate creative sessions with sticky notes, mind maps, and collaborative whiteboards.",
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-400" />
    },
    {
      title: "Technical Diagrams",
      description: "Build system architectures, flowcharts, and technical documentation with precision.",
      icon: <Layers className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-400" />
    },
    {
      title: "Education & Training",
      description: "Create engaging educational content and interactive learning materials.",
      icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
                <Palette className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                WeDraw
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            </div>
            
            {/* Desktop Auth Buttons */}
            <div className="hidden sm:flex items-center gap-4">
              <Link href="/home">
                <button className="text-gray-300 hover:text-white transition-colors">Sign In</button>
              </Link>
              <Link href="/sign-up">
                <button className="flex items-center gap-2 bg-purple-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-purple-700 transition-all hover:scale-105">
                  <CircleUserRound size={16} className="sm:w-[18px] sm:h-[18px]" /> 
                  <span className="hidden sm:inline">Start Free</span>
                  <span className="sm:hidden">Free</span>
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-300 hover:text-white transition-colors py-2">Features</a>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors py-2">Pricing</a>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors py-2">About</a>
                <div className="flex flex-col sm:hidden space-y-2 pt-4 border-t border-gray-800">
                  <Link href="/home">
                    <button className="text-gray-300 hover:text-white transition-colors py-2 w-full text-left">Sign In</button>
                  </Link>
                  <Link href="/sign-up">
                    <button className="flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all">
                      <CircleUserRound size={18} /> Start Free
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-600/20 rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-6 sm:mb-8">
              <Unlock size={14} className="sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-xs sm:text-sm text-purple-300">Trusted by 50,000+ creative teams</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              The Visual Workspace
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                Teams Love
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Create, collaborate, and innovate with WeDraw's powerful visual workspace. 
              Built for modern teams who need speed, security, and seamless collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0">
              <Link href={"/sign-up"}>
                <button className="w-full sm:w-auto bg-purple-600 text-white hover:bg-purple-700 rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold group flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  Start Creating Free
                  <MoveRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="w-full sm:w-auto border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105">
                <Play size={18} className="sm:w-5 sm:h-5" />
                Watch Demo
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400 px-4 sm:px-0">
              <div className="flex items-center gap-2">
                <Check size={14} className="sm:w-4 sm:h-4 text-green-400" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="sm:w-4 sm:h-4 text-green-400" />
                Free forever plan
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="sm:w-4 sm:h-4 text-green-400" />
                Setup in 30 seconds
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose WeDraw */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Why Choose <span className="text-purple-400">WeDraw</span>?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              While tools like Excalidraw are great for basic sketching, WeDraw offers enterprise-grade features 
              for teams that need more power, security, and collaboration capabilities.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-purple-500 transition-all">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">10x Faster</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Optimized performance with WebGL acceleration and smart caching. 
                  No lag, even with complex diagrams.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-purple-500 transition-all">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Unlimited Teams</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Real-time collaboration with unlimited team members, 
                  advanced permissions, and enterprise integrations.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-purple-500 transition-all sm:col-span-2 lg:col-span-1">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Enterprise Ready</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  SOC 2 compliant, end-to-end encryption, SSO integration, 
                  and audit trails for complete security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              Everything you need to create, collaborate, and communicate visually.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-4 sm:p-6 rounded-xl border transition-all cursor-pointer ${
                    activeFeature === index 
                      ? 'bg-purple-600/10 border-purple-500' 
                      : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    {feature.icon}
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base mb-1 sm:mb-2">{feature.description}</p>
                      {activeFeature === index && (
                        <p className="text-xs sm:text-sm text-purple-300">{feature.details}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700 order-first lg:order-last">
              <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">Interactive Feature Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Built for Every Use Case
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              From quick sketches to complex system designs, WeDraw adapts to your workflow.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-purple-500 transition-all group">
                <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{useCase.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Loved by Teams Worldwide
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              See what our users are saying about WeDraw.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700">
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 sm:mb-6 italic text-sm sm:text-base">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-purple-600/10 to-purple-800/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0">
            Join thousands of teams who've made the switch to WeDraw. 
            Start creating today with our free plan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link href={'/sign-up'}>
              <button className="w-full sm:w-auto bg-purple-600 text-white hover:bg-purple-700 rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold group flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Start Free Trial
                <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <button className="w-full sm:w-auto border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all hover:scale-105">
              Schedule Demo
            </button>
          </div>
          
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Check size={14} className="sm:w-4 sm:h-4 text-green-400" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <Check size={14} className="sm:w-4 sm:h-4 text-green-400" />
              No setup fees
            </div>
            <div className="flex items-center gap-2">
              <Check size={14} className="sm:w-4 sm:h-4 text-green-400" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-800 py-12 px-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  WeDraw
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                The visual workspace for modern teams.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Features</a>
                <a href="#" className="block hover:text-white transition-colors">Pricing</a>
                <a href="#" className="block hover:text-white transition-colors">Enterprise</a>
                <a href="#" className="block hover:text-white transition-colors">API</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Documentation</a>
                <a href="#" className="block hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block hover:text-white transition-colors">Blog</a>
                <a href="#" className="block hover:text-white transition-colors">Community</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">About</a>
                <a href="#" className="block hover:text-white transition-colors">Careers</a>
                <a href="#" className="block hover:text-white transition-colors">Contact</a>
                <a href="#" className="block hover:text-white transition-colors">Security</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 WeDraw. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}