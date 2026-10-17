import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-amatu-gold text-stone-950 hover:bg-amatu-gold-light active:scale-95 shadow-lg shadow-amatu-gold/20",
    secondary:
      "bg-white/10 text-white hover:bg-white/20 active:scale-95 border border-white/10",
    outline:
      "border border-amatu-gold text-amatu-gold hover:bg-amatu-gold/10 active:scale-95",
    ghost:
      "text-stone-300 hover:text-white hover:bg-white/5 active:scale-95",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
