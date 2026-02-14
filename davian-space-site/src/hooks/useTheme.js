import { useEffect, useState } from "react";

const STORAGE_KEY = "davian-space-theme";

export const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Prefer stored theme, fallback to system preference.
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setTheme(stored);
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    // Keep the document class and storage in sync.
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};
