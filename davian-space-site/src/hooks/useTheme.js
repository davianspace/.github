import { useEffect, useState } from "react";

const STORAGE_KEY = "davian-space-theme";

export const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Prefer stored theme, default to dark mode if not set.
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setTheme(stored);
    } else {
      // Default to dark mode
      setTheme("dark");
    }
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
