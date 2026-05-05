export type NavLinkItem = {
  label: string;
  to: string;
};

export const navLinks: NavLinkItem[] = [
  { label: "Cryptocurrencies", to: "/explore" },
  { label: "Individuals", to: "/signup" },
  { label: "Businesses", to: "/explore" },
  { label: "Institutions", to: "/explore" },
  { label: "Developers", to: "/learn" },
  { label: "Company", to: "/learn" },
];
