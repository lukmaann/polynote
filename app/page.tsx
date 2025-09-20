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
  Type,
  Brain,
  Sparkles,
  FileText,
  MessageSquare,
  Wand2,
  ChevronRight,
  Lightbulb
} from "lucide-react";

export default function PolyNote() {
  const router = useRouter();
  const [activeFeature, setActiveFeature] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState('editor');

  const features = [
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "Real-time Collaboration",
      description: "Write and draw together in a single shared space. See every keystroke and brushstroke live.",
      details: "Multi-cursor editing, live presence, and conflict-free real-time sync"
    },
    {
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "AI-Powered Text Editor",
      description: "Intelligent writing assistant with auto-summarization, smart formatting, and content suggestions.",
      details: "AI summarization, grammar enhancement, and intelligent content organization"
    },
    {
      icon: <PenLine className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "Infinite Canvas + Whiteboard",
      description: "Sketch ideas, annotate documents, or draw diagrams alongside your AI-enhanced notes.",
      details: "Freehand drawing, shapes, colors, and AI-powered diagram recognition"
    },
    {
      icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "Smart Content Organization",
      description: "AI automatically organizes your content, suggests tags, and creates actionable summaries.",
      details: "Auto-tagging, intelligent categorization, and key insights extraction"
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "Lightning Fast Performance",
      description: "Instant updates and smooth interactions even with big teams and AI processing.",
      details: "Optimized rendering and efficient real-time data structures with AI acceleration"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "Secure by Design",
      description: "Your ideas stay safe with enterprise-grade security and private AI processing.",
      details: "End-to-end encryption, role-based access, and privacy-first AI"
    }
  ];

  const aiFeatures = [
    {
      icon: <FileText className="w-12 h-12 text-blue-400" />,
      title: "Smart Summarization",
      description: "AI instantly creates concise summaries of your long documents and meeting notes",
      benefit: "Save 60% of reading time"
    },
    {
      icon: <Wand2 className="w-12 h-12 text-green-400" />,
      title: "Content Enhancement",
      description: "Automatically improve grammar, clarity, and tone while preserving your voice",
      benefit: "Professional quality writing"
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-yellow-400" />,
      title: "Action Item Extraction",
      description: "AI identifies and organizes action items, deadlines, and key decisions",
      benefit: "Never miss important tasks"
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-pink-400" />,
      title: "Smart Suggestions",
      description: "Get intelligent content suggestions and auto-completion as you write",
      benefit: "Write faster and smarter"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Design Director, TechCorp",
      content: "The AI summarization saved us hours in our design reviews. PolyNote captures everything and gives us the key points instantly.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager, StartupXYZ",
      content: "No more switching tools — PolyNote's AI helps us write better specs and the canvas lets us sketch flows in the same doc.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Educator, DesignStudio",
      content: "My students love how the AI summarizes complex topics. We can co-edit lecture notes and get instant key takeaways.",
      rating: 5
    }
  ];

  const useCases = [
    {
      title: "AI-Enhanced Documentation",
      description: "Write specs with AI assistance, get automatic summaries, and collaborate seamlessly.",
      icon: <Type className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-400" />
    },
    {
      title: "Smart Brainstorming",
      description: "AI helps organize ideas, extract themes, and create actionable plans from your sessions.",
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-400" />
    },
    {
      title: "Intelligent Design Reviews",
      description: "Draw wireframes with AI-powered feedback and get instant summaries of design decisions.",
      icon: <Layers className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-400" />
    },
    {
      title: "Enhanced Learning",
      description: "AI creates study guides, summarizes complex topics, and generates interactive learning materials.",
      icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-400" />
    }
  ];

  const DemoEditor = () => (
    <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800">
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-400">Product Strategy Meeting Notes</span>
        </div>
        <div className="flex items-center gap-2 text-xs bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full">
          <Sparkles className="w-3 h-3" />
          AI Enhanced
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-semibold text-white mb-2">Meeting Summary (AI Generated)</h3>
            <div className="bg-blue-600/10 border border-blue-600/20 rounded-lg p-4 mb-4">
              <p className="text-blue-200 text-sm">
                <span className="inline-flex items-center gap-1 text-blue-300 font-medium mb-2">
                  <Brain className="w-4 h-4" /> Key Takeaways:
                </span>
              </p>
              <ul className="space-y-1 text-blue-200 text-sm list-disc list-inside">
                <li>Launch date moved to Q2 2025</li>
                <li>Need UX research by March 15th</li>
                <li>Budget approved for 2 additional developers</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-xs text-white">SC</div>
              <span className="text-gray-300 text-sm">Sarah is typing...</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-purple-500">
              <p className="text-gray-200">The user research shows strong demand for mobile-first approach. We should prioritize responsive design in our next sprint.</p>
            </div>
            
            <div className="bg-yellow-600/10 border border-yellow-600/20 rounded-lg p-3">
              <div className="flex items-center gap-2 text-yellow-300 text-sm">
                <Lightbulb className="w-4 h-4" />
                <span className="font-medium">AI Suggestion:</span>
              </div>
              <p className="text-yellow-200 text-sm mt-1">Consider adding "Action Item: Schedule mobile UX workshop by Friday" to your notes?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DemoCanvas = () => (
    <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800">
        <span className="text-sm text-gray-400">Brainstorming Canvas</span>
        <div className="flex items-center gap-2 text-xs bg-green-600/20 text-green-300 px-3 py-1 rounded-full">
          <Users className="w-3 h-3" />
          3 collaborators
        </div>
      </div>
      <div className="p-6 h-64 relative bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-2 rounded-lg text-sm transform -rotate-2">
          User Pain Points
        </div>
        <div className="absolute top-8 right-6 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm transform rotate-3">
          Feature Ideas
        </div>
        <div className="absolute bottom-8 left-8 bg-green-600 text-white px-3 py-2 rounded-lg text-sm transform rotate-1">
          Solutions
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-500 text-center">
            <PenLine className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p className="text-sm">Draw, sketch, and ideate together</p>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/4 w-32 h-px bg-purple-500 transform -rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-px bg-blue-500 transform rotate-45"></div>
      </div>
    </div>
  );

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
              <div className="hidden sm:flex items-center gap-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                <Brain className="w-3 h-3" />
                AI Powered
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#ai-features" className="text-gray-300 hover:text-white transition-colors">AI Tools</a>
              <a href="#use-cases" className="text-gray-300 hover:text-white transition-colors">Use Cases</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            </div>
            
            {/* Desktop Auth Buttons */}
            <div className="hidden sm:flex items-center gap-4">
              <Link href="/home">
                <button className="text-gray-300 hover:text-white transition-colors">Sign In</button>
              </Link>
              <Link href="/sign-up">
                <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all hover:scale-105 shadow-lg shadow-purple-500/25">
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 px-4 py-2 rounded-full text-sm mb-6 border border-purple-500/30">
              <Sparkles className="w-4 h-4" />
              Now with AI-powered writing assistance
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              The Future of{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI-Enhanced
              </span>{" "}
              Collaboration
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              PolyNote combines powerful AI-assisted text editing with an infinite canvas.  
              Write smarter, collaborate better, and let AI handle the heavy lifting — all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0">
              <Link href={"/sign-up"}>
                <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold group flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  Start Free with AI
                  <MoveRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="w-full sm:w-auto border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105">
                <Play size={18} className="sm:w-5 sm:h-5" />
                Watch AI Demo
              </button>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Check className="w-4 h-4 text-green-400" />
                AI Summarization
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Check className="w-4 h-4 text-green-400" />
                Real-time Collaboration
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Check className="w-4 h-4 text-green-400" />
                Infinite Canvas
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Check className="w-4 h-4 text-green-400" />
                Smart Suggestions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">See PolyNote in Action</h2>
            <p className="text-lg text-gray-300">Experience the power of AI-enhanced collaboration</p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 rounded-lg p-1 flex">
              <button
                onClick={() => setActiveDemo('editor')}
                className={`px-6 py-3 rounded-md transition-all ${
                  activeDemo === 'editor'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                AI Text Editor
              </button>
              <button
                onClick={() => setActiveDemo('canvas')}
                className={`px-6 py-3 rounded-md transition-all ${
                  activeDemo === 'canvas'
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Collaborative Canvas
              </button>
            </div>
          </div>
          
          <div className="transition-all duration-300">
            {activeDemo === 'editor' ? <DemoEditor /> : <DemoCanvas />}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section id="ai-features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-blue-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 px-4 py-2 rounded-full text-sm mb-6 border border-blue-500/30">
              <Brain className="w-4 h-4" />
              Powered by Advanced AI
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              AI That Actually Helps You Work
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI doesn't just generate text — it understands context, organizes information, and helps you think better.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-purple-500 transition-all group hover:bg-gray-800/70">
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4">{feature.description}</p>
                <div className="text-xs bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 px-3 py-1 rounded-full inline-block">
                  {feature.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Core Features */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Complete Workspace, Enhanced by AI
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Every feature works together seamlessly, with AI intelligence built into every interaction.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-4 sm:p-6 rounded-xl border transition-all cursor-pointer ${
                    activeFeature === index 
                      ? 'bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-purple-500' 
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
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-700 order-first lg:order-last">
              <div className="aspect-video bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-purple-800/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 animate-pulse"></div>
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-purple-500/30">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base font-medium">Interactive Product Demo</p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">See AI collaboration in action</p>
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
              Built for Every AI-Enhanced Workflow
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              From strategic planning to creative collaboration — PolyNote's AI adapts to how you work.
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
                <div className="mt-4 flex items-center text-purple-400 text-sm group-hover:text-purple-300 transition-colors">
                  Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
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
            PolyNote was built for teams who were tired of juggling multiple tools and losing context between writing and ideation.  
            We added AI not to replace human creativity, but to amplify it — helping you organize thoughts, extract insights, and focus on what matters most.
          </p>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            By combining collaborative editing, infinite canvas, and intelligent AI assistance, PolyNote gives you 
            the freedom to capture your thoughts however they flow — while AI helps you make sense of it all.  
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
              See how teams are using PolyNote's AI-powered collaboration to work smarter.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-purple-500/50 transition-all group">
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-800/50 rounded-3xl p-8 sm:p-12 border border-gray-700 backdrop-blur-sm">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 px-4 py-2 rounded-full text-sm mb-6 border border-purple-500/30">
              <Sparkles className="w-4 h-4" />
              Ready to transform your workflow?
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Start Creating with AI Today
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using PolyNote to collaborate smarter, write better, and organize ideas effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/sign-up">
                <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 rounded-xl px-8 py-4 text-lg font-semibold group flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  Start Free with AI
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <div className="text-sm text-gray-400">
                No credit card required • Free forever plan available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 px-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  PolyNote
                </span>
                <div className="flex items-center gap-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                  <Brain className="w-3 h-3" />
                  AI Powered
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-sm">
                Where intelligent writing meets collaborative creativity. Transform how your team captures, organizes, and shares ideas.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#features" className="block hover:text-white transition-colors">Features</a>
                <a href="#ai-features" className="block hover:text-white transition-colors">AI Tools</a>
                <a href="#use-cases" className="block hover:text-white transition-colors">Use Cases</a>
                <a href="#about" className="block hover:text-white transition-colors">About</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Documentation</a>
                <a href="#" className="block hover:text-white transition-colors">AI Guide</a>
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
                <a href="#" className="block hover:text-white transition-colors">Security</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 PolyNote. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">AI Ethics</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}