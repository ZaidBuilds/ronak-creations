interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  href?: string;
  className?: string;
  onClick?: () => void;
}

const base = "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200";

const variants = {
  primary: "bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25",
  secondary: "bg-secondary text-dark hover:bg-secondary-light hover:shadow-lg hover:shadow-secondary/25",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "text-dark hover:bg-black/5",
  whatsapp: "bg-green-500 text-white hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/25",
};

export default function Button({ children, variant = "primary", href, className = "", onClick }: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
