import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://animalmore.ru/'),
  title: {
    default: 'Animalmore',
    template: '%s | Animalmore',
  },
  description: "Смотрите и покупайте животных с нами! У нас вы сможете приобрести всех домашних животных, кроме запрещенных и экзотических.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} font-sans`}>
      <body>
        <main className='mx-auto flex min-h-screen flex-col flex-wrap gap-8 py-4 md:gap-16 px-6 md:px-12'>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
