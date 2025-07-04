import "./globals.css";
import type { Metadata } from "next";
import { inter, poppins, firaCode } from "@/lib/fonts";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL('https://coding4dev.com'),

  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "coding",
    "programming",
    "web development",
    "javascript",
    "react",
    "node.js",
    "mongodb",
    "express",
    "mern stack",
    "next.js",
    "tutorials",
    "coding tutorials",
  ],
  authors: [
    {
      name: "Coding4Dev",
      url: "https://www.youtube.com/@Coding4Dev",
    },
  ],
  creator: "Coding4Dev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coding4dev.com",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: "@Coding_4Dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} ${firaCode.variable}`}
    >
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}