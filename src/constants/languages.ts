export const languageMap = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
};

export type SupportedLanguage = keyof typeof languageMap;

const supportedLanguages = Object.keys(languageMap) as SupportedLanguage[];

export default supportedLanguages;
