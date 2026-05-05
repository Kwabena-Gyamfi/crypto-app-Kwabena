import { useState } from "react";
import Layout from "../../components/dashboard/Layout";

const infoItems = [
  { label: "Frequently asked questions" },
  { label: "About Morpho", href: "https://docs.morpho.org/get-started/" },
  { label: "Morpho's Terms of service", href: "https://morpho.org/terms-of-use/" },
  {
    label: "Coinbase's Decentralized protocol agreement",
    href: "https://www.coinbase.com/legal/onchain-integration/terms-of-service",
  },
];

const faqItems = [
  "What is DeFi Lending?",
  "What is Morpho?",
  "What is a vault?",
  "Are my funds locked up?",
  "How do I earn yield?",
  "What determines the lending rate?",
  "What happens if there’s not enough liquidity when I try to withdraw?",
  "What is a bad debt event?",
  "What are the risks of Lending?",
];

export default function Lend() {
  const [showFaqModal, setShowFaqModal] = useState(false);

  return (
    <Layout title="Lending" showBack>
      <div className="flex h-full">
        <div className="flex-1 overflow-y-auto">
          <div className="border-b border-gray-100 px-8 py-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">GHS 0.00</p>
                <p className="mt-1 text-sm text-gray-500">0 USDC</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3" />
                </svg>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="mb-1 text-xs text-gray-500">Lending rate</p>
                <p className="text-sm font-semibold text-green-600">Up to 3.90%</p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="mb-1 text-xs text-gray-500">Lifetime earnings</p>
                <p className="text-sm font-semibold text-gray-400">--</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl bg-gray-50 p-4 transition-colors hover:bg-gray-100">
              <span className="text-sm text-gray-800">
                <span className="font-semibold">GHS 0.00</span> claimable rewards
              </span>
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <div className="px-8 py-5">
            <h2 className="mb-3 text-base font-semibold text-gray-900">More info</h2>
            <div className="space-y-1">
              {infoItems.map((item) => {
                const content = (
                  <>
                    <span className="text-sm text-gray-800">{item.label}</span>
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="-mx-2 flex items-center justify-between rounded-xl px-2 py-4 transition-colors hover:bg-gray-50"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <button
                    key={item.label}
                    className="-mx-2 flex w-full items-center justify-between rounded-xl px-2 py-4 text-left transition-colors hover:bg-gray-50"
                    type="button"
                    onClick={() =>
                      item.label === "Frequently asked questions" ? setShowFaqModal(true) : null
                    }
                  >
                    {content}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex gap-4 px-8 py-4 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-600">
              Careers
            </a>
            <a href="#" className="hover:text-gray-600">
              Legal & Privacy
            </a>
            <span>© 2026 Coinbase</span>
          </div>
        </div>

        <div className="w-72 flex-shrink-0 border-l border-gray-200 p-4">
          <button className="flex w-full items-center gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50" type="button">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-800">Lend</span>
          </button>
        </div>
      </div>
      {showFaqModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <span className="text-sm font-semibold text-gray-900">Lend FAQs</span>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50"
                type="button"
                onClick={() => setShowFaqModal(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="max-h-[420px] overflow-y-auto">
              {faqItems.map((item) => (
                <div key={item} className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                  <span className="text-sm font-medium text-gray-900">{item}</span>
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              ))}
            </div>
            <div className="flex justify-end px-5 py-4">
              <button
                className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                type="button"
                onClick={() => setShowFaqModal(false)}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </Layout>
  );
}
