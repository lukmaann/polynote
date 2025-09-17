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
  X,
  PenLine,
  Type
} from "lucide-react";

export default function PolyNote() {
  const router = useRouter();
  const [activeFeature, setActiveFeature] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "Real-time Collaboration",
      description: "Write and draw together in a single shared space. See every keystroke and brushstroke live.",
      details: "Multi-cursor editing, live presence, and conflict-free real-time sync"
    },
    {
      icon: <Type className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "Powerful Text Editing",
      description: "Rich-text editor with formatting, headings, lists, links, and more.",
      details: "Supports collaborative note-taking, structured documents, and live editing"
    },
    {
      icon: <PenLine className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "Canvas + Whiteboard",
      description: "Sketch ideas, annotate documents, or draw diagrams alongside your notes.",
      details: "Freehand drawing, shapes, colors, and infinite canvas"
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "Lightning Fast Performance",
      description: "Instant updates and smooth interactions even with big teams.",
      details: "Optimized rendering and efficient real-time data structures"
    },
    {
      icon: <Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "Cloud Sync Everywhere",
      description: "Access your notes and canvases from any device, always up to date.",
      details: "Automatic sync, backups, and offline-first support"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "Secure by Design",
      description: "Your ideas stay safe with enterprise-grade security and permissions.",
      details: "Encryption, role-based access, and audit history"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Design Director, TechCorp",
      content: "PolyNote became our go-to space for brainstorming. Text + canvas in one place is a game-changer.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager, StartupXYZ",
      content: "No more switching tools — PolyNote lets us write specs and sketch diagrams in the same doc.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Educator, DesignStudio",
      content: "My students love it. We can co-edit lecture notes and draw concepts in real time.",
      rating: 5
    }
  ];

  const useCases = [
    {
      title: "Team Documentation",
      description: "Collaboratively draft specs, meeting notes, or research docs.",
      icon: <Type className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-400" />
    },
    {
      title: "Brainstorming Sessions",
      description: "Mix text notes with sketches, sticky notes, and diagrams.",
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-400" />
    },
    {
      title: "Design & Architecture",
      description: "Draw wireframes, flowcharts, or system designs alongside explanations.",
      icon: <Layers className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-400" />
    },
    {
      title: "Education & Learning",
      description: "Interactive lecture notes, collaborative study guides, and visual explanations.",
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
                PolyNote
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#use-cases" className="text-gray-300 hover:text-white transition-colors">Use Cases</a>
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
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              The Future of{" "}
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                Collaborative Notes
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              PolyNote combines a powerful text editor with an infinite canvas.  
              Write structured notes, sketch ideas, and collaborate in real time — all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0">
              <Link href={"/sign-up"}>
                <button className="w-full sm:w-auto bg-purple-600 text-white hover:bg-purple-700 rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold group flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  Start Free
                  <MoveRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="w-full sm:w-auto border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105">
                <Play size={18} className="sm:w-5 sm:h-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              All-in-One Workspace
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              PolyNote unifies rich-text editing and canvas drawing so your team doesn’t need multiple tools.
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
                  <p className="text-gray-300 text-sm sm:text-base">See PolyNote in Action</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section id="use-cases" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Built for Every Workflow
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you’re brainstorming, documenting, or teaching — PolyNote adapts.
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

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-800/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            About PolyNote
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            PolyNote was built for creators, teams, and educators who were tired of switching 
            between a text editor for notes and a canvas for visuals.  
            We believe that ideas are stronger when words and sketches live side by side.
          </p>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            By combining collaborative editing with an infinite canvas, PolyNote gives you 
            the freedom to capture your thoughts however they flow.  
            Whether you're drafting product specs, teaching a concept, or mapping out a design, 
            PolyNote adapts to the way you think and work.
          </p>
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
              See what our users are saying about PolyNote.
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
                  PolyNote
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Where words and sketches meet.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#features" className="block hover:text-white transition-colors">Features</a>
                <a href="#use-cases" className="block hover:text-white transition-colors">Use Cases</a>
                <a href="#about" className="block hover:text-white transition-colors">About</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Documentation</a>
                <a href="#" className="block hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block hover:text-white transition-colors">Community</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">About</a>
                <a href="#" className="block hover:text-white transition-colors">Careers</a>
                <a href="#" className="block hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 PolyNote. All rights reserved.</p>
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
