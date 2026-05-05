import type { ComponentPropsWithoutRef, ElementType } from "react";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary:
    "bg-[#0052ff] text-white hover:bg-[#0042d4] focus-visible:outline-[#0052ff]",
  secondary:
    "border border-[#0052ff]/20 bg-white text-[#0052ff] hover:bg-[#f5f7ff] focus-visible:outline-[#0052ff]",
  light:
    "bg-white text-slate-900 hover:bg-slate-100 focus-visible:outline-slate-200",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:outline-slate-300",
};

type ButtonVariant = keyof typeof variants;

type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: ButtonVariant;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "className">;

function Button<T extends ElementType = "button">({
  as: Component = "button",
  variant = "primary",
  className = "",
  ...props
}: ButtonProps<T>) {
  return (
    <Component className={`${baseStyles} ${variants[variant]} ${className}`} {...props} />
  );
}

export default Button;
