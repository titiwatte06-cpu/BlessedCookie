const cookies = [
  { emoji: "🍫", name: "Chocolate Chunk", detail: "ดาร์กช็อกโกแลตเข้มข้น หวานกำลังดี", price: "฿85" },
  { emoji: "🍪", name: "Butter Classic", detail: "คุกกี้เนยสดคลาสสิก หอมละมุน", price: "฿75" },
  { emoji: "🥜", name: "Peanut Butter", detail: "เนยถั่วเนื้อแน่น เคี้ยวเพลิน", price: "฿85" },
  { emoji: "🍓", name: "Berry Oat", detail: "โอ๊ตและแครนเบอร์รี เปรี้ยวหวานพอดี", price: "฿90" },
];

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <header className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b66d3d]">Our menu</p><h1 className="mt-4 font-serif text-5xl font-bold tracking-tight text-[#4d3025]">เมนูคุกกี้</h1><p className="mt-5 text-lg leading-8 text-[#7d624d]">เลือกความสุขที่ใช่สำหรับวันนี้ ทุกชิ้นอบสดใหม่จากครัวของเรา</p></header>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cookies.map((cookie) => <article key={cookie.name} className="group border border-[#ead9c5] bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"><div className="grid aspect-square place-items-center bg-[#f7e5c6] text-7xl transition-transform group-hover:scale-[1.03]">{cookie.emoji}</div><div className="pt-5"><div className="flex items-start justify-between gap-3"><h2 className="font-serif text-xl font-bold text-[#4d3025]">{cookie.name}</h2><span className="font-semibold text-[#b66d3d]">{cookie.price}</span></div><p className="mt-2 text-sm leading-6 text-[#8d705b]">{cookie.detail}</p></div></article>)}
      </div>
    </div>
  );
}