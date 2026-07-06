import { en } from './en';
import { de } from './de';

export const languages = {
  en,
  de
} as const;

export type LanguageCode = keyof typeof languages;
