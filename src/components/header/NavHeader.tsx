"use client";

import { useNavigation } from "@/lib/hooks/useNavigation";

export default function NavHeader({ children }: { children: React.ReactNode }) {
  const { navBg } = useNavigation();

  return (
    <header
      className={`sticky top-0 w-full z-[100] transition-all duration-300 ease-in-out
        ${
          navBg
            ? "bg-slate-200 shadow-md dark:bg-[#151515] dark:shadow-[#151515]"
            : "bg-transparent"
        }`}
    >
      {children}
    </header>
  );
}
