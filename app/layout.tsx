import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], 
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  // OPTIMASI SEO: Kata "Slipi" ditaruh di Title agar Google tahu persis lokasinya
  title: "Empal Gentong Mas Khans | Rekomendasi Empal Gentong di Slipi",
  // OPTIMASI SEO: Memulai deskripsi dengan pertanyaan yang memuat kata kunci pencarian
  description: "Mencari Empal Gentong di Slipi, Jakarta Barat? Nikmati kelezatan autentik Empal Gentong khas Cirebon di Mas Khans. Kuah santan kaya rempah, daging sapi empuk, dan resep warisan leluhur.",
  // OPTIMASI SEO: Kata kunci generik (Slipi/Jakarta Barat) ditaruh di urutan paling atas
  keywords: [
    "Empal Gentong Slipi", 
    "Empal Gentong Mas Khans", 
    "Empal Gentong Jakarta Barat", 
    "Kuliner Cirebon di Slipi",
    "Kuliner Cirebon di Jakarta"
  ],
  openGraph: {
    title: "Empal Gentong Mas Khans | Rekomendasi Empal Gentong di Slipi",
    description: "Nikmati kelezatan autentik Empal Gentong khas Cirebon di Slipi, Jakarta Barat.",
    url: "/",
    siteName: "Empal Gentong Mas Khans",
    images: [
      {
        url: "/assets/empal-gentong.png",
        width: 1200,
        height: 630,
        // OPTIMASI SEO: Alt image ditambahkan kata kunci
        alt: "Empal Gentong Slipi Mas Khans",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  // OPTIMASI FAVICON: Menambahkan berbagai ukuran dan format khusus Apple agar logo muncul di Google
  icons: {
    icon: [
      { url: '/assets/logo.png' },
      { url: '/assets/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/assets/logo.png',
    apple: [
      { url: '/assets/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="overflow-x-hidden">
      <body className={`${poppins.className} ${playfair.variable} ${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full`}>
        {children}
      </body>
    </html>
  );
}