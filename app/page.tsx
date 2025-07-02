"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion"
import {
  Users,
  GraduationCap,
  UserCheck,
  Calculator,
  BookOpen,
  DollarSign,
  BarChart3,
  Calendar,
  Shield,
  Zap,
  Star,
  Check,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTheme } from "next-themes"
import { ThemeToggle } from "@/components/theme-toggle"

// Enhanced animation variants with proper typing
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const, // Properly typed easing
    },
  },
}

const fadeInScale: Variants = {
  initial: { opacity: 0, scale: 0.8, y: 40 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

const slideInLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

const slideInRight: Variants = {
  initial: { opacity: 0, x: 60 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const popUpVariant: Variants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.9,
    rotateX: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

// Enhanced animated section wrapper with intersection observer
function AnimatedSection({
  children,
  className = "",
  variant = "fadeInUp",
  threshold = 0.1,
}: {
  children: React.ReactNode
  className?: string
  variant?: "fadeInUp" | "fadeInScale" | "slideInLeft" | "slideInRight" | "popUp"
  threshold?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
    amount: threshold,
  })

  const variants = {
    fadeInUp,
    fadeInScale,
    slideInLeft,
    slideInRight,
    popUp: popUpVariant,
  }

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function AnimatedCard({
  children,
  delay = 0,
  variant = "popUp",
}: {
  children: React.ReactNode
  delay?: number
  variant?: "fadeInUp" | "fadeInScale" | "popUp"
}) {
  const variants: Record<string, Variants> = {
    fadeInUp: {
      initial: { opacity: 0, y: 60 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94] as const,
          delay,
        },
      },
    },
    fadeInScale: {
      initial: { opacity: 0, scale: 0.8, y: 40 },
      animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94] as const,
          delay,
        },
      },
    },
    popUp: {
      initial: {
        opacity: 0,
        y: 50,
        scale: 0.9,
        rotateX: 10,
      },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94] as const,
          delay,
          type: "spring",
          stiffness: 100,
          damping: 15,
        },
      },
    },
  }

  return <motion.div variants={variants[variant]}>{children}</motion.div>
}

// Logo component
function AcademixLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <Image src="/images/logo.png" alt="Academix Cloud Logo" width={32} height={32} className={className} priority />
  )
}

// Loading animation component
function LoadingAnimation() {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      onAnimationComplete={() => {
        const element = document.getElementById("loading-screen")
        if (element) element.style.display = "none"
      }}
      id="loading-screen"
    >
      <motion.div
        className="flex items-center space-x-2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <AcademixLogo className="w-10 h-10" />
        </motion.div>
        <motion.span
          className="text-xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Academix Cloud
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const { theme, setTheme } = useTheme()
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const userRoles = [
    {
      icon: Shield,
      title: "Admin Dashboard",
      description: "Complete control over your institution with comprehensive analytics and management tools",
      color: "bg-blue-500",
    },
    {
      icon: GraduationCap,
      title: "Teacher Portal",
      description: "Streamlined teaching tools, attendance tracking, and student progress monitoring",
      color: "bg-green-500",
    },
    {
      icon: Users,
      title: "Parent Access",
      description: "Stay connected with your child's academic journey and school communications",
      color: "bg-purple-500",
    },
    {
      icon: Calculator,
      title: "Accountant Panel",
      description: "Advanced financial management, fee tracking, and comprehensive reporting",
      color: "bg-orange-500",
    },
    {
      icon: BookOpen,
      title: "Student Hub",
      description: "Access assignments, grades, schedules, and collaborate with peers",
      color: "bg-pink-500",
    },
  ]

  const features = [
    {
      icon: DollarSign,
      title: "Fee Management",
      description: "Automated fee collection, payment tracking, and financial reporting with multiple payment gateways",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Comprehensive insights into student performance, attendance patterns, and institutional metrics",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Intelligent timetable management, event planning, and automated notifications",
    },
    {
      icon: UserCheck,
      title: "Attendance Tracking",
      description: "Real-time attendance monitoring with biometric integration and parent notifications",
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Enterprise-grade security with role-based access control and data encryption",
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Streamline repetitive tasks with intelligent workflows and automated processes",
    },
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Principal, Greenwood Academy",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      content:
        "Academix Cloud has revolutionized how we manage our institution. The comprehensive dashboard gives us insights we never had before, and the fee management system has eliminated all our payment tracking headaches.",
    },
    {
      name: "Michael Chen",
      role: "IT Director, Metro High School",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      content:
        "The multi-role access system is brilliant. Teachers, parents, and students each get exactly what they need without complexity. The implementation was smooth and support has been exceptional.",
    },
    {
      name: "Lisa Rodriguez",
      role: "Finance Manager, Oakville College",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      content:
        "As an accountant, the financial reporting and fee management features are exactly what we needed. Real-time tracking and automated reconciliation have saved us countless hours.",
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small schools and institutions",
      features: [
        "Up to 100 students",
        "5 admin users",
        "Basic reporting",
        "Email support",
        "Fee management",
        "Attendance tracking",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Ideal for growing educational institutions",
      features: [
        "Up to 500 students",
        "15 admin users",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "Mobile app access",
        "Automated workflows",
        "Parent portal",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large institutions with specific needs",
      features: [
        "Unlimited students",
        "Unlimited admin users",
        "Custom development",
        "24/7 dedicated support",
        "On-premise deployment",
        "Advanced security",
        "API access",
        "Training & onboarding",
      ],
      popular: false,
    },
  ]

  if (!isLoaded) {
    return <LoadingAnimation />
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation with entrance animation */}
      <motion.nav
        className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border/50 z-50 transition-all duration-300"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AcademixLogo className="w-8 h-8" />
              <span className="text-xl font-bold">Academix Cloud</span>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center space-x-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Reviews
              </Link>
              <ThemeToggle />
              <Button variant="outline">Sign In</Button>
              <Button>Get Started</Button>
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t bg-background"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="#features" className="block px-3 py-2 text-muted-foreground hover:text-foreground">
                  Features
                </Link>
                <Link href="#pricing" className="block px-3 py-2 text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
                <Link href="#testimonials" className="block px-3 py-2 text-muted-foreground hover:text-foreground">
                  Reviews
                </Link>
                <div className="flex space-x-2 px-3 py-2">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Sign In
                  </Button>
                  <Button className="flex-1">Get Started</Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section with enhanced animations */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <motion.div className="absolute inset-0 bg-gradient-hero opacity-50" style={{ y: backgroundY }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <AnimatedSection className="text-center">
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="mb-4">
                Trusted by 500+ Educational Institutions
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Complete School
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Management Solution
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Streamline your educational institution with our comprehensive cloud-based platform. Manage students,
              teachers, parents, finances, and more - all in one powerful dashboard.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInScale}
              className="relative max-w-5xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl border bg-background/50 backdrop-blur">
                <Image
                  src="/images/dashboard-preview.png"
                  alt="Academix Cloud Dashboard"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* User Roles Section with pop-up animations */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16" variant="slideInLeft">
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="mb-4">
                User Roles
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">
              Built for Every Role in Your Institution
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored dashboards and features for administrators, teachers, parents, accountants, and students
            </motion.p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userRoles.map((role, index) => (
                <AnimatedCard key={role.title} delay={index * 0.1} variant="popUp">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50">
                      <CardHeader>
                        <motion.div
                          className={`w-12 h-12 ${role.color} rounded-lg flex items-center justify-center mb-4`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <role.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <CardTitle className="text-xl">{role.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">{role.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section with alternating animations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16" variant="slideInRight">
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="mb-4">
                Features
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">
              Everything Your Institution Needs
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful features designed to streamline operations and enhance educational outcomes
            </motion.p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <AnimatedCard key={feature.title} delay={index * 0.1} variant="popUp">
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      y: -5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50">
                      <CardHeader>
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <feature.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section with staggered pop-ups */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16" variant="fadeInScale">
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="mb-4">
                Testimonials
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">
              Trusted by Educational Leaders
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our customers say about transforming their institutions with Academix Cloud
            </motion.p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedCard key={testimonial.name} delay={index * 0.15} variant="popUp">
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      rotateX: 2,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50">
                      <CardHeader>
                        <div className="flex items-center space-x-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.15 + i * 0.1 }}
                            >
                              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            </motion.div>
                          ))}
                        </div>
                        <CardDescription className="text-base leading-relaxed">"{testimonial.content}"</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Section with enhanced pop-up effects */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16" variant="slideInLeft">
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="mb-4">
                Pricing
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your institution. All plans include core features with no hidden fees.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <AnimatedCard key={plan.name} delay={index * 0.1} variant="popUp">
                  <motion.div
                    whileHover={{
                      scale: plan.popular ? 1.02 : 1.05,
                      y: -10,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Card
                      className={`h-full relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""} hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50`}
                    >
                      {plan.popular && (
                        <motion.div
                          className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                        >
                          <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                        </motion.div>
                      )}
                      <CardHeader className="text-center">
                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                        <div className="mt-4">
                          <span className="text-4xl font-bold">{plan.price}</span>
                          {plan.price !== "Custom" && <span className="text-muted-foreground">/{plan.period}</span>}
                        </div>
                        <CardDescription className="mt-2">{plan.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              className="flex items-center space-x-3"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                            >
                              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                        <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"}>
                          {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section with dramatic entrance */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="fadeInScale">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Institution?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-white/90 mb-8">
              Join hundreds of educational institutions already using Academix Cloud to streamline their operations
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent transition-all duration-300"
                >
                  Schedule Demo
                </Button>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer with slide-up animation */}
      <motion.footer
        className="bg-background border-t py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <AcademixLogo className="w-8 h-8" />
                <span className="text-xl font-bold">Academix Cloud</span>
              </div>
              <p className="text-muted-foreground">
                Empowering educational institutions with comprehensive management solutions.
              </p>
            </motion.div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Security", "Integrations"],
              },
              {
                title: "Company",
                links: ["About", "Careers", "Contact", "Blog"],
              },
              //
              {
                title: "Support",
                links: ["Help Center", "Documentation", "Community", "Status"],
              },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="hover:text-foreground transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="border-t mt-12 pt-8 text-center text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2024 Academix Cloud. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}
