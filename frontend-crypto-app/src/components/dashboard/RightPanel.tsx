import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import bitcoinIcon from "../../assets/bitcoin.svg";
import ethereumIcon from "../../assets/ethereum.svg";
import bchIcon from "../../assets/receive-bch.svg";
import etcIcon from "../../assets/receive-etc.svg";
import ltcIcon from "../../assets/receive-ltc.svg";
import solIcon from "../../assets/receive-sol.svg";

type RightPanelProps = {
  showTradePanel?: boolean;
};

export default function RightPanel({ showTradePanel = true }: RightPanelProps) {
  const [tab, setTab] = useState("Buy");
  const [showSendModal, setShowSendModal] = useState(false);
  const [showReceiveModal, setShowReceiveModal] = useState(false);
  const [receiveSearch, setReceiveSearch] = useState("");
  const navigate = useNavigate();
  const receiveAssets = useMemo(
    () => [
      { name: "Bitcoin", symbol: "BTC", icon: bitcoinIcon },
      { name: "Bitcoin Cash", symbol: "BCH", icon: bchIcon },
      { name: "Ethereum", symbol: "ETH", icon: ethereumIcon },
      { name: "Ethereum Classic", symbol: "ETC", icon: etcIcon },
      { name: "Litecoin", symbol: "LTC", icon: ltcIcon },
      { name: "Solana", symbol: "SOL", icon: solIcon },
    ],
    []
  );
  const filteredReceiveAssets = useMemo(() => {
    const query = receiveSearch.trim().toLowerCase();
    if (!query) return receiveAssets;
    return receiveAssets.filter(
      (asset) =>
        asset.name.toLowerCase().includes(query) ||
        asset.symbol.toLowerCase().includes(query)
    );
  }, [receiveAssets, receiveSearch]);

  return (
    <div className="flex w-72 flex-shrink-0 flex-col border-l border-gray-200 bg-white">
      {showTradePanel ? (
        <div className="border-b border-gray-100 p-4">
          <div className="mb-5 flex gap-3">
            {["Buy", "Sell", "Convert"].map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                  tab === item ? "bg-gray-900 text-white" : "text-gray-600 hover:text-gray-900"
                }`}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>

          {tab === "Sell" ? (
            <div className="flex flex-col items-start py-2">
              <p className="text-xl font-semibold text-gray-900">You don’t have anything to sell yet</p>
              <p className="mt-2 text-sm text-gray-500">
                Get started by exploring our inventory of crypto assets
              </p>
              <div className="mt-4 h-20 w-20">
                <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
                  <rect x="12" y="30" width="56" height="56" rx="10" fill="#E2E8F0" />
                  <circle cx="72" cy="60" r="26" fill="#1D4ED8" />
                  <path
                    d="M72 42l6 8-6 8-6-8 6-8Z"
                    fill="white"
                  />
                  <path
                    d="M72 64l6 8-6 8-6-8 6-8Z"
                    fill="white"
                  />
                </svg>
              </div>
              <button
                className="mt-6 w-full rounded-full bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                type="button"
                onClick={() => navigate("/trade")}
              >
                Explore assets
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center py-4">
              <div className="relative mb-3 h-20 w-20">
                <svg viewBox="0 0 80 80" className="h-full w-full" aria-hidden="true">
                  <circle cx="40" cy="40" r="30" fill="#e8f0fe" stroke="#1652f0" strokeWidth="3" />
                  <circle cx="40" cy="40" r="18" fill="#1652f0" />
                  <path d="M30 40 Q40 20 50 40 Q40 60 30 40Z" fill="#f7b500" />
                  <circle cx="40" cy="40" r="6" fill="#1652f0" />
                </svg>
              </div>
              <p className="mb-2 text-base font-bold text-gray-900">Buys Not Supported</p>
              <p className="text-center text-xs leading-relaxed text-gray-500">
                Coinbase does not currently support buys in your country. Subscribe to our blog to be notified when we
                add support for your country!
              </p>
              <button
                className="mt-4 w-full rounded-full bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                type="button"
              >
                Subscribe Now
              </button>
            </div>
          )}
        </div>
      ) : null}
      <div className="space-y-3 p-4">
        <button
          className="flex w-full items-center gap-3 rounded-xl p-2 transition-colors hover:bg-gray-50"
          type="button"
          onClick={() => setShowSendModal(true)}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-800">Send crypto</span>
        </button>
        <button
          className="flex w-full items-center gap-3 rounded-xl p-2 transition-colors hover:bg-gray-50"
          type="button"
          onClick={() => setShowReceiveModal(true)}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-800">Receive crypto</span>
        </button>
      </div>
      {showSendModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <button
                className="text-gray-400 hover:text-gray-600"
                type="button"
                onClick={() => setShowSendModal(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="mt-2 flex flex-col items-center text-center">
              <div className="mb-4 h-24 w-24">
                <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
                  <rect x="18" y="38" width="58" height="52" rx="8" fill="#E6EEF9" />
                  <rect x="46" y="34" width="30" height="10" rx="5" fill="#3B82F6" />
                  <path d="M18 90l22-40h36l-20 40H18z" fill="#2563EB" />
                  <path d="M58 50l18 40H60l-8-16 6-24z" fill="#38BDF8" />
                  <circle cx="80" cy="46" r="16" fill="#7DD3FC" />
                  <circle cx="88" cy="46" r="6" fill="#FACC15" />
                  <circle cx="74" cy="46" r="6" fill="#FACC15" />
                  <path d="M78 58l-6 8" stroke="#0F766E" strokeWidth="3" strokeLinecap="round" />
                  <path d="M86 58l-3 8" stroke="#0F766E" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">You have no crypto to send</h3>
              <p className="mt-1 text-sm text-gray-500">Try buying some to get started.</p>
              <div className="mt-5 flex w-full flex-col gap-3">
                <button
                  className="w-full rounded-full bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                  type="button"
                  onClick={() => {
                    setShowSendModal(false);
                    navigate("/trade");
                  }}
                >
                  Buy
                </button>
                <button
                  className="w-full rounded-full bg-gray-100 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-200"
                  type="button"
                  onClick={() => setShowSendModal(false)}
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {showReceiveModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <button
                className="text-gray-400 hover:text-gray-600"
                type="button"
                onClick={() => setShowReceiveModal(false)}
                aria-label="Close"
              >
                ✕
              </button>
              <h3 className="text-sm font-semibold text-gray-900">Select asset to receive</h3>
              <span className="w-6" />
            </div>
            <div className="mb-3 flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                value={receiveSearch}
                onChange={(event) => setReceiveSearch(event.target.value)}
                className="w-full bg-transparent text-sm text-gray-600 placeholder:text-gray-400 outline-none"
                placeholder="Search"
              />
            </div>
            <p className="px-2 text-xs font-semibold text-gray-500">All</p>
            <div className="mt-2 max-h-64 overflow-y-auto">
              {filteredReceiveAssets.map((asset) => (
                <button
                  key={asset.symbol}
                  className="flex w-full items-center justify-between rounded-xl px-2 py-3 text-left hover:bg-gray-50"
                  type="button"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center">
                      <img src={asset.icon} alt="" className="h-9 w-9" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{asset.name}</p>
                      <p className="text-xs text-gray-500">{asset.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-gray-700">0</p>
                    <p className="text-xs text-gray-500">0 {asset.symbol}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
