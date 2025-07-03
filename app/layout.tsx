import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Academix Cloud - Complete School Management Solution",
  description:
    "Streamline your educational institution with our comprehensive cloud-based platform. Manage students, teachers, parents, finances, and more.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "16x16",
        type: "image/x-icon",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/favicon.ico",
        sizes: "180x180",
        type: "image/x-icon",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
