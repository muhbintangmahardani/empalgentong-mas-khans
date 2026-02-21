import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Empal Gentong Mas Khans | Kuliner Otentik Cirebon di Jakarta",
  description: "Nikmati kelezatan otentik Empal Gentong khas Cirebon Mas Khans di Slipi, Jakarta Barat. Kuah santan kaya rempah, daging empuk, dan resep warisan leluhur.",
  keywords: [
    "Empal Gentong Mas Khans", 
    "Empal Gentong Jakarta Barat", 
    "Empal Gentong Slipi", 
    "Kuliner Cirebon di Jakarta"
  ],
  openGraph: {
    title: "Empal Gentong Mas Khans | Otentik Cirebon",
    description: "Nikmati kelezatan otentik Empal Gentong khas Cirebon di Slipi, Jakarta Barat.",
    url: "/",
    siteName: "Empal Gentong Mas Khans",
    images: [
      {
        url: "/assets/empal-gentong.png",
        width: 1200,
        height: 630,
        alt: "Empal Gentong Mas Khans",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: '/assets/logo.png', // Pastikan menggunakan garis miring (/) di awal
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // KUNCIAN 1: Tambahkan overflow-x-hidden agar layar HP tidak bocor ke samping
    <html lang="id" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full`}
      >
        {children}
      </body>
    </html>
  );
}