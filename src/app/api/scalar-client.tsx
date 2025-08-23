"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ScalarApiReference() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full overflow-y-scroll" />;
  }

  // Determine the actual theme to use
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  // Debug logging
  console.log("Theme debug:", { theme, resolvedTheme, currentTheme, isDark });

  return (
    <div
      className="w-full h-full overflow-y-scroll"
      data-theme={isDark ? "dark" : "light"}
    >
      <iframe
        src="/api/openapi-spec"
        className="w-full h-full border-0"
        title="SUTRA API Reference"
      />
    </div>
  );
}