import Link from "next/link";

interface LogoProps {
  dark?: boolean;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { icon: 32, text: "text-base", tagline: "text-[10px]" },
  md: { icon: 40, text: "text-lg", tagline: "text-xs" },
  lg: { icon: 52, text: "text-2xl", tagline: "text-sm" },
};

export default function Logo({ dark, showTagline = true, size = "md" }: LogoProps) {
  const s = sizes[size];
  const textColor = dark ? "text-white" : "text-stone-900";
  const mutedColor = dark ? "text-stone-400" : "text-stone-400";

  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative shrink-0">
        <svg width={s.icon} height={s.icon} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="48" height="48" rx="14" fill="url(#logo-grad)" />
          <rect x="2" y="2" width="48" height="48" rx="14" stroke="url(#logo-grad)" strokeWidth="2" />
          <text x="26" y="31" fontFamily="Georgia, serif" fontSize="22" fontWeight="bold" fill="white" textAnchor="middle" className="select-none">RC</text>
        </svg>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-soft rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="flex flex-col">
        <span className={`${s.text} font-bold leading-tight tracking-tight ${textColor} font-serif`}>
          Ronak
        </span>
        {showTagline && (
          <span className={`${s.tagline} leading-tight ${mutedColor} tracking-widest uppercase font-medium`}>
            Creations
          </span>
        )}
      </div>
    </Link>
  );
}
