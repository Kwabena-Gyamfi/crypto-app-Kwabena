import { useState } from "react";
import Layout from "../../components/dashboard/Layout";
import RightPanel from "../../components/dashboard/RightPanel";

export default function Watchlist() {
  const [activeTab, setActiveTab] = useState<"all" | "crypto">("all");

  const subtitle =
    activeTab === "crypto"
      ? "Keep track of prices by adding assets like Bitcoin and Ethereum to your watchlist"
      : "Keep track of crypto prices by adding assets to your watchlist";

  return (
    <Layout title="Watchlist" showBack>
      <div className="flex h-full">
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="mb-6 flex items-center gap-2">
            <button
              className={`rounded-full px-4 py-2 text-xs font-semibold ${
                activeTab === "all"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
              type="button"
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            <button
              className={`rounded-full px-4 py-2 text-xs font-semibold ${
                activeTab === "crypto"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
              type="button"
              onClick={() => setActiveTab("crypto")}
            >
              Crypto
            </button>
          </div>
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="relative mb-4 h-20 w-20">
              <div className="absolute left-2 top-6 h-10 w-10 rounded-full bg-yellow-400" />
              <div className="absolute right-2 top-2 h-10 w-10 rounded-full bg-gray-300" />
              <div className="absolute left-7 top-9 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-600">
                <span className="text-xs font-bold text-white">+</span>
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-900">Build your watchlist</p>
            <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
          </div>
        </div>
        <RightPanel />
      </div>
    </Layout>
  );
}
