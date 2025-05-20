import React from "react";

export type ParagraphVariant = "body" | "small" | "caption";

interface ParagraphProps extends React.HTMLAttributes<HTMLElement> {
  variant?: ParagraphVariant;
  as?: React.ElementType;
  children: React.ReactNode;
}

const variantStyles: Record<ParagraphVariant, string> = {
  body: "text-base leading-relaxed font-normal text-slate-800",
  small: "text-sm leading-relaxed font-normal text-slate-500",
  caption: "text-xs leading-relaxed font-normal text-slate-400",
};

export const Paragraph: React.FC<ParagraphProps> = ({
  variant = "body",
  as: Component = "p",
  className = "",
  children,
  ...props
}) => {
  const combinedClassName = `${variantStyles[variant]} ${className}`.trim();

  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
};

export default Paragraph;

