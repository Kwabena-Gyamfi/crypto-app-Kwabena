import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/dashboard/Layout";
import RightPanel from "../../components/dashboard/RightPanel";
import { cryptoAssets, type CryptoAsset } from "../../data/mockData";

type CryptoIconProps = {
  asset: CryptoAsset;
};

const CryptoIcon = ({ asset }: CryptoIconProps) => (
  <div
    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
    style={{ background: asset.color }}
  >
    {asset.icon}
  </div>
);

export default function DashboardHome() {
  const navigate = useNavigate();
  const [watchlist] = useState<string[]>([]);

  return (
    <Layout title="Home">
      <div className="flex h-full">
        <div className="flex-1 overflow-y-auto">
          <div className="border-b border-gray-100 px-8 py-6">
            <p className="mb-4 text-3xl font-bold text-gray-900">GHS 0.00</p>
            <div className="space-y-3">
              <div
                className="-mx-2 flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-50"
                onClick={() => navigate("/crypto")}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => (event.key === "Enter" ? navigate("/crypto") : null)}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-800">Crypto</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">GHS 0.00</span>
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div
                className="-mx-2 flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-50"
                onClick={() => navigate("/cash")}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => (event.key === "Enter" ? navigate("/cash") : null)}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                    <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-800">Cash</span>
                    <span className="ml-2 text-sm font-medium text-green-600">• 4.08% APY</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-sm font-medium text-blue-600 hover:underline" type="button">
                    Deposit
                  </button>
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-100 px-8 py-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-semibold text-gray-900">Watchlist</h2>
              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50" type="button">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            {watchlist.length === 0 ? (
              <div className="flex flex-col items-center py-8">
                <div className="relative mb-3 h-16 w-16">
                  <div className="absolute bottom-0 left-0 h-10 w-10 rounded-full bg-yellow-400" />
                  <div className="absolute right-2 top-0 h-8 w-8 rounded-full bg-gray-500" />
                  <div className="absolute left-5 top-4 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-blue-600">
                    <span className="text-xs font-bold text-white">+</span>
                  </div>
                </div>
                <p className="mb-1 font-semibold text-gray-900">Build your watchlist</p>
                <p className="mb-4 text-center text-sm text-gray-500">
                  Keep track of crypto prices by adding assets to your watchlist
                </p>
                <button
                  onClick={() => navigate("/watchlist")}
                  className="w-full rounded-xl bg-gray-100 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-200"
                  type="button"
                >
                  Add to watchlist
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                {watchlist.map((id) => {
                  const asset = cryptoAssets.find((item) => item.id === id);
                  return asset ? (
                    <div key={id} className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <CryptoIcon asset={asset} />
                        <span className="text-sm font-medium">{asset.name}</span>
                      </div>
                      <span
                        className={`text-sm font-medium ${asset.change >= 0 ? "text-green-600" : "text-red-500"}`}
                      >
                        {asset.change >= 0 ? "↑" : "↓"} {Math.abs(asset.change)}%
                      </span>
                    </div>
                  ) : null;
                })}
              </div>
            )}
          </div>

          <div className="border-b border-gray-100 px-8 py-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-gray-900">Crypto</h2>
                <p className="text-sm text-gray-500">Trade millions of assets</p>
              </div>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50"
                onClick={() => navigate("/trade")}
                type="button"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="space-y-3">
              {cryptoAssets.slice(0, 3).map((asset) => (
                <div
                  key={asset.id}
                  className="-mx-2 flex cursor-pointer items-center justify-between rounded-xl px-2 py-2 transition-colors hover:bg-gray-50"
                  onClick={() => navigate(`/asset/${asset.id}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => (event.key === "Enter" ? navigate(`/asset/${asset.id}`) : null)}
                >
                  <div className="flex items-center gap-3">
                    <CryptoIcon asset={asset} />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{asset.name}</p>
                      <p className="text-xs text-gray-500">{asset.tag}</p>
                    </div>
                  </div>
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                    className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                    type="button"
                  >
                    Buy
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate("/trade")}
              className="mt-4 w-full rounded-xl bg-gray-100 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-200"
              type="button"
            >
              Explore all crypto
            </button>
          </div>

          <div className="border-b border-gray-100 px-8 py-5">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-gray-900">Cash</h2>
                <p className="text-sm text-gray-500">
                  Earn <span className="font-medium text-green-600">4.08% APY</span>
                </p>
              </div>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50"
                onClick={() => navigate("/cash")}
                type="button"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <button className="w-full rounded-xl bg-gray-100 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-200" type="button">
              Deposit cash
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 px-8 py-6 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-600">
              Careers
            </a>
            <a href="#" className="hover:text-gray-600">
              Legal & Privacy
            </a>
            <a href="#" className="hover:text-gray-600">
              Accessibility Statement
            </a>
            <span>© 2026 Coinbase</span>
            <button className="flex items-center gap-1 rounded-lg border border-gray-200 px-2 py-1 hover:bg-gray-50" type="button">
              English{" "}
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
        <RightPanel />
      </div>
    </Layout>
  );
}
