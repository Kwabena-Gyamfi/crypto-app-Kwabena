export type LearnArticle = {
  id: string;
  title: string;
  category: string;
  description: string;
};

export const learnArticles: LearnArticle[] = [
  {
    id: "crypto-basics",
    title: "Crypto basics",
    category: "Guides",
    description: "Understand wallets, blockchains, and how crypto works.",
  },
  {
    id: "defi",
    title: "What is DeFi?",
    category: "Explainers",
    description: "Learn how decentralized finance is reshaping markets.",
  },
  {
    id: "web3",
    title: "Start with Web3",
    category: "Academy",
    description: "Build your first onchain experience in minutes.",
  },
];
