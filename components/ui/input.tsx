"use client"

import type React from "react"
import { forwardRef } from "react"

type InputProps = {
  type?: string
  id: string
  name: string
  label?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  error?: string
  className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", id, name, label, placeholder, value, onChange, required = false, error, className = "" }, ref) => {
    return (
      <div className="mb-4">
        {label && (
          <label htmlFor={id} className="label">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`input ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""} ${className}`}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    )
  },
)

Input.displayName = "Input"

export default Input

