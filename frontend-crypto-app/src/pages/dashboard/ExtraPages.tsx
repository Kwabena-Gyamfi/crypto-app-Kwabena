import { useState } from "react";
import Layout from "../../components/dashboard/Layout";
import { verificationApps, faqItems } from "../../data/mockData";

export function OnchainVerify() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout title="Verifications">
      <div className="max-w-3xl px-8 py-6">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex-1 max-w-sm">
            <h1 className="mb-3 text-3xl font-bold text-gray-900">
              Verify your wallet to unlock onchain experiences
            </h1>
            <p className="mb-6 text-sm text-gray-500">
              Get benefits that are only available when you verify your wallet with Coinbase.
            </p>
            <button className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700" type="button">
              Get verified
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="relative h-48 w-48 flex-shrink-0">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border-4"
                style={{
                  margin: `${i * 16}px`,
                  borderColor: ["#8b5cf6", "#22d3ee", "#f59e0b", "#f472b6", "#ef4444"][i],
                  opacity: 0.8,
                }}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-8 w-8 rounded-full bg-blue-600" />
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="mb-6 text-xl font-bold text-gray-900">How do I verify?</h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { n: 1, title: "Connect your wallet", desc: 'Click on "Get verified" and we\'ll help you connect your wallet.' },
              { n: 2, title: "Get verified", desc: "Sign a free transaction to verify your wallet onchain." },
              { n: 3, title: "Unlock benefits", desc: "Start using an app that supports Verifications. See below!" },
            ].map((step) => (
              <div key={step.n}>
                <p className="mb-2 text-sm text-gray-400">{step.n}</p>
                <p className="mb-1 font-semibold text-gray-900">{step.title}</p>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="mb-6 text-xl font-bold text-gray-900">Where can I use my verifications?</h2>
          <div className="space-y-4">
            {verificationApps.map((app) => (
              <div
                key={app.name}
                className="flex gap-4 overflow-hidden rounded-2xl border border-gray-200 transition-colors hover:border-gray-300"
              >
                <div
                  className="flex h-24 w-36 flex-shrink-0 items-center justify-center text-sm font-bold text-white"
                  style={{
                    background: app.bg,
                    color:
                      app.bg === "#e8eaf0" || app.bg === "#f8f8f8" || app.bg === "#fff" ? "#333" : "white",
                  }}
                >
                  {app.name.split(" ")[0]}
                </div>
                <div className="flex-1 p-4">
                  <p className="mb-1 font-semibold text-gray-900">{app.name}</p>
                  <p className="mb-2 text-sm text-gray-500">{app.desc}</p>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">Requirements</p>
                  <p className="mb-3 text-xs text-gray-500">{app.req}</p>
                  <button
                    className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                      app.comingSoon
                        ? "cursor-not-allowed border-gray-200 text-gray-400"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                    type="button"
                  >
                    {app.btn} {!app.comingSoon && <span>↗</span>}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 overflow-hidden rounded-2xl border border-gray-200">
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
            <h2 className="font-semibold text-gray-900">Frequently asked questions</h2>
          </div>
          {faqItems.map((question, index) => (
            <div key={question} className="border-b border-gray-100 last:border-0">
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                type="button"
              >
                <span className="text-sm text-gray-800">{question}</span>
                <svg
                  className={`h-4 w-4 text-gray-400 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === index ? (
                <div className="px-6 pb-4 text-sm text-gray-500">
                  This information will be available when you verify your wallet with Coinbase.
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <p className="mb-6 text-xs text-gray-400">
          The content on this page is provided for informational purposes only and is not investment advice. Although
          Coinbase may have financial interests in, or relationships with, one or more of the protocols/services listed
          on this page, such listing is not, and should not be viewed as, an endorsement or guarantee of any type by
          Coinbase.
        </p>

        <div className="flex gap-4 text-xs text-gray-400">
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
    </Layout>
  );
}

export function AdvancedAPI() {
  return (
    <Layout title="Advanced API">
      <div className="flex max-w-4xl items-center justify-between px-12 py-16">
        <div className="max-w-md">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Maximize your trading with Coinbase Advanced API
          </h1>
          <p className="mb-6 text-base text-gray-600">
            Create API keys in Coinbase Developer Platform to connect, build, and trade with Coinbase Advanced API.
          </p>
          <div className="mb-8 space-y-4">
            {[
              {
                title: "Deep liquidity",
                desc: "Maximize your trades in 550+ markets, now with 237 new USDC pairs - all at competitive, volume-based fees.",
              },
              {
                title: "Top-tier execution",
                desc: "Automate market, limit, and stop-limit orders by building with REST API or leverage your preferred trading bot.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
                  <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <button className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700" type="button">
              Create your API key
            </button>
            <button className="font-medium text-blue-600 hover:underline" type="button">
              Learn about Coinbase API
            </button>
          </div>
        </div>

        <div className="relative h-56 w-72 flex-shrink-0">
          <div className="absolute right-0 top-0 h-36 w-56 overflow-hidden rounded-lg bg-gray-200">
            <div className="flex h-6 items-center gap-1.5 bg-blue-600 px-3">
              <div className="h-2 w-2 rounded-full bg-white opacity-60" />
              <div className="h-2 w-2 rounded-full bg-white opacity-60" />
              <div className="h-2 w-2 rounded-full bg-white opacity-60" />
            </div>
            <div className="p-2">
              <svg viewBox="0 0 180 80" className="w-full">
                <polyline points="10,60 50,40 90,55 130,20 170,30" fill="none" stroke="#374151" strokeWidth="2" />
                <polyline points="10,70 50,65 90,50 130,60 170,45" fill="none" stroke="#9ca3af" strokeWidth="1.5" />
                <circle cx="130" cy="20" r="12" fill="#1652f0" />
                <circle cx="130" cy="20" r="6" fill="#22d3ee" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 flex h-16 w-36 items-center gap-3 rounded-lg bg-blue-600 px-4">
            <div className="h-8 w-8 rounded-full bg-yellow-400" />
            <div className="flex-1 space-y-1.5">
              <div className="h-1.5 rounded bg-blue-400" />
              <div className="h-1.5 w-3/4 rounded bg-blue-400" />
            </div>
          </div>
          <div className="absolute bottom-4 right-0 flex h-12 w-36 items-center gap-3 rounded-lg bg-cyan-400 px-4">
            <div className="h-6 w-6 rounded-full bg-blue-900" />
            <div className="flex-1 space-y-1.5">
              <div className="h-1.5 rounded bg-cyan-200" />
              <div className="h-1.5 w-3/4 rounded bg-cyan-200" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
