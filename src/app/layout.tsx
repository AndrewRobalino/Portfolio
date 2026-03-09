import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://andrewrobalino.dev"),
  title: "Andrew Robalino Garcia | Developer Portfolio",
  description:
    "CS student at FIU building real-world applications. Frontend-focused full-stack developer with a passion for design, problem solving, and clean architecture.",
  openGraph: {
    title: "Andrew Robalino Garcia | Developer Portfolio",
    description:
      "CS student at FIU building real-world applications. Frontend-focused full-stack developer with a passion for design, problem solving, and clean architecture.",
    url: "https://andrewrobalino.dev",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Andrew Robalino Garcia — Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Robalino Garcia | Developer Portfolio",
    description:
      "CS student at FIU building real-world applications. Frontend-focused full-stack developer with a passion for design, problem solving, and clean architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${inter.variable} bg-matte-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
