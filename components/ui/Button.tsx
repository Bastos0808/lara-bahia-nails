import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "font-medium transition-all duration-300 ease-in-out rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-pink-accent text-white hover:bg-pink-light focus:ring-pink-accent shadow-md hover:shadow-lg",
    secondary:
      "bg-blue-dark text-white hover:bg-blue-light focus:ring-blue-dark shadow-md hover:shadow-lg",
    outline:
      "border-2 border-blue-dark text-blue-dark hover:bg-blue-dark hover:text-white focus:ring-blue-dark",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

