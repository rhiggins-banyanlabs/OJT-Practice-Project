import React from "react";

type ButtonVariant = "primary" | "link";
type ButtonSize = "md" | "lg" | "xl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const baseClasses = "rounded-lg font-medium font-inter transition-colors duration-200";

  let sizeClass = "";
  if (size === "md") sizeClass = "text-lg py-3 px-5";
  else if (size === "lg") sizeClass = "text-base py-5 px-6";
  else if (size === "xl") sizeClass = "text-base py-6 px-8";

  let variantClass = "";
  if (variant === "primary") {
    variantClass = "bg-[#0D9488] text-white hover:bg-[#0C827A]";
  } else if (variant === "link") {
    variantClass = "text-[#0D9488] hover:text-[#0C827A] hover:underline bg-transparent px-0 py-0";
  }

  const allClasses = `${baseClasses} ${sizeClass} ${variantClass} ${className}`.trim();

  return (
    <button className={allClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
