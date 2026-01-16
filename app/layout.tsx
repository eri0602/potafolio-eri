import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import { LenisProvider } from "@/components/LenisProvider";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ProgrammerBackground } from "@/components/ProgrammerBackground";
import { MatrixRain } from "@/components/MatrixRain";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eri Cruz | Desarrollador Full Stack & Ingeniero de Software",
  description: "Desarrollador Full Stack con 3+ años de experiencia creando soluciones web escalables. Especializado en React, Next.js, TypeScript y arquitecturas modernas. Más de 50 proyectos entregados exitosamente.",
  keywords: "desarrollador web, full stack developer, React, Next.js, TypeScript, Node.js, ingeniero de software, portfolio profesional, desarrollo web",
  authors: [{ name: "Eri Cruz" }],
  creator: "Eri Cruz",
  publisher: "Eri Cruz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Eri Cruz | Desarrollador Full Stack & Ingeniero de Software",
    description: "Portfolio profesional con experiencia en desarrollo de aplicaciones web escalables y modernas",
    type: "website",
    locale: "es_ES",
    siteName: "Portfolio Eri Cruz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eri Cruz | Desarrollador Full Stack",
    description: "Desarrollador Full Stack especializado en tecnologías modernas",
    creator: "@ericruz_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider>
          <LenisProvider />
          <LoadingScreen />
          <ProgrammerBackground />
          <MatrixRain />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
