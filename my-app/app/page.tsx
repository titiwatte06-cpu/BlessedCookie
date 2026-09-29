
"use client";

import { useEffect, useState } from "react";

const cookieBoxes = [
  { id: "oatmeal", label: "Oatmeal", image: "/image/oatmeal-cookie.png", imageClass: "h-64 w-auto sm:h-[25rem]" },
  { id: "chocolate", label: "Chocolate", image: "/image/chocolate-cookie.png", imageClass: "h-64 w-auto sm:h-[22rem]" },
  { id: "almond", label: "Almond", image: "/image/almond-butter-cookie.png", imageClass: "h-64 w-auto sm:h-[22rem]" },
];

export default function Home() {
  const [selectedCookie, setSelectedCookie] = useState("oatmeal");
  const activeCookie = cookieBoxes.find((cookie) => cookie.id === selectedCookie) ?? cookieBoxes[0];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSelectedCookie((currentCookie) => {
        const currentIndex = cookieBoxes.findIndex((cookie) => cookie.id === currentCookie);
        return cookieBoxes[(currentIndex + 1) % cookieBoxes.length].id;
      });
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-hidden">
      <section className="relative overflow-hidden px-6 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('/image/wallpaper-cookie.png')] bg-cover bg-center" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fade-up">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#f5c96a] drop-shadow-[0_3px_4px_rgba(16,8,5,1)]">Baked with a blessing</p>
            <h1 className="max-w-xl font-serif text-5xl font-bold leading-[1.05] tracking-tight text-[#fffaf2] drop-shadow-[0_5px_6px_rgba(16,8,5,1)] sm:text-7xl">คุกกี้ชิ้นเล็กๆ <span className="text-[#f5c96a]">ความสุขชิ้นใหญ่</span></h1>
            <p className="mt-6 max-w-lg text-lg font-medium leading-8 text-[#fffaf2] drop-shadow-[0_3px_4px_rgba(16,8,5,1)]">คุกกี้โฮมเมดอบสดใหม่ หอมเนยทุกคำ ตั้งใจทำเหมือนอบให้คนที่เรารัก</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="/menu" className="rounded-full bg-[#5d382b] px-6 py-3 font-semibold text-[#fffaf2] shadow-lg shadow-[#5d382b]/15 transition-transform hover:-translate-y-0.5">ดูเมนูคุกกี้ →</a>
              <a href="/about" className="rounded-full border border-[#fffaf2]/70 px-6 py-3 font-semibold text-[#fffaf2] transition-colors hover:bg-[#fffaf2]/15">เรื่องราวของเรา</a>
            </div>
          </div>
          <div className="mx-auto flex flex-col items-center">
            <div className="relative grid size-80 place-items-center rounded-[48%] bg-[#fffaf2] shadow-xl shadow-[#9d6844]/15 sm:size-[28rem]">
              <img
                key={activeCookie.id}
                src={activeCookie.image}
                alt={`${activeCookie.label} cookie box`}
                className={`animate-cookie-swap object-contain ${activeCookie.imageClass}`}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {[['01', 'วัตถุดิบดี', 'เลือกใช้วัตถุดิบคุณภาพ เพื่อรสชาติที่เราภูมิใจ'], ['02', 'อบใหม่เสมอ', 'อบตามออเดอร์ ให้ทุกกล่องหอมเหมือนเพิ่งออกจากเตา'], ['03', 'ส่งต่อความสุข', 'แพ็กอย่างพิถีพิถัน พร้อมเป็นของขวัญให้คนพิเศษ']].map(([number, title, text]) => (
            <article key={number} className="border-t-2 border-[#f5c96a] pt-5"><p className="text-sm font-bold text-[#b66d3d]">{number}</p><h2 className="mt-3 font-serif text-2xl font-bold text-[#4d3025]">{title}</h2><p className="mt-2 leading-7 text-[#7d624d]">{text}</p></article>
          ))}
        </div>
      </section>
    </div>
  );
}
