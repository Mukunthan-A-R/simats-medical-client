// src/utils/constants.ts

// 🎨 Common style constants
export const aquaButtonStyle =
  "rounded-full text-xs font-medium transition-all duration-200 active:scale-95";

export const aquaGlossEffect = "shadow-sm active:shadow-none";

export const iconButtonStyle =
  "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95";

// 🗓️ Reusable date formatter
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
