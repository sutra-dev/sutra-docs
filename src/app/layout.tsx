import { Navbar } from "@/components/nav-bar";
import { NavbarProvider } from "@/components/nav-mobile";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { baseUrl, createMetadata } from "@/lib/metadata";
import { RootProvider } from "fumadocs-ui/provider";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./global.css";

const giest = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const giest_mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = createMetadata({
  title: {
    template: "%s | SUTRA",
    default: "SUTRA",
  },
  description: "The most efficient multilingual language model.",
  metadataBase: baseUrl,
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    try {
                      if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                        document.querySelector('meta[name="theme-color"]').setAttribute('content')
                      }
                    } catch (_) {}
                  `,
          }}
        />
      </head>
      <body
        className={`${giest.variable} ${giest_mono.variable} bg-background font-sans relative `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <RootProvider
            theme={{
              enableSystem: true,
              defaultTheme: "dark",
            }}
          >
            <NavbarProvider>
              <Navbar />
              {children}
              <Toaster
                toastOptions={{
                  style: {
                    borderRadius: "0px",
                    fontSize: "11px",
                  },
                }}
              />
            </NavbarProvider>
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
