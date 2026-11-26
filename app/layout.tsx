import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackgroundGlow from "@/components/BackgroundGlow";
import "./globals.css";
import { Sora } from "next/font/google";
import { cn } from "@/lib/utils";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jenna Fauconnier — Portfolio",
  description: "Développeuse React.js & React Native",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning : le script ci-dessous ajuste la classe .dark avant l'hydratation.
    <html lang="fr" className={cn("dark font-sans", sora.variable)} suppressHydrationWarning>
      <head>
        {/* Applique le thème avant le premier affichage (évite le flash). Sans JS : sombre. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");document.documentElement.classList.toggle("dark",t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches)}catch(e){}`,
          }}
        />
      </head>
      <body>
        <BackgroundGlow />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
