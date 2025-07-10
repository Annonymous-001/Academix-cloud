"use client"

import { useAuth } from "@/hooks/use-auth"
import { ReactNode } from "react"
import { redirect } from "next/navigation"

interface ProtectedRouteProps {
  children: ReactNode
  fallback?: ReactNode
}

export function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return fallback || <div>Loading...</div>
  }

  if (!isAuthenticated) {
    redirect("/signin")
  }

  return <>{children}</>
} 