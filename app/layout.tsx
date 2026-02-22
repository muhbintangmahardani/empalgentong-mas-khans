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
    // Kata kunci utama Anda
    "Empal Gentong Mas Khans", 
    "Empal Gentong Jakarta Barat", 
    "Empal Gentong Slipi", 
    "Kuliner Cirebon di Jakarta",
    // Tambahan variasi kata kunci agar makin kuat di Google
    "Empal Gentong Cirebon",
    "Empal Gentong terdekat",
    "Empal Asem Mas Khans",
    "Nasi Lengko Spesial",
    "Empal Gentong Rosliana"
  ],
  authors: [{ name: "Mas Khans" }],
  creator: "Mas Khans",
  publisher: "Empal Gentong Mas Khans",
  openGraph: {
    title: "Empal Gentong Mas Khans | Otentik Cirebon",
    description: "Nikmati kelezatan otentik Empal Gentong khas Cirebon di Slipi, Jakarta Barat.",
    url: "https://empalgentong-mas-khans.vercel.app/", // Bagus sekali! URL Vercel sudah dimasukkan
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
  twitter: {
    card: "summary_large_image",
    title: "Empal Gentong Mas Khans | Kuliner Otentik",
    description: "Nikmati kelezatan otentik Empal Gentong khas Cirebon di Slipi, Jakarta Barat. Kuah kaya rempah dan daging empuk pilihan.",
    images: ["/assets/empal-gentong.png"],
  },
  icons: {
    icon: '/assets/logo.png', // Ikon title (favicon) tetap aman
    apple: '/assets/logo.png', // Tambahan: Agar logo muncul rapi jika user iPhone menyimpan web ini ke Home Screen mereka
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // PERBAIKAN: Menghapus 'scroll-smooth' agar pindah halaman jadi instan dan efek fade-in bisa bekerja optimal
    <html lang="id" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full`}
      >
        {children}
      </body>
    </html>
  );
}