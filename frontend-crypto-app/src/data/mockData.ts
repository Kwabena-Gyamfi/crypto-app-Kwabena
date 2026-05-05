import bitcoinIcon from "../assets/bitcoin.svg";
import ethereumIcon from "../assets/ethereum.svg";
import solanaIcon from "../assets/solana.svg";
import xrpIcon from "../assets/xrp.svg";
import cardanoIcon from "../assets/cardano.svg";

export type CryptoAsset = {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  icon: string;
  color: string;
  tag: string;
};

export type TrendingAsset = {
  name: string;
  symbol: string;
  price: string;
  volume: string;
  marketCap: string;
  change: number;
  up: boolean;
  icon?: string;
};

export type VerificationApp = {
  name: string;
  desc: string;
  req: string;
  btn: string;
  bg: string;
  comingSoon?: boolean;
};

export type AdvancedOrderBookRow = {
  price: string;
  amount: string;
  total: string;
};

export const cryptoAssets: CryptoAsset[] = [
  { id: "btc", name: "Bitcoin", symbol: "BTC", price: 86240.0, change: 2.84, icon: "₿", color: "#f7931a", tag: "Most popular" },
  { id: "eth", name: "Ethereum", symbol: "ETH", price: 2148.3, change: -1.22, icon: "Ξ", color: "#627eea", tag: "Most popular" },
  { id: "doge", name: "Dogecoin", symbol: "DOGE", price: 0.1823, change: 5.31, icon: "Ð", color: "#c2a633", tag: "Most traded today" },
  { id: "sol", name: "Solana", symbol: "SOL", price: 142.5, change: 3.12, icon: "◎", color: "#9945ff", tag: "Trending" },
  { id: "usdc", name: "USD Coin", symbol: "USDC", price: 1.0, change: 0.01, icon: "$", color: "#2775ca", tag: "" },
];

export const trendingAssets: TrendingAsset[] = [
  { name: "Bitcoin", symbol: "BTC", price: "GHS 720,964.57", volume: "GHS 57.84B", marketCap: "GHS 14.41T", change: -0.94, up: false, icon: bitcoinIcon },
  { name: "Ethereum", symbol: "ETH", price: "GHS 20,813.25", volume: "GHS 18.49B", marketCap: "GHS 2.5T", change: -1.89, up: false, icon: ethereumIcon },
  { name: "Solana", symbol: "SOL", price: "GHS 877.89", volume: "GHS 25.15B", marketCap: "GHS 501.7B", change: -2.11, up: false, icon: solanaIcon },
  { name: "XRP", symbol: "XRP", price: "GHS 14.47", volume: "GHS 15.40B", marketCap: "GHS 806.5B", change: -0.94, up: false, icon: xrpIcon },
  { name: "Cardano", symbol: "ADA", price: "GHS 5.80", volume: "GHS 13.49B", marketCap: "GHS 391.0B", change: -1.40, up: false, icon: cardanoIcon },
];

export const tradeTabsData: Record<string, TrendingAsset[]> = {
  "Top volume": trendingAssets,
  Trending: [
    { name: "WAR", symbol: "WAR", price: "GHS 0.28", volume: "GHS 21.12M", marketCap: "GHS 279.8M", change: -12.42, up: false },
    { name: "pippin", symbol: "PIPPIN", price: "GHS 3.65", volume: "GHS 50.2M", marketCap: "GHS 3.6B", change: -0.99, up: false },
    { name: "what the dog doing?", symbol: "我的刀盾", price: "GHS 0.0318", volume: "GHS 15.73M", marketCap: "GHS 31.8M", change: 14.15, up: true },
    { name: "パンチ", symbol: "PUNCH", price: "GHS 0.0985", volume: "GHS 20.54M", marketCap: "GHS 98.5M", change: -5.72, up: false },
    { name: "AI Rig Complex", symbol: "ARC", price: "GHS 0.38", volume: "GHS 23.49M", marketCap: "GHS 376.8M", change: 0.37, up: true },
  ],
  "Top gainers": [
    { name: "BioLLM", symbol: "BIOLLM", price: "GHS 0.0195", volume: "GHS 24.13M", marketCap: "GHS 19.4M", change: 302.68, up: true },
    { name: "NOICE", symbol: "NOICE", price: "GHS 0.0000511", volume: "GHS 7.42M", marketCap: "GHS 1.2M", change: 9.05, up: true },
  ],
  "New launches": [
    { name: "KITE", symbol: "KITE", price: "GHS 0.30670", volume: "GHS 5.12M", marketCap: "GHS 12.8M", change: 9.34, up: true },
    { name: "MATH", symbol: "MATH", price: "GHS 0.0298", volume: "GHS 2.4M", marketCap: "GHS 6.1M", change: 10.78, up: true },
  ],
  "Top losers": [
    { name: "PIPPIN", symbol: "PIPPIN", price: "GHS 3.79", volume: "GHS 56.68M", marketCap: "GHS 3.8B", change: -1.09, up: false },
    { name: "ARC", symbol: "ARC", price: "GHS 0.38", volume: "GHS 17M", marketCap: "GHS 378.6M", change: -3.92, up: false },
  ],
};

export const verificationApps: VerificationApp[] = [
  {
    name: "Coinbase One Onchain Benefits",
    desc: "Maximize savings and earn exclusive rewards onchain with Base, Aerodrome, and more.",
    req: "Verified Coinbase One Membership",
    btn: "Explore benefits",
    bg: "#000",
  },
  {
    name: "Base Discord",
    desc: "Claim the Guild badge, join the private Discord channel and enjoy gasless transactions coming soon.",
    req: "Verified account",
    btn: "Use on Base Discord",
    bg: "#5865f2",
  },
  {
    name: "Verified Pools",
    desc: "Get seamless access to transparent, verified liquidity pools—trade onchain with confidence with Coinbase.",
    req: "Verified account, Verified country",
    btn: "Use on Verified Pools",
    bg: "#e8eaf0",
  },
  {
    name: "Veil Cash",
    desc: "Transact privately on Base.",
    req: "Verified account",
    btn: "Use on Veil Cash",
    bg: "#111",
  },
  {
    name: "Singularity",
    desc: "Transact Privately in DeFi: Your Wallet, Your Anonymity—Swap, Stake, and LP Without a Trace.",
    req: "Verified account",
    btn: "Use on Singularity",
    bg: "#000",
  },
  {
    name: "Basepaint",
    desc: "Mint a Brush NFT and paint onchain with 600 other artists every day.",
    req: "Verified account",
    btn: "Use on Basepaint",
    bg: "#f0f",
  },
  {
    name: "Superchain Dev Console",
    desc: "Get up to 0.05 ETH gas rebate when deploying on the Superchain.",
    req: "Verified account",
    btn: "Use on Superchain Dev Console",
    bg: "#ff0420",
  },
  {
    name: "Talent Protocol",
    desc: "Add your Coinbase Verification to Talent Passport to increase your Builder Score.",
    req: "Verified account",
    btn: "Use on Talent Protocol",
    bg: "#7c3aed",
  },
  {
    name: "DeForm",
    desc: "Create or complete web3 signup forms, waitlists, and surveys while ensuring quality via Coinbase Verifications.",
    req: "Verified account",
    btn: "Use on DeForm",
    bg: "#fbbf24",
  },
  {
    name: "Perennial",
    desc: "Trade perpetuals with leverage in a secure & compliant manner when you access Perennial markets as a Coinbase-verified user.",
    req: "Verified account",
    btn: "Use on Perennial",
    bg: "#f8f8f8",
  },
  {
    name: "Icebreaker",
    desc: "Add your verification to your profile and claim a special holiday gift (limited time only).",
    req: "Verified account",
    btn: "Use on Icebreaker",
    bg: "#1a1a2e",
  },
  {
    name: "Gitcoin",
    desc: "Claim your Coinbase Stamp on Gitcoin Passport.",
    req: "Verified account",
    btn: "Use on Gitcoin",
    bg: "#fff",
  },
  {
    name: "Volmex",
    desc: "Access Volmex's best-in-class crypto implied volatility indices for Bitcoin, Ethereum, and tradable products like perpetual futures.",
    req: "Verified account",
    btn: "Coming soon",
    bg: "#1a1a1a",
    comingSoon: true,
  },
  {
    name: "Index Coop",
    desc: "Invest in exclusive markets and earn higher yield when you access Index Coop as a Coinbase-verified user.",
    req: "Verified account",
    btn: "Coming soon",
    bg: "#e8eaf0",
    comingSoon: true,
  },
];

export const faqItems = [
  "What are Verifications?",
  "How do I verify my wallet?",
  "What are the benefits of verification?",
  "What data is shared when I verify?",
  "Can I revoke the verification?",
  "Who is eligible for a verification?",
];

export const advancedOrderBook: AdvancedOrderBookRow[] = [
  { price: "67,528.03", amount: "0.0817", total: "0.281" },
  { price: "67,528.00", amount: "0.0057", total: "1.1993" },
  { price: "67,527.88", amount: "<0.0001", total: "1.1936" },
  { price: "67,526.75", amount: "0.0002", total: "1.1934" },
  { price: "67,526.00", amount: "0.0057", total: "1.1932" },
  { price: "67,525.56", amount: "0.0009", total: "1.1877" },
  { price: "67,524.00", amount: "0.0057", total: "1.1868" },
  { price: "67,522.64", amount: "<0.0001", total: "1.1811" },
  { price: "67,522.63", amount: "0.0007", total: "1.1810" },
  { price: "67,522.37", amount: "0.0007", total: "1.1796" },
];
