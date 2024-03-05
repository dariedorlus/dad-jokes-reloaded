import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '../components/Header';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Darie's Dad Jokes",
  description: 'Ending every meeting with a knee slapper',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className={`flex w-full min-h-screen sm:justify-center sm:overflow-hidden sm:py-12 sm:bg-slate-50`}>
          <div className="flex flex-col w-full mt-24 sm:pb-8 sm:pt-2 sm:shadow-xl sm:ring-1 sm:ring-gray-900/5 sm:mx-auto sm:max-w-3xl sm:rounded-lg sm:px-10 sm:bg-white">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
