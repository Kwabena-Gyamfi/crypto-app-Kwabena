import { Link } from "react-router-dom";
import type { MarketRow } from "../../data/markets";

type MarketTableProps = {
  rows: MarketRow[];
  title: string;
  showViewAll?: boolean;
};

function MarketTable({ rows, title, showViewAll = false }: MarketTableProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 px-6 py-4">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        {showViewAll ? (
          <Link to="/explore" className="text-sm font-semibold text-[#0052ff]">
            View all
          </Link>
        ) : null}
      </div>
      <div className="grid grid-cols-1 gap-0 overflow-hidden">
        <div className="hidden grid-cols-[2fr_1fr_1fr_1fr] gap-4 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-slate-500 md:grid">
          <span>Asset</span>
          <span>Price</span>
          <span>Change</span>
          <span>Market Cap</span>
        </div>
        {rows.map((row) => (
          <Link
            key={row.id}
            to={`/assets/${row.id}`}
            className="grid grid-cols-1 gap-4 border-t border-slate-200 px-6 py-4 transition hover:bg-slate-50 md:grid-cols-[2fr_1fr_1fr_1fr]"
          >
            <div className="flex items-center gap-3">
              <img src={row.icon} alt="" className="h-10 w-10" />
              <div>
                <p className="text-sm font-semibold text-slate-900">{row.name}</p>
                <p className="text-xs text-slate-500">{row.symbol}</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-slate-700">{row.price}</div>
            <div
              className={`flex items-center text-sm font-semibold ${
                row.trend === "up" ? "text-emerald-500" : "text-rose-500"
              }`}
            >
              {row.change}
            </div>
            <div className="flex items-center text-sm text-slate-600">{row.marketCap}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MarketTable;
