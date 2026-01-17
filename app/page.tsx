import Image from "next/image";

type Stop = {
  id: string;
  city: string;
  venue: string;
  dateLabel: string;
  ticketUrl: string;
  imageSrc: string; // public 配下のパス（例: /tour/tokyo.jpg）
  note?: string; // 任意：販売サイト名など
};

const STOPS: Stop[] = [
  {
    id: "osaka",
    city: "大阪",
    venue: "高槻城公園芸術文化劇場 太陽ファルマテックホール",
    dateLabel: "2026/9/13（日）",
    ticketUrl: "https://teket.jp/13986/62726",
    imageSrc: "/tour/osaka.jpg",
    
  },
  
  {
    id: "sapporo",
    city: "札幌",
    venue: " 渡辺淳一文学館　ホール",
    dateLabel: "2026/9/27（日）",
    ticketUrl: "https://teket.jp/13986/63154",
    imageSrc: "/tour/sapporo.jpg",
  },
  {
    id: "tokyo",
    city: "東京",
    venue: "銀座 王子ホール",
    dateLabel: "2026/10/12（月祝）",
    ticketUrl: "https://teket.jp/13986/63152",
    imageSrc: "/tour/tokyo.jpg",
    
  },
  {
    id: "fukuoka",
    city: "福岡",
    venue: "アクロス福岡 円形ホール",
    dateLabel: "2026/10/18（日）",
    ticketUrl: "https://teket.jp/13986/63155",
    imageSrc: "/tour/fukuoka.jpg",
  },
];

export default function Home() {
  return (
<main className="min-h-screen bg-[#fbfaf7] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-[#fbfaf7]/80 backdrop-blur">
  <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
    <div className="leading-tight">
      <div className="text-lg tracking-[0.15em] text-slate-500">
        DUO RIBBON
      </div>
      <div className="mt-1 text-lg tracking-[0.15em] text-slate-500">
        コンサートツアー 2026
      </div>
    </div>

    
  </div>
</header>
<section className="mx-auto max-w-5xl px-4 py-14 md:py-1s0">
  <div className="mx-auto max-w-3xl text-center">
    <div className="text-xs tracking-[0.35em] text-slate-500">
      TICKET INFORMATION
    </div>

    <h1 className="mt-5 font-serif text-4xl leading-tight tracking-tight md:text-6xl">
      チケット販売ページ
    
    </h1>

    <div className="mx-auto mt-6 h-px w-24 bg-slate-300/70" />

    <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
      公演ごとに販売ページが異なるため、全国4公演のリンクを本ページにまとめております。
      <br/>
      下記より会場を選択のうえ、購入ページへお進みください。
    </p>

    {/* 会場リンク：クリックで販売ページへ */}
   <div className="mt-6 grid gap-5 md:grid-cols-2">
            {STOPS.map((s) => (
              <article
                key={s.id}
                id={s.id}
                className="overflow-hidden rounded-2xl border bg-white"
              >
                <div className="relative aspect-[12/9] w-full">
                  <Image
                    src={s.imageSrc}
                    alt={`${s.city} 公演`}
                    fill
                    className="object-cover"
                    priority={s.id === "tokyo"} // 最初の1枚だけ優先読み込み
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm text-slate-500">{s.city}</div>
                      <h3 className="mt-1 text-lg font-semibold">{s.venue}</h3>
                      <div className="mt-1 text-sm text-slate-700">
                        {s.dateLabel}
                      </div>
                      {s.note ? (
                        <div className="mt-2 text-xs text-slate-500">
                          {s.note}
                        </div>
                      ) : null}
                    </div>

                    <a
                      href={s.ticketUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 rounded-xl bg-slate-900 px-4 py-2 text-sm text-white hover:opacity-90"
                    >
                      購入ページへ
                    </a>
                  </div>

                  
                </div>
              </article>
            ))}
          </div>

    <p className="mt-8 text-xs text-slate-500">
      ※リンク先は外部サイトです。購入方法・手数料等は各販売ページをご確認ください。
    </p>
  </div>
</section>
      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-slate-600">
          © {new Date().getFullYear()} Duo Ribbon
        </div>
      </footer>
    </main>
  );
}
