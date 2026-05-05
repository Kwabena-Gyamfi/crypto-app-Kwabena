import bitcoinIcon from "../assets/bitcoin.svg";
import ethereumIcon from "../assets/ethereum.svg";
import solanaIcon from "../assets/solana.svg";
import cardanoIcon from "../assets/cardano.svg";
import tetherIcon from "../assets/tether.svg";
import xrpIcon from "../assets/xrp.svg";

export type MarketRow = {
  id: string;
  name: string;
  symbol: string;
  price: string;
  change: string;
  trend: "up" | "down";
  marketCap: string;
  volume: string;
  icon: string;
};

export const marketRows: MarketRow[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    price: "$63,421.08",
    change: "+2.35%",
    trend: "up",
    marketCap: "$1.24T",
    volume: "$28.9B",
    icon: bitcoinIcon,
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,418.12",
    change: "+1.01%",
    trend: "up",
    marketCap: "$410.6B",
    volume: "$15.2B",
    icon: ethereumIcon,
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    price: "$142.56",
    change: "+4.18%",
    trend: "up",
    marketCap: "$63.3B",
    volume: "$3.8B",
    icon: solanaIcon,
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    price: "$0.72",
    change: "-0.85%",
    trend: "down",
    marketCap: "$25.4B",
    volume: "$1.1B",
    icon: cardanoIcon,
  },
  {
    id: "tether",
    name: "Tether",
    symbol: "USDT",
    price: "$1.00",
    change: "+0.02%",
    trend: "up",
    marketCap: "$98.1B",
    volume: "$45.9B",
    icon: tetherIcon,
  },
  {
    id: "xrp",
    name: "XRP",
    symbol: "XRP",
    price: "$0.62",
    change: "+0.91%",
    trend: "up",
    marketCap: "$34.7B",
    volume: "$2.9B",
    icon: xrpIcon,
  },
];
