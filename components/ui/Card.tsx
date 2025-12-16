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
        "bg-white rounded-xl shadow-md p-6 transition-all duration-300",
        hover && "hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;

