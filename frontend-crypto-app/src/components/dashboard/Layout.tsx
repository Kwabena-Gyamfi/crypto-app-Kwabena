import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { clearProfile, getProfile, getProfileInitial } from "../../utils/profile";
import DemoWarningBanner from "../common/DemoWarningBanner";

const CoinbaseLogo = () => (
  <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden="true">
    <circle cx="16" cy="16" r="16" fill="#1652f0" />
    <path
      d="M16 8a8 8 0 100 16A8 8 0 0016 8zm0 12.8a4.8 4.8 0 110-9.6 4.8 4.8 0 010 9.6z"
      fill="white"
    />
  </svg>
);

const navItems = [
  {
    path: "/home",
    label: "Home",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    path: "/trade",
    label: "Trade",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <polyline strokeLinecap="round" strokeLinejoin="round" points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline strokeLinecap="round" strokeLinejoin="round" points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    path: "/lend",
    label: "Lend",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
  {
    path: "/transactions",
    label: "Transactions",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
  },
];

type OverlayProps = {
  onClose: () => void;
};

function SeeMoreMenu({ onClose }: OverlayProps) {
  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div
        className="absolute left-40 top-0 bottom-0 w-80 border-l border-gray-200 bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-end px-5 py-4">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700" type="button" aria-label="Close">
            ✕
          </button>
        </div>
        <div className="px-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">More you can do</p>
          <div className="mt-6 space-y-4">
            {[
              {
                path: "/token-sales",
                label: "Token sales",
                icon: (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" strokeWidth={1.6} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 8v8M8 12h8" />
                  </svg>
                ),
              },
              {
                path: "/cash",
                label: "Cash",
                icon: (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth={1.6} />
                    <circle cx="12" cy="12" r="2.5" strokeWidth={1.6} />
                  </svg>
                ),
              },
              {
                path: "/crypto",
                label: "Staking",
                icon: (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 3v6m0 6v6M7 7h2a3 3 0 010 6H7m10-6h-2a3 3 0 000 6h2" />
                  </svg>
                ),
              },
              {
                path: "/onchain-verify",
                label: "Onchain verifications",
                icon: (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" strokeWidth={1.6} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8.5 12.5l2.5 2.5 4.5-5" />
                  </svg>
                ),
              },
              {
                path: "/advanced-api",
                label: "Advanced API",
                icon: (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 18l6-6 4 4 6-8" />
                  </svg>
                ),
              },
            ].map((item) => (
              <Link key={item.path} to={item.path} onClick={onClose} className="flex items-center gap-3 text-sm font-medium text-gray-900">
                <span className="text-gray-700">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function NotificationsPanel({ onClose }: OverlayProps) {
  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div
        className="absolute right-4 top-14 w-80 rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex w-full items-center justify-between">
          <span className="font-semibold text-gray-900">Notifications</span>
          <div className="flex gap-2">
            <button className="p-1 text-gray-400 hover:text-gray-600" type="button">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="3" />
                <path
                  d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
                  strokeWidth={1.5}
                />
              </svg>
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600" type="button">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center py-8">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <svg className="h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
          <p className="mb-2 text-lg font-bold text-gray-900">All caught up!</p>
          <p className="text-center text-sm text-gray-500">
            You've read all updates in this category. Feel free to explore other topics or check back later for fresh
            insights. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
}

function AppSwitcher({ onClose }: OverlayProps) {
  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div
        className="absolute right-4 top-14 w-72 max-h-96 overflow-y-auto rounded-2xl border border-gray-100 bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">For Individuals</p>
          <div className="mb-4 grid grid-cols-3 gap-2">
            {[
              { label: "Coinbase", bg: "#1652f0" },
              { label: "Advanced", bg: "#000" },
              { label: "Base App", bg: "#0052ff" },
            ].map((app) => (
              <div key={app.label} className="flex cursor-pointer flex-col items-center gap-1 rounded-xl p-2 hover:bg-gray-50">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold text-white" style={{ background: app.bg }}>
                  {app.label[0]}
                </div>
                <span className="text-xs text-gray-700">{app.label}</span>
              </div>
            ))}
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">For Businesses</p>
          <div className="mb-4 grid grid-cols-3 gap-2">
            <div className="flex cursor-pointer flex-col items-center gap-1 rounded-xl p-2 hover:bg-gray-50">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-xs font-bold text-blue-600">
                B
              </div>
              <span className="text-xs text-gray-700">Business</span>
            </div>
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">For Institutions</p>
          <div className="mb-4 grid grid-cols-3 gap-2">
            {["Prime", "Exchange", "Derivatives", "Int'l Exch..."].map((app) => (
              <div key={app} className="flex cursor-pointer flex-col items-center gap-1 rounded-xl p-2 hover:bg-gray-50">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-xs font-bold text-gray-600">
                  {app[0]}
                </div>
                <span className="text-xs text-gray-700">{app}</span>
              </div>
            ))}
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">For Developers</p>
          <div className="mb-4 grid grid-cols-3 gap-2">
            {["Dev Platform", "Dev Docs", "Base Build"].map((app) => (
              <div key={app} className="flex cursor-pointer flex-col items-center gap-1 rounded-xl p-2 hover:bg-gray-50">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-xs font-bold text-blue-700">
                  {app[0]}
                </div>
                <span className="text-xs text-gray-700">{app}</span>
              </div>
            ))}
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">More</p>
          <div className="grid grid-cols-3 gap-2">
            {["Help", "Account"].map((app) => (
              <div key={app} className="flex cursor-pointer flex-col items-center gap-1 rounded-xl p-2 hover:bg-gray-50">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-xs font-bold text-gray-600">
                  {app[0]}
                </div>
                <span className="text-xs text-gray-700">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileMenu({
  onClose,
  name,
  email,
  initial,
  onSignOut,
}: OverlayProps & { name: string; email: string; initial: string; onSignOut: () => void }) {
  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div
        className="absolute right-4 top-14 w-64 rounded-2xl border border-gray-100 bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="border-b border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              {initial}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{name}</p>
              <p className="text-xs text-gray-500">{email}</p>
              <button className="text-xs font-medium text-blue-600" type="button">
                Manage account
              </button>
            </div>
          </div>
        </div>
        <div className="py-2">
          <button className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50" type="button">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            Add account
          </button>
          <button className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50" type="button">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="3" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
              />
            </svg>
            Settings
          </button>
          <div className="flex w-full items-center justify-between px-4 py-2.5">
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              Dark mode
            </div>
            <div className="relative h-5 w-10 cursor-pointer rounded-full bg-gray-200">
              <div className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform" />
            </div>
          </div>
          <div className="mt-1 border-t border-gray-100 pt-1">
            <button
              className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50"
              type="button"
              onClick={onSignOut}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

type LayoutProps = {
  children: ReactNode;
  title: string;
  showBack?: boolean;
};

export default function Layout({ children, title, showBack = false }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showSeeMore, setShowSeeMore] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAppSwitcher, setShowAppSwitcher] = useState(false);
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
    <>
      <DemoWarningBanner />
      <div className="flex h-screen overflow-hidden bg-white font-sans">
      <aside className="flex w-40 flex-shrink-0 flex-col border-r border-gray-200 bg-white">
        <div className="p-4">
          <Link to="/home">
            <CoinbaseLogo />
          </Link>
        </div>
        <nav className="flex-1 space-y-0.5 px-2 py-2">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  active ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className={active ? "text-blue-600" : "text-gray-500"}>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
          <button
            onClick={() => setShowSeeMore(true)}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
              showSeeMore ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
            }`}
            type="button"
          >
            <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
            </svg>
            See more
          </button>
        </nav>
        <div className="border-t border-gray-100 p-3">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            <span className="text-xs font-medium text-gray-500">Advanced</span>
            <div className="ml-auto">
              <label className="relative inline-flex cursor-pointer">
                <input type="checkbox" className="peer sr-only" onChange={() => navigate("/advanced")} />
                <div className="h-4 w-8 rounded-full bg-gray-200 after:absolute after:left-0.5 after:top-0.5 after:h-3 after:w-3 after:rounded-full after:bg-white after:content-[''] after:transition-transform peer-checked:bg-blue-600 peer-checked:after:translate-x-4" />
              </label>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex flex-shrink-0 items-center gap-4 border-b border-gray-200 bg-white px-6 py-3">
          <div className="flex items-center gap-2">
            {showBack ? (
              <button onClick={() => navigate(-1)} className="mr-1 text-gray-500 hover:text-gray-800" type="button">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            ) : null}
            <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
          </div>
          <div className="ml-4 flex-1 max-w-sm">
            <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                className="w-full bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button onClick={() => setShowNotifications(true)} className="rounded-full p-2 text-gray-500 hover:bg-gray-100" type="button">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100" type="button">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01" />
              </svg>
            </button>
            <button onClick={() => setShowAppSwitcher(true)} className="rounded-full p-2 text-gray-500 hover:bg-gray-100" type="button">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </button>
            <button onClick={() => setShowProfile(true)} className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white" type="button">
              {profileInitial}
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>

      {showSeeMore ? <SeeMoreMenu onClose={() => setShowSeeMore(false)} /> : null}
      {showNotifications ? <NotificationsPanel onClose={() => setShowNotifications(false)} /> : null}
      {showAppSwitcher ? <AppSwitcher onClose={() => setShowAppSwitcher(false)} /> : null}
      {showProfile ? (
        <ProfileMenu
          onClose={() => setShowProfile(false)}
          name={profileName}
          email={profileEmail}
          initial={profileInitial}
          onSignOut={handleSignOut}
        />
      ) : null}
      </div>
    </>
  );
}
