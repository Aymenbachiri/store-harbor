"use client";
import MoonIcon from "@/lib/svg/MoonIcon";
import SunIcon from "@/lib/svg/SunIcon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      aria-label="Toggle theme"
      className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
      onClick={toggleTheme}
    >
      <MoonIcon />
      <SunIcon />
    </button>
  );
}
