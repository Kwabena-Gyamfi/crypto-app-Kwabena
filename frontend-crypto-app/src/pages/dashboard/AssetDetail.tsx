import { useParams } from "react-router-dom";
import { useState } from "react";
import Layout from "../../components/dashboard/Layout";
import RightPanel from "../../components/dashboard/RightPanel";
import { cryptoAssets } from "../../data/mockData";

function MiniSparkline({ up }: { up: boolean }) {
  const pts = up
    ? "10,60 30,50 50,55 70,40 90,45 110,30 130,35 150,20"
    : "10,20 30,30 50,25 70,40 90,35 110,50 130,45 150,60";

  return (
    <svg viewBox="0 0 160 80" className="h-24 w-full">
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={up ? "#22c55e" : "#ef4444"} stopOpacity="0.3" />
          <stop offset="100%" stopColor={up ? "#22c55e" : "#ef4444"} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={`${pts} 150,80 10,80`} fill="url(#sg)" />
      <polyline points={pts} fill="none" stroke={up ? "#22c55e" : "#ef4444"} strokeWidth="2" />
    </svg>
  );
}

export default function AssetDetail() {
  const { id } = useParams<{ id: string }>();
  const asset = cryptoAssets.find((item) => item.id === id) ?? cryptoAssets[0];
  const [tab, setTab] = useState("1D");

  return (
    <Layout title={asset.name} showBack>
      <div className="flex h-full">
        <div className="flex-1 overflow-y-auto">
          <div className="border-b border-gray-100 px-8 py-6">
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold text-white"
                style={{ background: asset.color }}
              >
                {asset.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{asset.name}</h2>
                <p className="text-sm text-gray-500">{asset.symbol}</p>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">${asset.price.toLocaleString()}</p>
            <p className={`mt-1 text-sm font-medium ${asset.change >= 0 ? "text-green-600" : "text-red-500"}`}>
              {asset.change >= 0 ? "↑" : "↓"} {Math.abs(asset.change)}% today
            </p>
          </div>

          <div className="border-b border-gray-100 px-8 py-4">
            <div className="mb-4 flex gap-2">
              {["1H", "1D", "1W", "1M", "1Y", "All"].map((range) => (
                <button
                  key={range}
                  onClick={() => setTab(range)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                    tab === range ? "bg-gray-900 text-white" : "text-gray-500 hover:bg-gray-100"
                  }`}
                  type="button"
                >
                  {range}
                </button>
              ))}
            </div>
            <MiniSparkline up={asset.change >= 0} />
          </div>

          <div className="border-b border-gray-100 px-8 py-5">
            <h3 className="mb-4 text-base font-semibold text-gray-900">Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Market cap", `$${(asset.price * 19700000).toLocaleString()}`],
                ["Volume (24h)", `$${(asset.price * 35000).toLocaleString()}`],
                ["Circulating supply", `19.7M ${asset.symbol}`],
                ["All-time high", `$${(asset.price * 1.34).toLocaleString()}`],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="mb-1 text-xs text-gray-500">{label}</p>
                  <p className="text-sm font-semibold text-gray-900">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="px-8 py-5">
            <h3 className="mb-3 text-base font-semibold text-gray-900">About {asset.name}</h3>
            <p className="text-sm leading-relaxed text-gray-500">
              {asset.name} is one of the world's most well-known cryptocurrencies. It operates on a decentralized
              network using blockchain technology. Transactions are verified by network nodes through cryptography and
              recorded in a distributed public ledger.
            </p>
          </div>
        </div>
        <RightPanel />
      </div>
    </Layout>
  );
}
