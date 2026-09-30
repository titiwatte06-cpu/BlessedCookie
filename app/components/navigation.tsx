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
    <div className="mx-auto hidden h-17 max-w-6xl grid-cols-[1fr_14rem_1fr] items-center px-6 sm:grid">
      <nav aria-label="เมนูหลักด้านซ้าย" className="flex items-center justify-around gap-4 text-sm font-semibold text-[#4d3025]">
        {links.slice(0, 2).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            className={`whitespace-nowrap py-2 transition-colors hover:text-[#b66d3d] ${pathname === link.href ? "border-b-2 border-[#f5c96a] text-[#9a5931]" : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div aria-hidden="true" />
      <nav aria-label="เมนูหลักด้านขวา" className="flex items-center justify-around gap-4 text-sm font-semibold text-[#4d3025]">
        {links.slice(2).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            className={`whitespace-nowrap py-2 transition-colors hover:text-[#b66d3d] ${pathname === link.href ? "border-b-2 border-[#f5c96a] text-[#9a5931]" : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
    <nav aria-label="เมนูหลัก" className="flex h-28 items-end justify-center gap-3 px-3 pb-3 text-xs font-semibold text-[#4d3025] sm:hidden">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={pathname === link.href ? "page" : undefined}
          className={`whitespace-nowrap py-2 transition-colors hover:text-[#b66d3d] ${pathname === link.href ? "border-b-2 border-[#f5c96a] text-[#9a5931]" : ""}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  </div>
  {/* กล่องโลโก้สีขาวแบบเดิม */}
  <div className="absolute left-1/2 top-0 w-fit -translate-x-1/2 rounded bg-white px-4 py-5 shadow-lg sm:py-7">
    <nav aria-label="โลโก้ Blessed Cookie" className="flex items-center justify-center">
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
