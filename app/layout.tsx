import "@/styles/globals.css";

import { Metadata, Viewport } from "next";

import { fontMono, fontSans, frontSerif } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import FooterComponent from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
export const metadata: Metadata = {
  title: {
    default: "adham.tech",
    template: `%s - adham.tech`,
  },
  description: "Personal webpage for Adham Abo Hasson a fullstack developer",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{`adham.tech | Home`}</title>
      </head>
      <body
        className={cn(
          frontSerif.variable,
          fontSans.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className=" relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1 text-gray-950 dark:text-white">
              {children}
            </div>
          </div>
          <FooterComponent />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
