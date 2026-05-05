import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/dashboard/Layout";
import RightPanel from "../../components/dashboard/RightPanel";
import { tradeTabsData } from "../../data/mockData";
import cryptoIcon from "../../assets/category-crypto.svg";
import commoditiesIcon from "../../assets/category-commodities.svg";
import futuresIcon from "../../assets/category-futures.svg";
import perpetualsIcon from "../../assets/category-perpetuals.svg";

const tabs = ["Top volume", "Trending", "Top gainers", "New launches", "Top losers"];

const categoryCards = [
  { label: "Crypto", icon: cryptoIcon },
  { label: "Commodities", icon: commoditiesIcon },
  { label: "Futures", icon: futuresIcon },
  { label: "Perpetuals", icon: perpetualsIcon },
];

export default function Trade() {
  const [activeTab, setActiveTab] = useState("Trending");
  const [watchlisted, setWatchlisted] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

  const toggleWatch = (sym: string) =>
    setWatchlisted((prev) => ({ ...prev, [sym]: !prev[sym] }));

  const tableRows = tradeTabsData[activeTab] ?? tradeTabsData["Top volume"];

  return (
    <Layout title="Trade">
      <div className="flex h-full">
        <div className="flex-1 overflow-y-auto">
          <div className="border-b border-gray-100 px-8 py-5">
            <div className="grid grid-cols-4 gap-3">
              {categoryCards.map((card) => (
                <button
                  key={card.label}
                  className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 text-left transition-colors hover:bg-gray-100"
                  type="button"
                >
                  <div className="flex h-9 w-9 items-center justify-center">
                    <img src={card.icon} alt="" className="h-9 w-9" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{card.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="px-8 py-5">
            <h2 className="mb-4 text-base font-semibold text-gray-900">Crypto</h2>
            <div className="mb-5 flex items-center gap-2 overflow-x-auto pb-1">
              <button className="flex-shrink-0 rounded-lg p-1.5 text-gray-500 hover:bg-gray-100" type="button">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </button>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                  type="button"
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 text-xs text-gray-500">
                    <th className="py-3 text-left font-medium">Name</th>
                    <th className="py-3 text-left font-medium">Market price</th>
                    <th className="py-3 text-left font-medium">Volume</th>
                    <th className="py-3 text-left font-medium">Market cap</th>
                    <th className="py-3 text-left font-medium">Change</th>
                    <th className="py-3" />
                    <th className="py-3" />
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((asset) => (
                    <tr
                      key={asset.symbol}
                      className="cursor-pointer border-b border-gray-50 transition-colors hover:bg-gray-50"
                      onClick={() => navigate(`/asset/${asset.symbol.toLowerCase()}`)}
                    >
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-700">
                            {asset.icon ? <img src={asset.icon} alt={asset.name} className="h-6 w-6" /> : asset.name[0]}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{asset.name}</p>
                            <p className="text-xs text-gray-500">{asset.symbol}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-sm text-gray-800">{asset.price}</td>
                      <td className="py-4 text-sm text-gray-800">{asset.volume}</td>
                      <td className="py-4 text-sm text-gray-800">{asset.marketCap}</td>
                      <td className="py-4">
                        <span className={`text-sm font-medium ${asset.up ? "text-green-600" : "text-red-500"}`}>
                          {asset.up ? "↑" : "↓"} {Math.abs(asset.change)}%
                        </span>
                      </td>
                      <td className="py-4">
                        <button
                          onClick={(event) => event.stopPropagation()}
                          className="rounded-lg px-3 py-1 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-800"
                          type="button"
                        >
                          Buy
                        </button>
                      </td>
                      <td className="py-4">
                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            toggleWatch(asset.symbol);
                          }}
                          className={`transition-colors ${watchlisted[asset.symbol] ? "text-yellow-500" : "text-gray-300 hover:text-gray-500"}`}
                          type="button"
                        >
                          ★
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button className="mt-4 w-full rounded-xl bg-gray-100 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-200" type="button">
              Browse all
            </button>
          </div>

          <div className="flex flex-wrap gap-4 px-8 py-4 text-xs text-gray-400">
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
          </div>
        </div>
        <RightPanel />
      </div>
    </Layout>
  );
}
