import { useEffect, useRef, useState } from "react";
import Layout from "../../components/dashboard/Layout";
import RightPanel from "../../components/dashboard/RightPanel";

const filters = ["Product", "Activity", "Status", "Asset", "Date"];
const productOptions = ["Crypto", "Cash", "Stocks", "Predictions", "Derivatives"];
const activityOptions = [
  "Advanced trade",
  "Buys",
  "Sells",
  "Converts",
  "Sends",
  "Receives",
  "Deposits",
  "Withdrawals",
  "Transfers",
  "Staking",
  "Staking rewards",
  "Incentive rewards",
  "USDC rewards",
  "Funding payments",
  "P&L Settlements",
  "Lending",
  "Token sales",
];
const statusOptions = ["Open", "Pending", "Completed", "Canceled"];
const assetOptions = ["BTC", "ETH", "USDC", "SOL", "XRP"];
const dateOptions = [
  "All time",
  "Past 90 days",
  "Past 6 months",
  "Year to date",
  "2025",
  "2024",
  "2023",
  "Custom date range",
];

export default function Transactions() {
  const [activeFilters, setActiveFilters] = useState<Record<string, boolean>>({});
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [productSelection, setProductSelection] = useState("Crypto");
  const [showActivityMenu, setShowActivityMenu] = useState(false);
  const [activitySelection, setActivitySelection] = useState<string[]>([]);
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const [statusSelection, setStatusSelection] = useState<string[]>([]);
  const [showAssetMenu, setShowAssetMenu] = useState(false);
  const [assetSelection, setAssetSelection] = useState<string[]>([]);
  const [showDateMenu, setShowDateMenu] = useState(false);
  const [dateSelection, setDateSelection] = useState("All time");
  const productTriggerRef = useRef<HTMLButtonElement | null>(null);
  const productMenuRef = useRef<HTMLDivElement | null>(null);
  const activityTriggerRef = useRef<HTMLButtonElement | null>(null);
  const activityMenuRef = useRef<HTMLDivElement | null>(null);
  const statusTriggerRef = useRef<HTMLButtonElement | null>(null);
  const statusMenuRef = useRef<HTMLDivElement | null>(null);
  const assetTriggerRef = useRef<HTMLButtonElement | null>(null);
  const assetMenuRef = useRef<HTMLDivElement | null>(null);
  const dateTriggerRef = useRef<HTMLButtonElement | null>(null);
  const dateMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!showProductMenu) return;
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        productMenuRef.current?.contains(target) ||
        productTriggerRef.current?.contains(target)
      ) {
        return;
      }
      setShowProductMenu(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showProductMenu]);

  useEffect(() => {
    if (!showActivityMenu) return;
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        activityMenuRef.current?.contains(target) ||
        activityTriggerRef.current?.contains(target)
      ) {
        return;
      }
      setShowActivityMenu(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showActivityMenu]);

  useEffect(() => {
    if (!showStatusMenu) return;
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (statusMenuRef.current?.contains(target) || statusTriggerRef.current?.contains(target)) {
        return;
      }
      setShowStatusMenu(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showStatusMenu]);

  useEffect(() => {
    if (!showAssetMenu) return;
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (assetMenuRef.current?.contains(target) || assetTriggerRef.current?.contains(target)) {
        return;
      }
      setShowAssetMenu(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showAssetMenu]);

  useEffect(() => {
    if (!showDateMenu) return;
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dateMenuRef.current?.contains(target) || dateTriggerRef.current?.contains(target)) {
        return;
      }
      setShowDateMenu(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showDateMenu]);

  return (
    <Layout title="Transactions">
      <div className="flex h-full">
        <div className="flex-1 overflow-y-auto">
          <div className="px-8 py-5">
            <div className="mb-8 flex flex-wrap items-center gap-2">
              <button
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                type="button"
                onClick={() => setShowFilterModal(true)}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </button>
              {filters.map((filter) =>
                filter === "Product" ? (
                  <div key={filter} className="relative">
                    <button
                      ref={productTriggerRef}
                      onClick={() => setShowProductMenu((value) => !value)}
                      className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                        activeFilters[filter]
                          ? "border-blue-500 bg-blue-50 text-blue-600"
                          : "border-gray-200 text-gray-700 hover:bg-gray-50"
                      }`}
                      type="button"
                    >
                      {filter}
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {showProductMenu ? (
                      <div
                        ref={productMenuRef}
                        className="absolute left-0 top-full z-20 mt-2 w-64 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg"
                      >
                        <div className="space-y-3">
                          {productOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-900"
                              onClick={() => setProductSelection(option)}
                            >
                              <span>{option}</span>
                              <span
                                className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                                  productSelection === option ? "border-blue-500" : "border-gray-300"
                                }`}
                              >
                                {productSelection === option ? (
                                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                                ) : null}
                              </span>
                            </button>
                          ))}
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                          <button
                            type="button"
                            className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-200"
                            onClick={() => {
                              setProductSelection("Crypto");
                              setActiveFilters((prev) => ({ ...prev, Product: false }));
                            }}
                          >
                            Reset
                          </button>
                          <button
                            type="button"
                            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                            onClick={() => {
                              setActiveFilters((prev) => ({ ...prev, Product: true }));
                              setShowProductMenu(false);
                            }}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : filter === "Activity" ? (
                  <div key={filter} className="relative">
                    <button
                      ref={activityTriggerRef}
                      onClick={() => setShowActivityMenu((value) => !value)}
                      className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                        activeFilters[filter]
                          ? "border-blue-500 bg-blue-50 text-blue-600"
                          : "border-gray-200 text-gray-700 hover:bg-gray-50"
                      }`}
                      type="button"
                    >
                      {filter}
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {showActivityMenu ? (
                      <div
                        ref={activityMenuRef}
                        className="absolute left-0 top-full z-20 mt-2 w-72 rounded-2xl border border-gray-200 bg-white shadow-lg"
                      >
                        <div className="max-h-[420px] overflow-y-auto px-4 py-4">
                          <div className="space-y-3">
                            {activityOptions.map((option) => {
                              const checked = activitySelection.includes(option);
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-900"
                                  onClick={() =>
                                    setActivitySelection((prev) =>
                                      prev.includes(option)
                                        ? prev.filter((item) => item !== option)
                                        : [...prev, option]
                                    )
                                  }
                                >
                                  <span>{option}</span>
                                  <span
                                    className={`flex h-4 w-4 items-center justify-center border ${
                                      checked ? "border-blue-500 bg-blue-500 text-white" : "border-gray-300"
                                    }`}
                                  >
                                    {checked ? (
                                      <svg
                                        className="h-3 w-3"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l3 3 7-7" />
                                      </svg>
                                    ) : null}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3">
                          <button
                            type="button"
                            className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-200"
                            onClick={() => {
                              setActivitySelection([]);
                              setActiveFilters((prev) => ({ ...prev, Activity: false }));
                            }}
                          >
                            Reset
                          </button>
                          <button
                            type="button"
                            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                            onClick={() => {
                              setActiveFilters((prev) => ({ ...prev, Activity: activitySelection.length > 0 }));
                              setShowActivityMenu(false);
                            }}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : filter === "Status" ? (
                  <div key={filter} className="relative">
                    <button
                      ref={statusTriggerRef}
                      onClick={() => setShowStatusMenu((value) => !value)}
                      className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                        activeFilters[filter]
                          ? "border-blue-500 bg-blue-50 text-blue-600"
                          : "border-gray-200 text-gray-700 hover:bg-gray-50"
                      }`}
                      type="button"
                    >
                      {filter}
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {showStatusMenu ? (
                      <div
                        ref={statusMenuRef}
                        className="absolute left-0 top-full z-20 mt-2 w-64 rounded-2xl border border-gray-200 bg-white shadow-lg"
                      >
                        <div className="px-4 py-4">
                          <div className="space-y-3">
                            {statusOptions.map((option) => {
                              const checked = statusSelection.includes(option);
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  className="flex w-full items-center justify-between text-left text-sm font-medium text-gray-900"
                                  onClick={() =>
                                    setStatusSelection((prev) =>
                                      prev.includes(option)
                                        ? prev.filter((item) => item !== option)
                                        : [...prev, option]
                                    )
                                  }
                                >
                                  <span>{option}</span>
                                  <span
                                    className={`flex h-4 w-4 items-center justify-center border ${
                                      checked ? "border-blue-500 bg-blue-500 text-white" : "border-gray-300"
                                    }`}
                                  >
                                    {checked ? (
                                      <svg
                                        className="h-3 w-3"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l3 3 7-7" />
                                      </svg>
                                    ) : null}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3">
                          <button
                            type="button"
                            className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-200"
                            onClick={() => {
                              setStatusSelection([]);
                              setActiveFilters((prev) => ({ ...prev, Status: false }));
                            }}
                          >
                            Reset
                          </button>
                          <button
                            type="button"
                            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                            onClick={() => {
                              setActiveFilters((prev) => ({ ...prev, Status: statusSelection.length > 0 }));
                              setShowStatusMenu(false);
                            }}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : filter === "Asset" ? (
                  <div key={filter} className="relative">
                    <button
                      ref={assetTriggerRef}
                      onClick={() => setShowAssetMenu((value) => !value)}
                      className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                        activeFilters[filter]
                          ? "border-blue-500 bg-blue-50 text-blue-600"
                          : "border-gray-200 text-gray-700 hover:bg-gray-50"
                      }`}
                      type="button"
                    >
                      {filter}
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {showAssetMenu ? (
                      <div
                        ref={assetMenuRef}
                        className="absolute left-0 top-full z-20 mt-2 w-64 rounded-2xl border border-gray-200 bg-white shadow-lg"
                      >
                        <div className="px-4 pt-4">
                          <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-500">
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                              <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" />
                            </svg>
                            <input
                              type="text"
                              placeholder="Search"
                              className="w-full bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
                            />
                          </div>
                        </div>
                        <div className="px-4 pb-4 pt-6 text-center">
                          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                            <div className="grid grid-cols-2 gap-1">
                              {["#facc15", "#38bdf8", "#38bdf8", "#facc15"].map((color) => (
                                <span
                                  key={color}
                                  className="h-3 w-3 rounded-full"
                                  style={{ backgroundColor: color }}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm font-semibold text-gray-900">No results for &quot;&quot;</p>
                          <p className="mt-1 text-xs text-gray-500">
                            Check your spelling or try a new search
                          </p>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3">
                          <button
                            type="button"
                            className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-200"
                            onClick={() => {
                              setAssetSelection([]);
                              setActiveFilters((prev) => ({ ...prev, Asset: false }));
                            }}
                          >
                            Reset
                          </button>
                          <button
                            type="button"
                            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                            onClick={() => {
                              setActiveFilters((prev) => ({ ...prev, Asset: assetSelection.length > 0 }));
                              setShowAssetMenu(false);
                            }}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : filter === "Date" ? (
                  <div key={filter} className="relative">
                    <button
                      ref={dateTriggerRef}
                      onClick={() => setShowDateMenu((value) => !value)}
                      className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                        activeFilters[filter]
                          ? "border-blue-500 bg-blue-50 text-blue-600"
                          : "border-gray-200 text-gray-700 hover:bg-gray-50"
                      }`}
                      type="button"
                    >
                      {filter}
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {showDateMenu ? (
                      <div
                        ref={dateMenuRef}
                        className="absolute left-0 top-full z-20 mt-2 w-72 rounded-2xl border border-gray-200 bg-white shadow-lg"
                      >
                        <div className="px-4 py-3">
                          <div className="space-y-2">
                            {dateOptions.map((option) => {
                              const isSelected = dateSelection === option;
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-50"
                                  onClick={() => setDateSelection(option)}
                                >
                                  <span>{option}</span>
                                  {isSelected ? (
                                    option === "Custom date range" ? (
                                      <svg
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
                                    ) : (
                                      <svg
                                        className="h-4 w-4 text-gray-900"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                    )
                                  ) : option === "Custom date range" ? (
                                    <svg
                                      className="h-4 w-4 text-gray-400"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  ) : null}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3">
                          <button
                            type="button"
                            className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-200"
                            onClick={() => {
                              setDateSelection("All time");
                              setActiveFilters((prev) => ({ ...prev, Date: false }));
                            }}
                          >
                            Reset
                          </button>
                          <button
                            type="button"
                            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                            onClick={() => {
                              setActiveFilters((prev) => ({ ...prev, Date: true }));
                              setShowDateMenu(false);
                            }}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <button
                    key={filter}
                    onClick={() => {
                      setActiveFilters((prev) => ({ ...prev, [filter]: !prev[filter] }));
                      setShowProductMenu(false);
                      setShowActivityMenu(false);
                      setShowStatusMenu(false);
                      setShowAssetMenu(false);
                      setShowDateMenu(false);
                    }}
                    className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      activeFilters[filter]
                        ? "border-blue-500 bg-blue-50 text-blue-600"
                        : "border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                    type="button"
                  >
                    {filter}
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )
              )}
            </div>

            <div className="flex flex-col items-center py-16">
              <div className="relative mb-4 h-20 w-28">
                <div className="absolute right-8 top-0 flex gap-1">
                  {["#f7b500", "#22d3ee", "#22d3ee", "#d1d5db"].map((color) => (
                    <div key={color} className="h-7 w-7 rounded-full" style={{ background: color }} />
                  ))}
                </div>
                <div className="absolute bottom-0 left-8 flex gap-1">
                  {["#d1d5db", "#22d3ee", "#22d3ee", "#f7b500"].map((color) => (
                    <div key={color} className="h-7 w-7 rounded-full" style={{ background: color }} />
                  ))}
                </div>
                <div className="absolute right-10 top-2 text-lg text-gray-600">→</div>
                <div className="absolute bottom-2 left-10 text-lg text-gray-600">→</div>
              </div>
              <p className="mb-1 font-semibold text-gray-900">No transactions found</p>
              <p className="text-sm text-gray-500">
                Try adjusting your filters to find the transaction you are looking for
              </p>
            </div>
          </div>
        </div>
        <RightPanel />
      </div>
      {showFilterModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <span className="text-sm font-semibold text-gray-900">All filters</span>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
                type="button"
                onClick={() => setShowFilterModal(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                { label: "Product", value: "All" },
                { label: "Activity", value: "All" },
                { label: "Status", value: "All" },
                { label: "Asset", value: "All" },
                { label: "Date", value: "All time" },
              ].map((item) => (
                <button
                  key={item.label}
                  className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-gray-50"
                  type="button"
                >
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.value}</p>
                  </div>
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
            <div className="flex items-center justify-end gap-3 border-t border-gray-100 px-5 py-4">
              <button
                className="rounded-full bg-gray-100 px-5 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200"
                type="button"
                onClick={() => setActiveFilters({})}
              >
                Reset all
              </button>
              <button
                className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                type="button"
                onClick={() => setShowFilterModal(false)}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </Layout>
  );
}
