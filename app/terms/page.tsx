"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Scale } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

function AcademixLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <Image src="/images/logo.png" alt="Academix Cloud Logo" width={32} height={32} className={className} priority />
  )
}

export default function TermsOfServicePage() {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Legal
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">Last updated: January 1, 2024</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Scale className="w-5 h-5" />
                  <span>1. Acceptance of Terms</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  By accessing and using Academix Cloud ("Service"), you accept and agree to be bound by the terms and
                  provision of this agreement.
                </p>
                <p>If you do not agree to abide by the above, please do not use this service.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Description of Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Academix Cloud is a comprehensive school management platform that provides:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Student information management</li>
                  <li>Fee collection and financial tracking</li>
                  <li>Attendance monitoring</li>
                  <li>Parent-teacher communication tools</li>
                  <li>Academic performance analytics</li>
                  <li>Administrative dashboard and reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. User Accounts and Registration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  To access certain features of the Service, you must register for an account. When you register for an
                  account, you may be required to provide us with some information about yourself.
                </p>
                <p>
                  You are responsible for maintaining the confidentiality of your account and password and for
                  restricting access to your computer.
                </p>
                <p>You agree to accept responsibility for all activities that occur under your account or password.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Acceptable Use Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>You agree not to use the Service to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Upload, post, or transmit any content that is unlawful, harmful, threatening, abusive, or otherwise
                    objectionable
                  </li>
                  <li>
                    Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or
                    entity
                  </li>
                  <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
                  <li>Attempt to gain unauthorized access to any portion of the Service</li>
                  <li>Use the Service for any commercial purpose without our express written consent</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
                  Service, to understand our practices.
                </p>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Certain aspects of the Service may be provided for a fee. You agree to pay all fees and charges
                  incurred in connection with your account.
                </p>
                <p>
                  All fees are non-refundable unless otherwise stated. We reserve the right to change our fees at any
                  time with 30 days notice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Service and its original content, features, and functionality are and will remain the exclusive
                  property of Academix Cloud and its licensors.
                </p>
                <p>
                  The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may
                  not be used without our prior written consent.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We may terminate or suspend your account and bar access to the Service immediately, without prior
                  notice or liability, under our sole discretion, for any reason whatsoever.
                </p>
                <p>If you wish to terminate your account, you may simply discontinue using the Service.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  In no event shall Academix Cloud, nor its directors, employees, partners, agents, suppliers, or
                  affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>If you have any questions about these Terms of Service, please contact us at:</p>
                <div className="bg-muted p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong> legal@academixcloud.com
                  </p>
                  <p>
                    <strong>Address:</strong> 123 Education Street, Learning City, LC 12345
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
