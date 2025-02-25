import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  const locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    return {
      locale: routing.defaultLocale,
      messages: (await import(`@/messages/${routing.defaultLocale}.json`)).default
    };
  }

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default
  };
});