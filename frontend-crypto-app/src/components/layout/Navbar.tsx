import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../common/Container";
import Button from "../common/Button";
import { navLinks, type NavLinkItem } from "../../data/navLinks.ts";
import logoMark from "../../assets/logo.svg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showIndividuals, setShowIndividuals] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);
  const [showInstitutions, setShowInstitutions] = useState(false);
  const [showDevelopers, setShowDevelopers] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const individualsTriggerRef = useRef<HTMLButtonElement | null>(null);
  const individualsPanelRef = useRef<HTMLDivElement | null>(null);
  const businessTriggerRef = useRef<HTMLButtonElement | null>(null);
  const businessPanelRef = useRef<HTMLDivElement | null>(null);
  const institutionsTriggerRef = useRef<HTMLButtonElement | null>(null);
  const institutionsPanelRef = useRef<HTMLDivElement | null>(null);
  const developersTriggerRef = useRef<HTMLButtonElement | null>(null);
  const developersPanelRef = useRef<HTMLDivElement | null>(null);
  const companyTriggerRef = useRef<HTMLButtonElement | null>(null);
  const companyPanelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!showIndividuals) return;
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        individualsPanelRef.current?.contains(target) ||
        individualsTriggerRef.current?.contains(target)
      ) {
        return;
      }
      setShowIndividuals(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showIndividuals]);

  useEffect(() => {
    if (!showBusiness) return;
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        businessPanelRef.current?.contains(target) ||
        businessTriggerRef.current?.contains(target)
      ) {
        return;
      }
      setShowBusiness(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showBusiness]);

  useEffect(() => {
    if (!showInstitutions) return;
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        institutionsPanelRef.current?.contains(target) ||
        institutionsTriggerRef.current?.contains(target)
      ) {
        return;
      }
      setShowInstitutions(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showInstitutions]);

  useEffect(() => {
    if (!showDevelopers) return;
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        developersPanelRef.current?.contains(target) ||
        developersTriggerRef.current?.contains(target)
      ) {
        return;
      }
      setShowDevelopers(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showDevelopers]);

  useEffect(() => {
    if (!showCompany) return;
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        companyPanelRef.current?.contains(target) ||
        companyTriggerRef.current?.contains(target)
      ) {
        return;
      }
      setShowCompany(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showCompany]);

  const individualProducts = [
    { title: "Buy and sell", description: "Buy, sell, and use crypto", icon: "C" },
    { title: "Base App", description: "Post, earn, trade, and chat, all in one place", icon: "B" },
    { title: "Crypto App Pro", description: "Get zero trading fees and more", icon: "1" },
    { title: "Private Client", description: "For trusts, family offices, UHNWIs", icon: "♦" },
    { title: "Onchain", description: "Explore onchain apps and experiences", icon: "◎" },
  ];

  const individualTools = [
    { title: "Advanced", description: "Professional-grade trading tools", icon: "↗" },
    { title: "Earn", description: "Stake your crypto and earn rewards", icon: "%" },
    { title: "Crypto App Wealth", description: "Institutional-grade services for UHNW", icon: "◆" },
    { title: "Credit Card", description: "Earn up to 4% bitcoin back", icon: "▦" },
    {
      title: "Debit Card",
      description: "Spend crypto anywhere Visa is accepted",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth={1.6} />
          <line x1="3" y1="10" x2="21" y2="10" strokeWidth={1.6} />
        </svg>
      ),
    },
  ];

  const businessProducts = [
    {
      title: "Business",
      description: "Crypto trading and payments for startups and SMBs",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="7" width="18" height="12" rx="2" strokeWidth={1.6} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" />
        </svg>
      ),
    },
    {
      title: "Asset Listings",
      description: "List your asset on Crypto App",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4" strokeWidth={1.6} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 12h4m8 0h4M12 4v4m0 8v4" />
        </svg>
      ),
    },
  ];

  const businessTools = [
    {
      title: "Payments",
      description: "The stablecoin payments stack for commerce platforms",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth={1.6} />
          <line x1="3" y1="9" x2="21" y2="9" strokeWidth={1.6} />
        </svg>
      ),
    },
    {
      title: "Token Manager",
      description: "The platform for token distributions, vesting, and lockups",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 6v6l4 2" />
          <circle cx="12" cy="12" r="9" strokeWidth={1.6} />
        </svg>
      ),
    },
  ];

  const institutionsPrime = [
    {
      title: "Trading and Financing",
      description: "Professional prime brokerage services",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" strokeWidth={1.6} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 8v4l3 2" />
        </svg>
      ),
    },
    {
      title: "Custody",
      description: "Securely store all your digital assets",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="8" width="16" height="12" rx="2" strokeWidth={1.6} />
          <circle cx="12" cy="14" r="3" strokeWidth={1.6} />
        </svg>
      ),
    },
    {
      title: "Staking",
      description: "Explore staking across our products",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 3v6m0 6v6M7 7h2a3 3 0 010 6H7m10-6h-2a3 3 0 000 6h2" />
        </svg>
      ),
    },
    {
      title: "Onchain Wallet",
      description: "Institutional-grade wallet to get onchain",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth={1.6} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M7 12h6" />
        </svg>
      ),
    },
  ];

  const institutionsMarkets = [
    {
      title: "Exchange",
      description: "Spot markets for high-frequency trading",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="6" height="6" rx="1" strokeWidth={1.6} />
          <rect x="14" y="4" width="6" height="6" rx="1" strokeWidth={1.6} />
          <rect x="4" y="14" width="6" height="6" rx="1" strokeWidth={1.6} />
          <rect x="14" y="14" width="6" height="6" rx="1" strokeWidth={1.6} />
        </svg>
      ),
    },
    {
      title: "International Exchange",
      description: "Access perpetual futures markets",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" strokeWidth={1.6} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M7 12h10" />
        </svg>
      ),
    },
    {
      title: "Derivatives Exchange",
      description: "Trade an accessible futures market",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 18l6-6 4 4 6-8" />
        </svg>
      ),
    },
    {
      title: "Verified Pools",
      description: "Transparent, verified liquidity pools",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" strokeWidth={1.6} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8.5 12.5l2.5 2.5 4.5-5" />
        </svg>
      ),
    },
  ];

  const developerPlatform = [
    {
      title: "Payments",
      description: "Fast and global stablecoin payments with a single integration",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" strokeWidth={1.6} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 8v8M9 11h6" />
        </svg>
      ),
    },
    {
      title: "Trading",
      description: "Launch crypto trading and custody for your users",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} points="17 6 23 6 23 12" />
        </svg>
      ),
    },
    {
      title: "Wallets",
      description: "Deploy customizable and scalable wallets for your business",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth={1.6} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M7 12h6" />
        </svg>
      ),
    },
    {
      title: "Stablecoins",
      description: "Access USDC and Crypto App Custom Stablecoins",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" strokeWidth={1.6} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8 12h8" />
        </svg>
      ),
    },
  ];

  const developerSolutions = [
    {
      title: "Banks & Brokerages",
      description: "Secure, regulated offerings for retail, private banking, & institutional clients",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 10h16M6 10V7l6-3 6 3v3M6 10v8m12-8v8M5 18h14" />
        </svg>
      ),
    },
    {
      title: "Payment Firms",
      description: "Near-instant, low-cost, global payment rails for modern providers",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth={1.6} />
          <circle cx="15.5" cy="12" r="2.5" strokeWidth={1.6} />
        </svg>
      ),
    },
    {
      title: "Startups",
      description: "Launch your business with the world's leader in crypto",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 3l4 4-4 14-4-14 4-4Z" />
        </svg>
      ),
    },
  ];

  const companyPrimary = [
    {
      title: "About",
      description: "Powering the crypto economy",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" strokeWidth={1.6} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 16v-4m0-3h.01" />
        </svg>
      ),
    },
    {
      title: "Affiliates",
      description: "Help introduce the world to crypto",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M6 8a4 4 0 118 0v2M4 20a6 6 0 0112 0" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17 11h3m-1.5-1.5V12.5" />
        </svg>
      ),
    },
    {
      title: "Blog",
      description: "Read the latest from Crypto App",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="4" width="14" height="16" rx="2" strokeWidth={1.6} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 9h6M9 13h6" />
        </svg>
      ),
    },
  ];

  const companySupport = [
    {
      title: "Careers",
      description: "Work with us",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="7" width="18" height="12" rx="2" strokeWidth={1.6} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" />
        </svg>
      ),
    },
    {
      title: "Support",
      description: "Find answers to your questions",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth={1.6} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M7 9h6M7 13h4" />
        </svg>
      ),
    },
    {
      title: "Security",
      description: "The most trusted & secure",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3Z" />
        </svg>
      ),
    },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoMark} alt="Crypto App logo" className="h-8 w-8" />
          <span className="text-base font-semibold text-[#0052ff]">crypto app</span>
        </Link>

        <nav className="hidden flex-1 items-center gap-6 lg:flex">
          {navLinks.map((link: NavLinkItem) =>
            link.label === "Individuals" ? (
              <button
                key={link.label}
                type="button"
                onClick={() => {
                  setShowIndividuals((value) => !value);
                  setShowBusiness(false);
                  setShowInstitutions(false);
                  setShowDevelopers(false);
                  setShowCompany(false);
                }}
                className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                ref={individualsTriggerRef}
              >
                {link.label}
              </button>
            ) : link.label === "Businesses" ? (
              <button
                key={link.label}
                type="button"
                onClick={() => {
                  setShowBusiness((value) => !value);
                  setShowIndividuals(false);
                  setShowInstitutions(false);
                  setShowDevelopers(false);
                  setShowCompany(false);
                }}
                className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                ref={businessTriggerRef}
              >
                {link.label}
              </button>
            ) : link.label === "Institutions" ? (
              <button
                key={link.label}
                type="button"
                onClick={() => {
                  setShowInstitutions((value) => !value);
                  setShowBusiness(false);
                  setShowIndividuals(false);
                  setShowDevelopers(false);
                  setShowCompany(false);
                }}
                className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                ref={institutionsTriggerRef}
              >
                {link.label}
              </button>
            ) : link.label === "Developers" ? (
              <button
                key={link.label}
                type="button"
                onClick={() => {
                  setShowDevelopers((value) => !value);
                  setShowInstitutions(false);
                  setShowBusiness(false);
                  setShowIndividuals(false);
                  setShowCompany(false);
                }}
                className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                ref={developersTriggerRef}
              >
                {link.label}
              </button>
            ) : link.label === "Company" ? (
              <button
                key={link.label}
                type="button"
                onClick={() => {
                  setShowCompany((value) => !value);
                  setShowDevelopers(false);
                  setShowInstitutions(false);
                  setShowBusiness(false);
                  setShowIndividuals(false);
                }}
                className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                ref={companyTriggerRef}
              >
                {link.label}
              </button>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium text-slate-700 transition ${
                    isActive ? "text-slate-900" : "hover:text-slate-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Change language"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
              <path
                d="M12 3a9 9 0 100 18 9 9 0 000-18z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M3.6 9h16.8M3.6 15h16.8M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
          <Button
            as={Link}
            to="/signin"
            variant="ghost"
            className="text-slate-700 hover:text-slate-900"
          >
            Sign in
          </Button>
          <Button as={Link} to="/signup" variant="primary" className="px-4 py-2 text-sm">
            Sign up
          </Button>
        </div>

        <button
          className="flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          type="button"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6l-12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {navLinks.map((link: NavLinkItem) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `text-base font-medium ${
                    isActive ? "text-slate-900" : "text-slate-600"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex flex-col gap-3">
              <Button as={Link} to="/signin" variant="ghost">
                Sign in
              </Button>
              <Button as={Link} to="/signup" variant="primary">
                Sign up
              </Button>
            </div>
          </Container>
        </div>
      ) : null}

      {showIndividuals ? (
        <div
          className="absolute left-0 right-0 top-full border-t border-slate-200 bg-white/95 backdrop-blur"
          ref={individualsPanelRef}
        >
          <Container className="max-h-[70vh] overflow-y-auto py-8">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1.2fr_1fr]">
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Individuals
                </p>
                <div className="grid gap-4">
                  {individualProducts.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold text-slate-700">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Tools
                </p>
                <div className="grid gap-4">
                  {individualTools.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold text-slate-700">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <span className="text-2xl font-semibold">C</span>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-900">
                      System Update 2025
                    </p>
                    <p className="text-sm text-slate-500">
                      The next chapter of Crypto App. Live on X 12/17.
                    </p>
                    <button className="mt-3 text-sm font-semibold text-blue-600" type="button">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      ) : null}

      {showBusiness ? (
        <div
          className="absolute left-0 right-0 top-full border-t border-slate-200 bg-white/95 backdrop-blur"
          ref={businessPanelRef}
        >
          <Container className="max-h-[70vh] overflow-y-auto py-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1.1fr]">
              <div className="space-y-5">
                <div className="grid gap-4">
                  {businessProducts.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-5">
                <div className="grid gap-4">
                  {businessTools.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="4" y="5" width="16" height="14" rx="2" strokeWidth={1.6} />
                      <line x1="4" y1="9" x2="20" y2="9" strokeWidth={1.6} />
                      <rect x="7" y="12" width="3" height="3" fill="currentColor" />
                      <rect x="11.5" y="12" width="3" height="3" fill="currentColor" />
                      <rect x="16" y="12" width="3" height="3" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-900">
                      Commerce Payments Protocol
                    </p>
                    <p className="text-sm text-slate-500">
                      A new standard for onchain payments.
                    </p>
                    <button className="mt-3 text-sm font-semibold text-blue-600" type="button">
                      Go to Payments
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      ) : null}

      {showInstitutions ? (
        <div
          className="absolute left-0 right-0 top-full border-t border-slate-200 bg-white/95 backdrop-blur"
          ref={institutionsPanelRef}
        >
          <Container className="max-h-[70vh] overflow-y-auto py-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1.1fr]">
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <span>Prime</span>
                  <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="grid gap-4">
                  {institutionsPrime.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-5">
                <p className="text-sm font-semibold text-slate-900">Markets</p>
                <div className="grid gap-4">
                  {institutionsMarkets.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 12h7l2 3 3-6 2 4h4" />
                      <circle cx="12" cy="12" r="9" strokeWidth={1.6} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-900">Our clients</p>
                    <p className="text-sm text-slate-500">
                      Trusted by institutions and government.
                    </p>
                    <button className="mt-3 text-sm font-semibold text-blue-600" type="button">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      ) : null}

      {showDevelopers ? (
        <div
          className="absolute left-0 right-0 top-full border-t border-slate-200 bg-white/95 backdrop-blur"
          ref={developersPanelRef}
        >
          <Container className="max-h-[70vh] overflow-y-auto py-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1.1fr]">
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <span>Crypto App Developer Platform</span>
                  <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="grid gap-4">
                  {developerPlatform.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-5">
                <p className="text-sm font-semibold text-slate-900">Solutions for any company</p>
                <div className="grid gap-4">
                  {developerSolutions.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 6h7l2 3 3-6 2 4h4" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 14h16" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-900">
                      World class crypto infrastructure
                    </p>
                    <p className="text-sm text-slate-500">
                      Discover Crypto App's complete crypto-as-a-service platform.
                    </p>
                    <button className="mt-3 text-sm font-semibold text-blue-600" type="button">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      ) : null}

      {showCompany ? (
        <div
          className="absolute left-0 right-0 top-full border-t border-slate-200 bg-white/95 backdrop-blur"
          ref={companyPanelRef}
        >
          <Container className="max-h-[70vh] overflow-y-auto py-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1.1fr]">
              <div className="space-y-5">
                <div className="grid gap-4">
                  {companyPrimary.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-5">
                <div className="grid gap-4">
                  {companySupport.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="3" y="5" width="18" height="14" rx="3" strokeWidth={1.6} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M7 10h10M7 14h6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-900">
                      Learn all about Crypto App
                    </p>
                    <p className="text-sm text-slate-500">
                      We're building the open financial system.
                    </p>
                    <button className="mt-3 text-sm font-semibold text-blue-600" type="button">
                      Create your account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
