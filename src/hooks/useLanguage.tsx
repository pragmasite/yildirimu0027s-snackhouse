import { createContext, useContext, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  t: typeof translations.de;
  otherLangs: Array<{ code: Language; name: string; path: string }>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  // Determine language from URL path
  let lang: Language = "de"; // Default to German
  if (location.pathname.startsWith("/fr")) {
    lang = "fr";
  } else if (location.pathname.startsWith("/en")) {
    lang = "en";
  }

  const t = translations[lang];

  // Available languages with their paths
  const otherLangs = [
    { code: "de" as Language, name: "Deutsch", path: "/" },
    { code: "fr" as Language, name: "Français", path: "/fr" },
    { code: "en" as Language, name: "English", path: "/en" },
  ].filter((l) => l.code !== lang);

  return (
    <LanguageContext.Provider value={{ lang, t, otherLangs }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
