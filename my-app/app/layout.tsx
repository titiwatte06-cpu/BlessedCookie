import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "./components/navigation";
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
  title: "Blessed Cookie | คุกกี้โฮมเมด",
  description: "คุกกี้โฮมเมดอบสดใหม่จาก Blessed Cookie",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen">
        {/* layout เปรียบเหมือน component หลักที่ครอบทุก route ใน React Router */}
        <Navigation />
        <main>{children}</main>
        <footer className="border-t border-[#ead9c5] bg-[#fffaf2] px-6 py-8 text-center text-sm text-[#7d624d]">
          <p>อบด้วยใจ ส่งต่อความสุขในทุกคำ</p>
          <p className="mt-2 text-xs text-[#a68b73]">© 2024 Blessed Cookie</p>
        </footer>
      </body>
    </html>
  );
}
