// /context/ThemeContext.js
import React, { createContext, useEffect, useState } from "react";
import { Appearance } from "react-native";

const LightTheme = {
  mode: "light",
  background: "#ffffff",        // Pure white base
  backgroundsmcard: "#f9fafb",  // Light gray for small cards
  text: "#1e293b",              // Slate gray for readability
  textMuted: "#64748b",         // Muted gray-blue
  primary: "#2563eb",           // Strong blue
  card: "#f9fafb",              // Slightly gray card
  border: "#e5e7eb",            // Soft neutral border
  grone: "#3b82f6",             // Gradient start
  grtwo: "#60a5fa",             // Gradient end
  smcardtextcolor: "#2563eb",   // Use primary for emphasis
  active: "#0ea5e9",            // Cyan-blue for active states
};



  const DarkTheme = {
    mode: "dark",
    background: "#121212",       // Recommended dark theme base
    backgroundsmcard: "#1e1e1e", // Slightly lighter for small cards
    text: "#e2e8f0",             // Soft light gray (less harsh than pure white)
    textMuted: "#94a3b8",        // Muted cool gray
    primary: "#3b82f6",          // Same blue for brand consistency
    card: "#1f2937",             // Dark slate for elevated surfaces
    border: "#334155",           // Dark blue-gray borders
    grone: "#6366f1",            // Indigo gradient start
    grtwo: "#4338ca",            // Deeper indigo gradient end
    smcardtextcolor: "#a78bfa",  // Soft violet text
    active: "#03dac5", 
    bigcard: "#252525"          // Teal accent for active states
  };
  
  

  const SoftTheme = {
    mode: "soft",
    background: "#fffaf0",        // Warm off-white
    backgroundsmcard: "#fffbeb",  // Cream small cards
    text: "#374151",              // Dark gray text
    textMuted: "#9ca3af",         // Muted gray
    primary: "#f97316",           // Warm orange
    card: "#fff7ed",              // Peachy card background
    border: "#fcd34d",            // Warm golden border
    grone: "#f59e0b",             // Amber gradient start
    grtwo: "#fcd34d",             // Amber gradient end
    smcardtextcolor: "#d97706",   // Deep amber for emphasis
    active: "#fb923c",            // Vibrant orange active state
  };
  

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();

  const [theme, setTheme] = useState(
    colorScheme === "dark" ? DarkTheme : LightTheme
  );

  const setAppTheme = (mode) => {
    if (mode === "light") setTheme(LightTheme);
    else if (mode === "dark") setTheme(DarkTheme);
    else if (mode === "soft") setTheme(SoftTheme);
  };

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme === "dark" ? DarkTheme : LightTheme);
    });

    return () => listener.remove();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setAppTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
