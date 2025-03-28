import type React from "react"

type BadgeProps = {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info"
  className?: string
}

export default function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
  const variantClasses = {
    primary: "bg-indigo-100 text-indigo-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    danger: "bg-red-100 text-red-800",
    warning: "bg-amber-100 text-amber-800",
    info: "bg-blue-100 text-blue-800",
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

