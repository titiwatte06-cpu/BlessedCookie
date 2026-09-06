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
    <header className="sticky top-0 z-10 border-b border-[#ead9c5]/80 bg-[#fffaf2]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="กลับหน้าแรก Blessed Cookie">
          <span className="grid size-10 place-items-center rounded-full bg-[#f5c96a] text-xl shadow-sm">🍪</span>
          <span className="font-serif text-xl font-bold tracking-tight text-[#4d3025]">Blessed Cookie</span>
        </Link>
        <nav aria-label="เมนูหลัก" className="flex flex-wrap gap-1">
          {links.map((link) => {
            // usePathname ทำหน้าที่คล้าย NavLink ใน React Router: ตรวจ route ปัจจุบันแล้วเติมสไตล์
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${isActive ? "bg-[#5d382b] text-[#fffaf2]" : "text-[#7d624d] hover:bg-[#f7e5c6] hover:text-[#4d3025]"}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}