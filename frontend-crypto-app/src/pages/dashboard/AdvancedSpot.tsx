import { useState } from "react";
import AdvancedLayout from "../../components/dashboard/AdvancedLayout";
import { advancedOrderBook } from "../../data/mockData";

function MiniCandleChart() {
  const candles = [
    { o: 67000, h: 67200, l: 66800, c: 67100 },
    { o: 67100, h: 67400, l: 66900, c: 67300 },
    { o: 67300, h: 67800, l: 67200, c: 67600 },
    { o: 67600, h: 68200, l: 67500, c: 68100 },
    { o: 68100, h: 68300, l: 67700, c: 67900 },
    { o: 67900, h: 68100, l: 67600, c: 67700 },
    { o: 67700, h: 67900, l: 67400, c: 67500 },
    { o: 67500, h: 67800, l: 67200, c: 67600 },
    { o: 67600, h: 67900, l: 67400, c: 67520 },
  ];
  const minP = 66700;
  const maxP = 68400;
  const range = maxP - minP;
  const w = 60;
  const h = 100;

  return (
    <svg viewBox="0 0 540 100" className="h-full w-full">
      {candles.map((c, i) => {
        const x = i * w + 10;
        const up = c.c >= c.o;
        const color = up ? "#22c55e" : "#ef4444";
        const bodyTop = h - ((Math.max(c.o, c.c) - minP) / range) * h;
        const bodyBot = h - ((Math.min(c.o, c.c) - minP) / range) * h;
        const wickTop = h - ((c.h - minP) / range) * h;
        const wickBot = h - ((c.l - minP) / range) * h;
        return (
          <g key={i}>
            <line x1={x + 20} y1={wickTop} x2={x + 20} y2={wickBot} stroke={color} strokeWidth="1.5" />
            <rect x={x + 8} y={bodyTop} width="24" height={Math.max(2, bodyBot - bodyTop)} fill={color} rx="1" />
          </g>
        );
      })}
    </svg>
  );
}

function Ticker() {
  const [prices] = useState([
    { sym: "POLS-USD", price: "$0.0774", chg: "+35.08%" },
    { sym: "SQD-USD", price: "$0.0393", chg: "+17.31%" },
    { sym: "FARM-USD", price: "$14.06", chg: "+14.59%" },
    { sym: "PERP-USD", price: "$0.0477", chg: "+13.57%" },
    { sym: "MATH-USD", price: "$0.0298", chg: "+10.78%" },
    { sym: "NOICE-USD", price: "$0.0000511", chg: "+9.05%" },
    { sym: "KITE-USD", price: "$0.30670", chg: "+9.34%" },
  ]);

  return (
    <div className="flex items-center gap-6 overflow-hidden whitespace-nowrap">
      <span className="text-xs font-medium text-gray-500">Gainers</span>
      {prices.map((price) => (
        <span key={price.sym} className="text-xs text-gray-400">
          {price.sym} <span className="text-white">{price.price}</span>{" "}
          <span className="text-green-400">{price.chg}</span>
        </span>
      ))}
    </div>
  );
}

export default function AdvancedSpot() {
  const [orderType, setOrderType] = useState("Limit");
  const [side, setSide] = useState("Buy");
  const [price, setPrice] = useState("67,519.99");
  const [amount, setAmount] = useState("");
  const [chartTab, setChartTab] = useState("Price chart");
  const [timeframe, setTimeframe] = useState("5m");
  const [bottomTab, setBottomTab] = useState("Open orders");

  return (
    <AdvancedLayout title="">
      <div className="flex h-full flex-col bg-gray-950">
        <div className="flex flex-shrink-0 items-center gap-6 border-b border-gray-800 px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">₿</div>
            <button className="flex items-center gap-1 text-sm font-semibold text-white" type="button">
              BTC-USDC
              <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-yellow-400" type="button">
              ★
            </button>
          </div>
          <div className="flex gap-6 text-xs text-gray-400">
            <div>
              <span className="mr-1 text-gray-500">Last Price (24H)</span>
              <span className="font-medium text-white">$67,520.00</span>{" "}
              <span className="text-red-400">-0.78%</span>
            </div>
            <div>
              <span className="mr-1 text-gray-500">24H Volume</span>
              <span className="text-white">$219,311,322.05</span>
            </div>
            <div>
              <span className="mr-1 text-gray-500">24H High</span>
              <span className="text-white">$68,201.16</span>
            </div>
            <div>
              <span className="mr-1 text-gray-500">24H Low</span>
              <span className="text-white">$66,541.97</span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="flex flex-1 flex-col overflow-hidden border-r border-gray-800">
            <div className="flex flex-shrink-0 items-center gap-4 border-b border-gray-800 px-4 py-2">
              {["Price chart", "Depth chart", "Market info"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setChartTab(tab)}
                  className={`border-b-2 pb-1 text-xs font-medium transition-colors ${
                    chartTab === tab ? "border-blue-500 text-white" : "border-transparent text-gray-500 hover:text-gray-300"
                  }`}
                  type="button"
                >
                  {tab}
                </button>
              ))}
              <button className="ml-auto text-gray-500 hover:text-gray-300" type="button">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>

            <div className="flex flex-shrink-0 items-center gap-1 border-b border-gray-800 px-4 py-1.5">
              {["1m", "30m", "1h", "D", "W", "M"].map((time) => (
                <button
                  key={time}
                  onClick={() => setTimeframe(time)}
                  className={`rounded px-2 py-0.5 text-xs font-medium transition-colors ${
                    timeframe === time ? "bg-gray-700 text-white" : "text-gray-500 hover:text-gray-300"
                  }`}
                  type="button"
                >
                  {time}
                </button>
              ))}
              <span className="mx-1 text-gray-700">|</span>
              <span className="text-xs font-medium text-gray-500">5m</span>
              <span className="mx-1 text-gray-700">|</span>
              <button className="text-xs text-gray-500 hover:text-gray-300" type="button">
                Indicators
              </button>
            </div>

            <div className="relative flex-1 overflow-hidden bg-gray-950">
              <div className="absolute left-3 top-2 z-10 text-xs text-gray-500">
                O67,128.12 H67,128.44 L67,036.35 C67,048.37 -79.75 (-0.12%) VOL 7.1
              </div>
              <div className="h-full w-full pt-8">
                <MiniCandleChart />
              </div>
              <div className="absolute right-0 top-0 bottom-0 flex w-16 flex-col justify-around pr-2 text-right">
                {[68200, 68000, 67800, 67600, 67400, 67200, 67000, 66800].map((level) => (
                  <span key={level} className="text-xs text-gray-600">
                    {level.toLocaleString()}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-2 right-20 text-xs text-gray-600">11:50:13 (UTC)</div>
            </div>

            <div className="flex flex-shrink-0 items-center gap-4 border-t border-gray-800 px-4 py-2">
              {["6M", "3M", "1M", "5D", "1D", "4H", "1H"].map((range) => (
                <button key={range} className="text-xs text-gray-500 hover:text-gray-300" type="button">
                  {range}
                </button>
              ))}
            </div>

            <div className="flex-shrink-0 border-t border-gray-800">
              <div className="flex items-center gap-4 border-b border-gray-800 px-4 py-2">
                {["Open orders", "Order history", "Positions", "Assets", "Trade history"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setBottomTab(tab)}
                    className={`border-b-2 pb-1 text-xs font-medium transition-colors ${
                      bottomTab === tab
                        ? "border-blue-500 text-blue-400"
                        : "border-transparent text-gray-500 hover:text-gray-300"
                    }`}
                    type="button"
                  >
                    {tab}
                  </button>
                ))}
                <div className="ml-auto flex gap-3">
                  <button className="text-xs text-red-400 hover:text-red-300" type="button">
                    Cancel all
                  </button>
                  <button className="text-xs text-blue-400 hover:text-blue-300" type="button">
                    View all
                  </button>
                </div>
              </div>
              <div className="flex min-h-20 flex-col items-center justify-center px-4 py-4 text-sm text-gray-600">
                <div className="mb-2 flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex h-5 w-5 items-center justify-center rounded bg-gray-700">
                      <div className="h-2 w-2 rounded bg-gray-600" />
                    </div>
                  ))}
                </div>
                No orders
              </div>
            </div>
          </div>

          <div className="flex w-48 flex-shrink-0 flex-col border-r border-gray-800">
            <div className="flex items-center justify-between border-b border-gray-800 px-3 py-2">
              <div className="flex gap-2">
                <button className="text-xs font-medium text-white" type="button">
                  Order book
                </button>
                <button className="text-xs text-gray-500" type="button">
                  Recent trades
                </button>
              </div>
              <button className="text-gray-600 hover:text-gray-400" type="button">
                •••
              </button>
            </div>
            <div className="flex items-center gap-2 border-b border-gray-800 px-3 py-1.5">
              <select className="rounded border border-gray-700 bg-gray-800 px-2 py-1 text-xs text-white">
                <option>0.01</option>
                <option>0.1</option>
                <option>1</option>
              </select>
              <select className="flex-1 rounded border border-gray-700 bg-gray-800 px-2 py-1 text-xs text-white">
                <option>BTC</option>
              </select>
            </div>
            <div className="flex justify-between border-b border-gray-800 px-3 py-1">
              <span className="text-xs text-gray-500">Price (USD)</span>
              <span className="text-xs text-gray-500">Amount</span>
              <span className="text-xs text-gray-500">Total</span>
            </div>
            <div className="flex-1 overflow-y-auto">
              {advancedOrderBook.map((row, index) => (
                <div key={`a${index}`} className="flex cursor-pointer justify-between px-3 py-0.5 hover:bg-gray-800">
                  <span className="text-xs font-mono text-red-400">{row.price}</span>
                  <span className="text-xs font-mono text-gray-300">{row.amount}</span>
                  <span className="text-xs font-mono text-gray-300">{row.total}</span>
                </div>
              ))}
              <div className="flex items-center justify-between border-y border-gray-800 px-3 py-2">
                <span className="text-sm font-bold text-green-400">67,520.00</span>
                <span className="text-xs text-gray-500">Spread 0.01</span>
              </div>
              {advancedOrderBook.map((row, index) => (
                <div key={`b${index}`} className="flex cursor-pointer justify-between px-3 py-0.5 hover:bg-gray-800">
                  <span className="text-xs font-mono text-green-400">
                    {row.price
                      .replace("528", "519")
                      .replace("527", "518")
                      .replace("526", "517")
                      .replace("525", "516")
                      .replace("524", "515")
                      .replace("523", "514")
                      .replace("522", "513")
                      .replace("521", "512")
                      .replace("520", "511")}
                  </span>
                  <span className="text-xs font-mono text-gray-300">{row.amount}</span>
                  <span className="text-xs font-mono text-gray-300">{row.total}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-56 flex-shrink-0 flex-col bg-gray-950">
            <div className="flex border-b border-gray-800">
              <button
                onClick={() => setSide("Buy")}
                className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                  side === "Buy" ? "border-b-2 border-green-400 text-green-400" : "text-gray-500 hover:text-gray-300"
                }`}
                type="button"
              >
                Buy
              </button>
              <button
                onClick={() => setSide("Sell")}
                className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                  side === "Sell" ? "border-b-2 border-red-400 text-red-400" : "text-gray-500 hover:text-gray-300"
                }`}
                type="button"
              >
                Sell
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3">
              <div className="mb-4 flex gap-1">
                {["Limit", "Market", "Stop Limit"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setOrderType(type)}
                    className={`border-b-2 pb-1 text-xs font-medium transition-colors ${
                      orderType === type ? "border-blue-500 text-white" : "border-transparent text-gray-500 hover:text-gray-300"
                    }`}
                    type="button"
                  >
                    {type}
                  </button>
                ))}
                <button className="ml-auto text-gray-500 hover:text-gray-300" type="button">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="mb-1 flex justify-between text-xs text-gray-500">
                    <span>Available (USDC)</span>
                    <span>
                      0 <button className="text-blue-400" type="button">⊕</button>
                    </span>
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-xs text-gray-500">Limit price</p>
                  <div className="flex items-center rounded-lg border border-gray-700 bg-gray-800 px-3 py-2">
                    <input
                      value={price}
                      onChange={(event) => setPrice(event.target.value)}
                      className="w-0 flex-1 bg-transparent font-mono text-xs text-white outline-none"
                    />
                    <span className="ml-2 whitespace-nowrap text-xs text-gray-400">MID | BID</span>
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-xs text-gray-500">Amount</p>
                  <div className="flex items-center rounded-lg border border-gray-700 bg-gray-800 px-3 py-2">
                    <input
                      value={amount}
                      onChange={(event) => setAmount(event.target.value)}
                      placeholder="0.00"
                      className="w-0 flex-1 bg-transparent font-mono text-xs text-white outline-none placeholder:text-gray-600"
                    />
                    <span className="ml-2 text-xs text-gray-400">USDC</span>
                  </div>
                  <p className="mt-0.5 text-right text-xs text-gray-600">≈0 BTC</p>
                </div>

                <input type="range" min="0" max="100" defaultValue="0" className="w-full accent-blue-500" />

                <div className="space-y-2">
                  <label className="flex cursor-pointer items-center gap-2">
                    <input type="checkbox" className="rounded accent-blue-500" />
                    <span className="text-xs text-gray-400">Post only</span>
                  </label>
                  <div className="flex items-center justify-between">
                    <label className="flex cursor-pointer items-center gap-2">
                      <input type="checkbox" className="rounded accent-blue-500" />
                      <span className="text-xs text-gray-400">Take profit / Stop loss</span>
                    </label>
                    <select className="rounded border border-gray-700 bg-gray-800 px-1 py-0.5 text-xs text-gray-400">
                      <option>GTC</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1 border-t border-gray-800 pt-3">
                  {[
                    ["Subtotal", "—"],
                    ["Fee", "—"],
                    ["Total", "—"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between text-xs text-gray-500">
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700" type="button">
                  Add funds to continue
                </button>

                <p className="text-center text-xs text-gray-600">
                  Spot trading provided by Coinbase Bermuda Services Limited
                </p>
              </div>

              <div className="mt-4 border-t border-gray-800 pt-3">
                <p className="mb-2 text-xs font-semibold text-gray-400">Balance summary</p>
                <div className="space-y-1">
                  {[
                    ["USDC", "0"],
                    ["BTC", "0"],
                  ].map(([sym, bal]) => (
                    <div key={sym} className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">{sym}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-white">{bal}</span>
                        <button className="text-blue-400 hover:text-blue-300" type="button">
                          ⊕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 border-t border-gray-800 bg-gray-900 px-4 py-1.5">
          <Ticker />
        </div>
      </div>
    </AdvancedLayout>
  );
}
