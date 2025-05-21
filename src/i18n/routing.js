import { defineRouting } from "next-intl/routing";

export const locales = ["uz", "ru", "en"];

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "uz",

  // If this locale is matched, pathnames work without a prefix (e.g. `/about` instead of `/uz/about`)
  localeDetection: false,
});
