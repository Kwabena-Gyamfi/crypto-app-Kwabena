import Layout from "../../components/dashboard/Layout";

export function TokenSales() {
  return (
    <Layout title="Token sales">
      <div className="max-w-2xl px-8 py-6">
        <p className="mb-6 text-sm text-gray-500">Get early access to upcoming tokens launching on Coinbase</p>

        <div className="mb-6 flex items-center gap-6 rounded-2xl border border-gray-200 p-6">
          <div className="relative h-28 w-36 flex-shrink-0">
            <div className="relative mx-auto flex h-20 w-24 items-center justify-center rounded-lg bg-blue-600">
              <div className="absolute -top-2 left-4 h-4 w-4 rounded-sm bg-gray-300" />
              <div className="absolute -top-2 right-4 h-4 w-4 rounded-sm bg-gray-300" />
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <span className="text-xs text-blue-600">★</span>
              </div>
              <div className="absolute -left-3 top-4 h-10 w-10 rounded-full bg-yellow-400" />
              <div className="absolute -right-3 top-4 h-10 w-10 rounded-full bg-yellow-400" />
            </div>
          </div>
          <div className="flex-1">
            <p className="mb-1 text-lg font-bold text-gray-900">Stay tuned</p>
            <p className="mb-3 text-sm text-gray-500">
              We launch new tokens about once a month. Check back or set a reminder so you don't miss out.
            </p>
            <button className="w-full rounded-xl border border-gray-200 py-2.5 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50" type="button">
              Set reminder
            </button>
          </div>
        </div>

        <div className="mb-5 border-t border-gray-100 pt-5">
          <h2 className="mb-4 text-base font-semibold text-gray-900">Previous sales</h2>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">M</div>
              <div>
                <p className="text-sm font-medium text-gray-900">Monad</p>
                <p className="text-xs text-gray-500">MON</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">276.05M USDC</p>
              <p className="text-xs text-gray-500">Total requested</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-5">
          <h2 className="mb-3 text-base font-semibold text-gray-900">Resources</h2>
          {["How token sales work", "FAQs"].map((item) => (
            <div
              key={item}
              className="-mx-2 flex cursor-pointer items-center justify-between rounded-xl px-2 py-4 transition-colors hover:bg-gray-50"
            >
              <span className="text-sm text-gray-800">{item}</span>
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-gray-400">
          Purchasing digital assets comes with risk. Information is provided for informational purposes only and is not
          investment advice.
        </p>

        <div className="pt-4 text-xs text-gray-400">
          <a href="#" className="mr-4 hover:text-gray-600">
            Careers
          </a>
          <a href="#" className="mr-4 hover:text-gray-600">
            Legal & Privacy
          </a>
          <span>© 2026 Coinbase</span>
        </div>
      </div>
    </Layout>
  );
}

export function Cash() {
  return (
    <Layout title="Your cash" showBack>
      <div className="flex h-full">
        <div className="flex-1 overflow-y-auto">
          <div className="border-b border-gray-100 px-8 py-6">
            <p className="mb-4 text-3xl font-bold text-gray-900">GHS 0.00</p>
            <div className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  $
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">USDC</p>
                  <p className="text-xs font-medium text-green-600">3.35% APY</p>
                </div>
              </div>
              <button className="rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50" type="button">
                Deposit
              </button>
            </div>
          </div>

          <div className="border-b border-gray-100 px-8 py-5">
            <h2 className="mb-4 text-base font-semibold text-gray-900">Lending</h2>
            <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-5">
              <div>
                <p className="mb-1 font-semibold text-gray-900">Earn up to 4.08%</p>
                <p className="mb-3 text-sm text-gray-500">Lend your USDC to earn. Withdraw anytime.</p>
                <button className="text-sm font-medium text-blue-600 hover:underline" type="button">
                  Start lending
                </button>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <polyline strokeLinecap="round" strokeLinejoin="round" points="23 6 13.5 15.5 8.5 10.5 1 18" />
                </svg>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-100 px-8 py-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-semibold text-gray-900">USDC rewards</h2>
              <div className="flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-xs font-medium text-green-700">Earning</span>
              </div>
            </div>
            <div className="mb-4 flex items-center justify-between rounded-2xl bg-gray-50 p-5">
              <div>
                <p className="mb-1 font-semibold text-gray-900">Earn 3.35% APY on USDC</p>
                <p className="text-sm text-gray-500">Simply buy and hold with Coinbase to earn rewards.</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <polyline strokeLinecap="round" strokeLinejoin="round" points="23 6 13.5 15.5 8.5 10.5 1 18" />
                </svg>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Reward rate</span>
                <span className="text-sm font-medium text-green-600">3.35% APY</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Pending rewards</span>
                <span className="text-sm font-medium text-gray-800">$0.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Earning</span>
                <div className="flex items-center gap-1">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-xs text-white">$</div>
                  <span className="text-sm text-gray-800">USDC</span>
                  <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 py-5">
            <div className="mb-5 flex items-center justify-between rounded-2xl bg-gray-50 p-5">
              <div>
                <p className="mb-1 font-semibold text-gray-900">Hold cash. Earn Bitcoin.</p>
                <p className="mb-2 text-sm text-gray-500">Bitcoin is now available as a reward for holding USDC.</p>
                <button className="text-sm font-medium text-blue-600 hover:underline" type="button">
                  Learn more
                </button>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-400 text-white font-bold">
                ₿
              </div>
            </div>
            <button className="w-full rounded-full bg-blue-600 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700" type="button">
              Add USDC
            </button>
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

        <div className="w-72 flex-shrink-0 border-l border-gray-200 p-4 space-y-3">
          <button className="flex w-full items-center gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50" type="button">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-800">Send cash</span>
          </button>
          <button className="flex w-full items-center gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50" type="button">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-800">Receive cash</span>
          </button>
        </div>
      </div>
    </Layout>
  );
}

export function Crypto() {
  return (
    <Layout title="Your crypto" showBack>
      <div className="flex h-full">
        <div className="flex-1 overflow-y-auto">
          <div className="border-b border-gray-100 px-8 py-6">
            <p className="text-3xl font-bold text-gray-900">GHS 0.00</p>
          </div>

          <div className="border-b border-gray-100 px-8 py-5">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-base font-semibold text-gray-900">Crypto</h2>
            </div>
            {[
              { name: "Bitcoin", tag: "Most popular", color: "#f7931a", icon: "₿" },
              { name: "Ethereum", tag: "Most popular", color: "#627eea", icon: "Ξ" },
              { name: "Dogecoin", tag: "Most traded today", color: "#c2a633", icon: "Ð" },
            ].map((asset) => (
              <div
                key={asset.name}
                className="-mx-2 flex cursor-pointer items-center justify-between rounded-xl px-2 py-3 transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: asset.color }}>
                    {asset.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{asset.name}</p>
                    <p className="text-xs text-gray-500">{asset.tag}</p>
                  </div>
                </div>
                <button className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200" type="button">
                  Buy
                </button>
              </div>
            ))}
            <button className="mt-3 w-full rounded-xl bg-gray-100 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-200" type="button">
              Explore all crypto
            </button>
          </div>

          <div className="px-8 py-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-gray-900">Staking</h2>
                <p className="text-sm font-medium text-green-600">GHS 0.00 lifetime earnings</p>
              </div>
              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50" type="button">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-5">
              <div>
                <p className="mb-1 font-semibold text-gray-900">Earn up to 14.23% APY</p>
                <p className="mb-3 text-sm text-gray-500">Buy and stake eligible assets to earn rewards</p>
                <button className="text-sm font-medium text-blue-600 hover:underline" type="button">
                  Explore assets
                </button>
              </div>
              <div className="relative h-12 w-12">
                <div className="absolute right-0 top-0 h-8 w-8 rounded-full bg-blue-900" />
                <div className="absolute bottom-0 left-0 h-6 w-6 rounded-full bg-blue-600" />
              </div>
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
          <div className="mb-5 flex gap-3">
            {["Buy", "Sell", "Convert"].map((tab) => (
              <button
                key={tab}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
                  tab === "Buy" ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex flex-col items-center py-4">
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
              <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3" />
              </svg>
            </div>
            <p className="mb-1 text-sm font-bold text-gray-900">Buys Not Supported</p>
            <p className="text-center text-xs text-gray-500">
              Coinbase does not currently support buys in your country.
            </p>
            <button className="mt-3 w-full rounded-full bg-blue-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700" type="button">
              Subscribe Now
            </button>
          </div>
          <div className="mt-4 space-y-3">
            <button className="flex w-full items-center gap-3 rounded-xl p-2 hover:bg-gray-50" type="button">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="5 12 12 5 19 12" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-800">Send crypto</span>
            </button>
            <button className="flex w-full items-center gap-3 rounded-xl p-2 hover:bg-gray-50" type="button">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-800">Receive crypto</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
