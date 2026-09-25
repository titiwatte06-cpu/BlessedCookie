"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "หน้าแรก" },
  { href: "/menu", label: "เมนูคุกกี้" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/contact", label: "ติดต่อ" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-[#ead9c5]/80 relative">
  {/* ส่วนบน - พื้นส้ม */}
  <div className="bg-[#f5c96a]">
    <div className="mx-auto flex max-w-6xl items-center px-6 py-4">
      {/* <Link href="/" className="flex items-center gap-3" aria-label="กลับหน้าแรก Blessed Cookie">
        <span className="grid size-10 place-items-center rounded-full bg-[#fffaf2] text-xl shadow-sm">🍪</span>
        <span className="font-serif text-xl font-bold tracking-tight text-[#4d3025]">Blessed Cookie</span>
      </Link> */}
      <div className="h-3" />
    </div>
  </div>

  {/* ส่วนล่าง - พื้นขาว */}
  <div className="bg-[#fffaf2]/95 backdrop-blur">
    <div className="h-17" />
  </div>

  {/* กล่องสีขาวลอย - อ้างอิงจาก header ทั้งก้อน */}
  <div className="absolute left-1/2 top-0 w-fit -translate-x-1/2 rounded bg-white px-4 py-5 shadow-lg sm:py-7">
    <nav aria-label="เมนูหลัก" className="flex  items-center justify-center">
    
    <img
            src="/image/blessedcookie-logo.png"
            alt="Blessed Cookie"
            className="h-20 w-auto object-contain"
          />
    </nav>
    
  </div>
</header>
  );
}
