"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Search, Book, MessageCircle, Video, FileText, ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Image from "next/image"

function AcademixLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <Image src="/images/logo.png" alt="Academix Cloud Logo" width={32} height={32} className={className} priority />
  )
}

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openSections, setOpenSections] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setOpenSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const categories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of Academix Cloud",
      color: "bg-blue-500",
      articles: 12,
    },
    {
      icon: MessageCircle,
      title: "User Management",
      description: "Managing users, roles, and permissions",
      color: "bg-green-500",
      articles: 8,
    },
    {
      icon: Video,
      title: "Features & Tools",
      description: "Detailed guides for all features",
      color: "bg-purple-500",
      articles: 15,
    },
    {
      icon: FileText,
      title: "Billing & Payments",
      description: "Payment processing and billing questions",
      color: "bg-orange-500",
      articles: 6,
    },
  ]

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is Academix Cloud?",
          answer:
            "Academix Cloud is a comprehensive school management platform that helps educational institutions manage students, teachers, parents, finances, and administrative tasks all in one place.",
        },
        {
          question: "How do I get started with Academix Cloud?",
          answer:
            "You can start by signing up for a free trial on our website. Once registered, you'll have access to our onboarding wizard that will guide you through the initial setup process.",
        },
        {
          question: "Is my data secure with Academix Cloud?",
          answer:
            "Yes, we take data security very seriously. We use enterprise-grade encryption, regular security audits, and comply with educational privacy regulations like FERPA and COPPA.",
        },
      ],
    },
    {
      category: "Account & Billing",
      questions: [
        {
          question: "How can I upgrade or downgrade my plan?",
          answer:
            "You can change your plan at any time from your account settings. Go to Billing > Plan Management to view available options and make changes.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans.",
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer:
            "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What browsers are supported?",
          answer:
            "Academix Cloud works best on modern browsers including Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for the best experience.",
        },
        {
          question: "Is there a mobile app available?",
          answer:
            "Yes, we have mobile apps available for both iOS and Android. You can download them from the App Store or Google Play Store.",
        },
        {
          question: "How do I import existing student data?",
          answer:
            "You can import student data using our CSV import tool. Go to Students > Import Data and follow the step-by-step guide. We also offer data migration assistance for larger institutions.",
        },
      ],
    },
  ]

  const quickLinks = [
    { title: "System Status", href: "#", description: "Check our current system status" },
    { title: "API Documentation", href: "#", description: "Developer resources and API guides" },
    { title: "Video Tutorials", href: "#", description: "Step-by-step video guides" },
    { title: "Community Forum", href: "#", description: "Connect with other users" },
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
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Help Center
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help you?</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find answers to your questions, learn how to use our features, and get the most out of Academix Cloud.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for help articles, guides, and FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{category.articles} articles</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-md transition-all duration-300 cursor-pointer">
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{link.title}</h3>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((section, sectionIndex) => (
                <Card key={section.category}>
                  <CardHeader>
                    <CardTitle>{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {section.questions.map((faq, faqIndex) => (
                      <Collapsible
                        key={faqIndex}
                        open={openSections.includes(`${sectionIndex}-${faqIndex}`)}
                        onOpenChange={() => toggleSection(`${sectionIndex}-${faqIndex}`)}
                      >
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                          <span className="font-medium">{faq.question}</span>
                          {openSections.includes(`${sectionIndex}-${faqIndex}`) ? (
                            <ChevronDown className="w-5 h-5" />
                          ) : (
                            <ChevronRight className="w-5 h-5" />
                          )}
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 text-muted-foreground">{faq.answer}</CollapsibleContent>
                      </Collapsible>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
              <p className="text-xl mb-8 opacity-90">
                Our support team is here to help you succeed with Academix Cloud.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="text-lg px-8">
                    Contact Support
                  </Button>
                </Link>
                <Link href="/schedule-demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  >
                    Schedule Demo
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
