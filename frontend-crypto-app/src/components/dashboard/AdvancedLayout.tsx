import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { clearProfile, getProfile, getProfileInitial } from "../../utils/profile";

const advNavItems = [
  {
    path: "/advanced/spot",
    label: "Spot",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    path: "/advanced/derivatives",
    label: "Derivatives",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h8m-4-4v8" />
      </svg>
    ),
  },
  {
    path: "/advanced/portfolio",
    label: "Portfolio",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    path: "/advanced/orders",
    label: "Orders",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
  },
  {
    path: "/advanced/referral",
    label: "Referral",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

type AdvancedLayoutProps = {
  children: ReactNode;
  title: string;
};

export default function AdvancedLayout({ children, title }: AdvancedLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [profileName, setProfileName] = useState("Coinbase User");
  const [profileEmail, setProfileEmail] = useState("user@example.com");
  const [profileInitial, setProfileInitial] = useState("C");

  const handleSignOut = () => {
    clearProfile();
    setShowProfile(false);
    navigate("/");
  };

  useEffect(() => {
    const profile = getProfile();
    setProfileName(profile.name || "Coinbase User");
    setProfileEmail(profile.email || "user@example.com");
    setProfileInitial(getProfileInitial());
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-950 font-sans">
      <aside className="flex w-14 flex-shrink-0 flex-col border-r border-gray-800 bg-gray-950">
        <div className="p-3 pb-4">
          <Link to="/advanced/spot">
            <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden="true">
              <circle cx="16" cy="16" r="16" fill="#1652f0" />
              <path
                d="M16 8a8 8 0 100 16A8 8 0 0016 8zm0 12.8a4.8 4.8 0 110-9.6 4.8 4.8 0 010 9.6z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <nav className="flex-1 space-y-1 px-2">
          {advNavItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                title={item.label}
                className={`flex flex-col items-center gap-0.5 rounded-xl p-2 transition-colors ${
                  active ? "bg-blue-600 text-white" : "text-gray-500 hover:bg-gray-800 hover:text-gray-300"
                }`}
              >
                {item.icon}
                <span className="text-[9px] font-medium">{item.label}</span>
              </Link>
            );
          })}
          <button
            title="More"
            className="flex w-full flex-col items-center gap-0.5 rounded-xl p-2 text-gray-500 hover:bg-gray-800 hover:text-gray-300"
            type="button"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
            </svg>
            <span className="text-[9px] font-medium">More</span>
          </button>
        </nav>
        <div className="border-t border-gray-800 p-2">
          <div className="flex flex-col items-center gap-0.5 p-2">
            <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            <label className="relative mt-1 inline-flex cursor-pointer">
              <input type="checkbox" className="peer sr-only" defaultChecked onChange={() => navigate("/home")} />
              <div className="h-4 w-8 rounded-full bg-blue-600 after:absolute after:left-4 after:top-0.5 after:h-3 after:w-3 after:rounded-full after:bg-white after:content-[''] after:transition-transform peer-checked:bg-blue-600" />
            </label>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex flex-shrink-0 items-center gap-3 border-b border-gray-800 bg-gray-950 px-4 py-2.5">
          <h1 className="text-sm font-semibold text-white">{title}</h1>
          <div className="flex-1" />
          <button className="rounded-lg bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700" type="button">
            Deposit
          </button>
          <button className="rounded-lg bg-gray-700 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-gray-600" type="button">
            Manage funds
          </button>
          <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-800" type="button">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-800" type="button">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01" />
            </svg>
          </button>
          <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-800" type="button">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </button>
          <button
            onClick={() => setShowProfile((prev) => !prev)}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white"
            type="button"
          >
            {profileInitial}
          </button>
        </header>

        <div className="flex-1 overflow-hidden">{children}</div>
      </div>

      {showProfile ? (
        <div className="fixed inset-0 z-50" onClick={() => setShowProfile(false)}>
          <div
            className="absolute right-4 top-12 w-56 rounded-xl border border-gray-700 bg-gray-900 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-b border-gray-700 p-3">
              <p className="text-sm font-semibold text-white">{profileName}</p>
              <p className="text-xs text-gray-400">{profileEmail}</p>
            </div>
            <div className="p-2">
              <button onClick={() => navigate("/home")} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-gray-800" type="button">
                Switch to Coinbase
              </button>
              <button
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-400 hover:bg-gray-800"
                type="button"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
