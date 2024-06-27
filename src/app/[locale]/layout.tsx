import type { LocaleLayoutProps } from "@/lib/types/types";
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import { notFound } from "next/navigation";

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const dir = locale === "ar" ? "rtl" : "ltr";
  const messages = useMessages();
  const nextLocale = useLocale();

  if (nextLocale !== locale) notFound();

  return (
    <>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <div dir={dir}>{children}</div>
      </NextIntlClientProvider>
    </>
  );
}
