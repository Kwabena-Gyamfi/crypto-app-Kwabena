import { useState } from "react";
import AdvancedLayout from "../../components/dashboard/AdvancedLayout";

export function AdvancedPortfolio() {
  const [tab, setTab] = useState("Overview");

  return (
    <AdvancedLayout title="Portfolio">
      <div className="flex h-full overflow-hidden">
        <div className="w-72 flex-shrink-0 space-y-4 overflow-y-auto border-r border-gray-800 p-4">
          <div className="rounded-xl bg-gray-800 p-4">
            <p className="mb-1 text-sm font-semibold text-white">Introducing portfolios</p>
            <p className="mb-3 text-xs text-gray-400">Segment your assets and manage different strategies.</p>
            <button className="rounded-lg bg-gray-700 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-gray-600" type="button">
              Create portfolio
            </button>
          </div>
          <div className="rounded-xl bg-gray-800 p-4">
            <p className="mb-1 text-sm font-semibold text-white">Perpetuals Boosted USDC rewards</p>
            <p className="mb-3 text-xs text-gray-400">Increase your open positions to earn up to 12% APY.</p>
            <div className="mb-2 flex items-center gap-2">
              <div>
                <p className="text-xs text-gray-500">Current level</p>
                <p className="text-sm font-bold text-green-400">3.35% APY</p>
              </div>
              <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div>
                <p className="text-xs text-gray-500">Next level</p>
                <p className="text-sm font-bold text-white">5.25% APY</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">You are 100,000 USDC away from getting 5.25% APY</p>
          </div>
          <div className="rounded-xl bg-gray-800 p-4">
            <p className="mb-1 text-sm font-semibold text-white">VIP status match</p>
            <p className="mb-3 text-xs text-gray-400">
              Fast track to VIP by letting us know your trading volume on another exchange
            </p>
            <button className="flex items-center gap-1 text-xs font-medium text-blue-400 hover:underline" type="button">
              Apply now →
            </button>
          </div>
          <div className="rounded-xl bg-gray-800 p-4">
            <p className="mb-1 text-sm font-semibold text-white">Refer friends and earn</p>
            <p className="mb-3 text-xs text-gray-400">Invite your friends and earn 30% of all fees generated</p>
            <button className="flex items-center gap-1 text-xs font-medium text-blue-400 hover:underline" type="button">
              Refer a friend →
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <p className="mb-1 text-xs text-gray-500">Total balance</p>
              <p className="text-3xl font-bold text-white">GHS 0.00</p>
            </div>
            <button className="text-gray-500 hover:text-gray-300" type="button">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div className="mb-5 flex gap-2">
            {["Deposit", "Withdraw", "Transfer", "Convert"].map((item, index) => (
              <button
                key={item}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                  index === 0 ? "bg-white text-gray-900 hover:bg-gray-100" : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mb-5 flex gap-4 border-b border-gray-800">
            {["Overview", "Transactions", "Fees", "INT 1"].map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`border-b-2 pb-3 text-sm font-medium transition-colors ${
                  tab === item ? "border-blue-500 text-white" : "border-transparent text-gray-500 hover:text-gray-300"
                }`}
                type="button"
              >
                {item}
                {item === "INT 1" ? (
                  <span className="ml-1 rounded-full bg-blue-600 px-1.5 text-xs text-white">1</span>
                ) : null}
              </button>
            ))}
          </div>

          <div className="mb-6">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-white">
                Cash <span className="font-normal text-gray-400">GHS 0.00</span>
              </p>
              <button className="text-gray-500 hover:text-gray-300" type="button">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800 text-xs text-gray-500">
                  <th className="py-2 text-left font-medium">Name</th>
                  <th className="py-2 text-left font-medium">Balance</th>
                  <th className="py-2 text-left font-medium">Allocation</th>
                  <th className="py-2 text-left font-medium">All Re</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="flex items-center gap-2 py-3 text-white">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      $
                    </div>
                    USDC <span className="text-xs text-green-400">3.35% APY</span>
                  </td>
                  <td className="py-3 text-white">GHS 0.00</td>
                  <td className="py-3 text-gray-500">-</td>
                  <td className="py-3 text-gray-500">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-6">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-white">
                Derivatives <span className="font-normal text-gray-400">GHS 0.00</span>
              </p>
              <button className="rounded-lg bg-gray-700 px-3 py-1 text-xs text-white hover:bg-gray-600" type="button">
                Trade
              </button>
            </div>
            <table className="w-full text-xs text-gray-500">
              <thead>
                <tr className="border-b border-gray-800">
                  {["Name", "Amount", "Avg entry", "Margin ratio", "Initial margin", "TP/SL", "Funding", "P&L", "Actions"].map((item) => (
                    <th key={item} className="py-2 text-left font-medium">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={9} className="py-8 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <div key={i} className="flex h-4 w-4 items-center justify-center rounded bg-gray-700">
                            <div className="h-2 w-2 rounded bg-gray-600" />
                          </div>
                        ))}
                      </div>
                      <p className="text-gray-600">You have no open derivatives positions</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">
                Crypto <span className="font-normal text-gray-400">GHS 0.00</span>
              </p>
              <div className="flex gap-2">
                <button className="rounded-lg bg-gray-700 px-3 py-1 text-xs text-white hover:bg-gray-600" type="button">
                  Trade
                </button>
                <button className="text-gray-500 hover:text-gray-300" type="button">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdvancedLayout>
  );
}

export function AdvancedOrders() {
  const [tab, setTab] = useState("Orders");

  return (
    <AdvancedLayout title="Order management">
      <div className="flex h-full flex-col bg-gray-950">
        <div className="flex gap-4 border-b border-gray-800 px-6 pt-4">
          {["Orders", "Fills"].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`border-b-2 pb-3 text-sm font-medium transition-colors ${
                tab === item ? "border-blue-500 text-white" : "border-transparent text-gray-500 hover:text-gray-300"
              }`}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 border-b border-gray-800 px-6 py-3">
          <div className="flex flex-shrink-0 items-center gap-2 rounded-lg bg-gray-800 px-3 py-2 text-sm text-gray-400">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            Select an asset or market
          </div>
          {["All instruments", "All types", "All sides", "All statuses"].map((filter) => (
            <button
              key={filter}
              className="flex items-center gap-1 rounded-full bg-gray-800 px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-700"
              type="button"
            >
              {filter}
              <svg className="h-3 w-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          ))}
          <div className="ml-auto flex gap-2">
            <button className="rounded-lg bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600" type="button">
              Visit statements
            </button>
            <button className="rounded-lg bg-red-900 px-4 py-2 text-sm font-medium text-red-300 hover:bg-red-800" type="button">
              Cancel all
            </button>
          </div>
        </div>

        <div className="grid grid-cols-9 border-b border-gray-800 px-6 py-2 text-xs text-gray-500">
          {["Time Updated", "Name", "Type", "Side", "Price", "Amount", "% Filled", "TP/SL", "Total", "Status"].map((item) => (
            <span key={item} className="font-medium">
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="mb-3 flex gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex h-6 w-6 items-center justify-center rounded bg-gray-800">
                <div className="h-3 w-3 rounded bg-gray-700" />
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">No orders</p>
        </div>
      </div>
    </AdvancedLayout>
  );
}

export function AdvancedReferral() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://advanced.coinbase.com/join/TUK7QYJ";

  const copy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AdvancedLayout title="Referral program">
      <div className="flex h-full overflow-hidden">
        <div className="flex flex-1 flex-col items-center justify-center overflow-y-auto p-8">
          <div className="max-w-lg text-center">
            <div className="relative mx-auto mb-6 h-24 w-24">
              <div className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              {["top-0 left-2", "bottom-0 right-2", "top-2 right-0"].map((pos, index) => (
                <div key={pos} className={`absolute ${pos} h-3 w-3`}>
                  ✦
                </div>
              ))}
            </div>
            <h1 className="mb-3 text-2xl font-bold text-white">Invite friends and earn 30% of their fees</h1>
            <p className="mb-1 text-sm text-gray-400">
              Refer friends to Coinbase Advanced and earn 30% of all fees generated from new and existing users.{" "}
              <button className="text-blue-400 hover:underline" type="button">
                See terms
              </button>
            </p>
            <div className="mt-6 text-left">
              <p className="mb-2 text-sm text-gray-400">Your referral link</p>
              <div className="flex gap-3">
                <div className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3">
                  <p className="truncate font-mono text-sm text-gray-400">{referralLink}</p>
                </div>
                <button
                  onClick={copy}
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                  type="button"
                >
                  {copied ? "Copied!" : "Copy link"}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="9" y="9" width="13" height="13" rx="2" strokeWidth={1.8} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-64 flex-shrink-0 border-l border-gray-800 p-6">
          <div className="mb-6">
            <p className="mb-1 text-xs text-gray-500">Your total rewards</p>
            <p className="text-2xl font-bold text-white">
              0.00 <span className="text-base font-normal text-gray-400">USDC</span>
            </p>
            <p className="mt-1 text-xs text-gray-500">Share your referral link and start earning.</p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Referral summary</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Total signups</span>
                <span className="text-white">0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-1 text-gray-400">
                  Total volume <button className="text-gray-600" type="button">ⓘ</button>
                </span>
                <span className="text-white">$0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdvancedLayout>
  );
}
