import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, hover = true }) => {
  return (
    <div
      className={cn(
        "bg-white/40 backdrop-blur-xl backdrop-saturate-150 border border-white/50 rounded-xl shadow-lg p-6 transition-all duration-300",
        hover && "hover:shadow-2xl hover:-translate-y-1 hover:bg-white/50",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;

