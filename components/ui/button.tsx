import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "cherry"
    | "secondary"
    | "outline"
    | "ghost"
    | "icon";
  size?: "sm" | "md" | "lg" | "icon";
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
    "inline-flex items-center justify-center font-semibold rounded-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
    icon: "p-2.5 text-sm",
  };

  const variantStyles = {
    primary:
      "bg-amatu-gold text-stone-950 hover:bg-amatu-gold-light shadow-lg shadow-amatu-gold/20 active:translate-y-px",
    cherry:
      "bg-amatu-cherry text-stone-100 hover:bg-amatu-cherry-light hover:text-white shadow-lg shadow-amatu-cherry/25 hover:shadow-amatu-cherry/40 active:translate-y-px",
    secondary:
      "bg-white/10 text-white hover:bg-white/20 border border-white/10 active:translate-y-px",
    outline:
      "border border-white/20 hover:border-white text-stone-300 hover:text-white active:translate-y-px",
    ghost:
      "text-stone-300 hover:text-white hover:bg-white/5 active:translate-y-px",
    icon:
      "bg-white/5 border border-white/10 text-stone-200 hover:text-white hover:border-amatu-gold/50 active:translate-y-px",
  };

  const resolvedSize = variant === "icon" && size === "md" ? "icon" : size;

  return (
    <button
      className={`${baseStyles} ${sizeStyles[resolvedSize]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
