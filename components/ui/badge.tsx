import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "cherry" | "sky" | "emerald" | "amber" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "gold",
  className = "",
}: BadgeProps) {
  const base =
    "inline-flex items-center text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border";

  const variants = {
    gold: "border-amatu-gold/40 text-amatu-gold bg-amatu-gold/10",
    cherry: "border-amatu-cherry/40 text-red-300 bg-amatu-cherry/20",
    sky: "border-sky-500/30 text-sky-300 bg-sky-500/15",
    emerald: "border-emerald-500/30 text-emerald-300 bg-emerald-500/15",
    amber: "border-amber-500/30 text-amber-300 bg-amber-500/15",
    outline: "border-white/10 text-stone-300 bg-white/5",
  };

  return <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>;
}
