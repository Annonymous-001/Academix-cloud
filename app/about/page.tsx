"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Users, Target, Award, Heart, Lightbulb, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

function AcademixLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <Image src="/images/logo.png" alt="Academix Cloud Logo" width={32} height={32} className={className} priority />
  )
}

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Student-Centered",
      description: "Everything we do is focused on improving educational outcomes for students.",
      color: "bg-red-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously innovate to bring cutting-edge solutions to education.",
      color: "bg-yellow-500",
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "We prioritize the security and privacy of student and institutional data.",
      color: "bg-blue-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of collaboration between all educational stakeholders.",
      color: "bg-green-500",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former educator with 15+ years in educational technology.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Software architect specializing in scalable educational platforms.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      bio: "UX expert focused on creating intuitive educational interfaces.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      bio: "Full-stack developer with expertise in cloud infrastructure.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  const stats = [
    { number: "500+", label: "Schools Served" },
    { number: "50K+", label: "Students Managed" },
    { number: "5K+", label: "Teachers Supported" },
    { number: "99.9%", label: "Uptime" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <AcademixLogo />
              <span className="text-xl font-bold">Academix Cloud</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming Education Through
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Technology
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to empower educational institutions with comprehensive, user-friendly technology
              solutions that enhance learning outcomes and streamline administrative processes.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize access to high-quality educational management tools, enabling institutions of all sizes
                  to focus on what matters most: providing excellent education and fostering student success.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Our Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading platform that connects all stakeholders in the educational ecosystem, creating
                  seamless communication and collaboration that drives better outcomes for students worldwide.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Story */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle>Our Story</CardTitle>
              <CardDescription>How Academix Cloud came to be</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Academix Cloud was born from the frustration of educators and administrators who were tired of juggling
                multiple disconnected systems to manage their institutions. Our founders, Sarah and Michael, met while
                working on educational technology projects and realized there had to be a better way.
              </p>
              <p>
                After spending countless hours talking to teachers, principals, parents, and students, we identified the
                core problems: fragmented systems, poor communication, and lack of actionable insights. We set out to
                build a comprehensive platform that would address these challenges while being intuitive enough for
                everyone to use.
              </p>
              <p>
                Today, Academix Cloud serves hundreds of educational institutions worldwide, from small private schools
                to large university systems. We're proud to be part of the educational journey of thousands of students
                and to support the dedicated educators who shape their futures.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div
                        className={`w-12 h-12 ${value.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                      >
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground">The passionate people behind Academix Cloud</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <Avatar className="w-20 h-20 mx-auto mb-4">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Mission?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's work together to transform education and create better outcomes for students everywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-started">
                  <Button size="lg" variant="secondary" className="text-lg px-8">
                    Get Started Today
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
