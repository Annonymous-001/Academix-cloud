"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export function useAuth() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const login = async (email: string, password: string) => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        throw new Error(result.error)
      }

      if (result?.ok) {
        router.push("/") // Redirect to home page after login
        return { success: true }
      }
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : "Login failed" }
    }
  }

  const logout = async () => {
    await signOut({ redirect: false })
    router.push("/")
  }

  const register = async (userData: {
    firstName: string
    lastName: string
    email: string
    password: string
    institutionName: string
    role: string
    subscribeNewsletter?: boolean
  }) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Registration failed")
      }

      // Auto-login after successful registration
      const loginResult = await login(userData.email, userData.password)
      return loginResult
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "Registration failed" 
      }
    }
  }

  return {
    session,
    status,
    user: session?.user,
    isAuthenticated: !!session?.user,
    isLoading: status === "loading",
    login,
    logout,
    register,
  }
} 