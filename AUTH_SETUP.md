# NextAuth.js Integration Setup

This project has been successfully integrated with NextAuth.js for authentication. Here's what has been set up and how to configure it.

## What's Been Added

### 1. Authentication Configuration
- **`lib/auth.ts`** - NextAuth configuration with credentials provider
- **`lib/auth-utils.ts`** - Server-side authentication utilities
- **`lib/prisma.ts`** - Prisma client configuration

### 2. API Routes
- **`app/api/auth/[...nextauth]/route.ts`** - NextAuth API handler
- **`app/api/auth/register/route.ts`** - User registration endpoint

### 3. Components
- **`components/auth-provider.tsx`** - Session provider wrapper
- **`components/protected-route.tsx`** - Route protection component
- **`hooks/use-auth.ts`** - Client-side authentication hook

### 4. Updated Pages
- **`app/signin/page.tsx`** - Updated with real authentication
- **`app/signup/page.tsx`** - Updated with real registration
- **`app/dashboard/page.tsx`** - New protected dashboard page
- **`app/layout.tsx`** - Updated with AuthProvider

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/academix_db"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

### Generating NEXTAUTH_SECRET

You can generate a secure secret using:

```bash
openssl rand -base64 32
```

Or use any secure random string generator.

## Database Setup

1. **Update your database URL** in `.env.local`
2. **Run Prisma migrations**:
   ```bash
   pnpm prisma migrate dev
   ```
3. **Generate Prisma client**:
   ```bash
   pnpm prisma generate
   ```

## Features

### Authentication Methods
- **Credentials Provider** - Email/password authentication
- **Password Hashing** - Secure bcrypt hashing
- **Session Management** - JWT-based sessions
- **Role-based Access** - User roles from the database

### User Roles
- Administrator
- Principal
- Teacher
- Accountant
- IT Manager
- Other

### Security Features
- Password validation (minimum 8 characters)
- Email uniqueness validation
- Secure password hashing with bcrypt
- JWT token management
- Protected routes

## Usage

### Client-Side Authentication

```tsx
import { useAuth } from "@/hooks/use-auth"

function MyComponent() {
  const { user, login, logout, register, isAuthenticated } = useAuth()
  
  // Login
  const handleLogin = async () => {
    const result = await login(email, password)
    if (result?.success) {
      // Redirect or show success message
    }
  }
  
  // Register
  const handleRegister = async () => {
    const result = await register({
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      password: "password123",
      institutionName: "Example School",
      role: "teacher"
    })
  }
}
```

### Server-Side Authentication

```tsx
import { getCurrentUser, requireAuth } from "@/lib/auth-utils"

// Get current user (returns null if not authenticated)
const user = await getCurrentUser()

// Require authentication (redirects to /signin if not authenticated)
const user = await requireAuth()
```

### Protected Routes

```tsx
import { ProtectedRoute } from "@/components/protected-route"

function ProtectedPage() {
  return (
    <ProtectedRoute>
      <div>This content is only visible to authenticated users</div>
    </ProtectedRoute>
  )
}
```

## Testing

1. **Start the development server**:
   ```bash
   pnpm dev
   ```

2. **Visit the signup page** (`/signup`) to create a new account

3. **Visit the signin page** (`/signin`) to test login

4. **Access the dashboard** (`/dashboard`) to see the protected content

## Next Steps

- Add email verification
- Implement password reset functionality
- Add OAuth providers (Google, GitHub, etc.)
- Create role-based route protection
- Add user profile management
- Implement session timeout handling

## Troubleshooting

### Common Issues

1. **Database Connection**: Ensure your `DATABASE_URL` is correct and the database is running
2. **Prisma Client**: Run `pnpm prisma generate` if you get Prisma client errors
3. **Environment Variables**: Make sure all required env vars are set in `.env.local`
4. **Port Conflicts**: Ensure port 3000 is available for the development server

### Error Messages

- **"Invalid credentials"** - Check email/password combination
- **"User already exists"** - Email is already registered
- **"Validation error"** - Check form data requirements 

## Secure Redirect Handling (Best Practices)

- **Use environment variables** for callback URLs: Set `NEXTAUTH_CALLBACK_URL` in your `.env.local` for flexibility across environments.
- **Validate callback URLs**: Only allow redirects to relative URLs or URLs that start with your own domain. This prevents open redirect vulnerabilities.
- **Prefer relative URLs** for internal navigation: Use `/dashboard` instead of a full URL when possible.
- **Fallback to a safe default**: If the callback URL is not valid, always redirect to your home page or a safe default.
- **Centralize and document redirect logic**: Keep all redirect logic in your NextAuth config and document it for maintainability.
- **Use HTTPS in production**: Always use secure URLs in production environments.

### Example Redirect Callback

```js
async redirect({ url, baseUrl }) {
  const callbackUrl = process.env.NEXTAUTH_CALLBACK_URL || baseUrl
  // Only allow relative URLs or URLs that start with our baseUrl
  if (url.startsWith("/")) return url
  if (url.startsWith(baseUrl)) return url
  // Otherwise, fallback to the safe default
  return callbackUrl
}
```

This ensures your authentication flow is both secure and flexible. 