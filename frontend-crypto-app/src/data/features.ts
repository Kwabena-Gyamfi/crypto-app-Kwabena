import secureIcon from "../assets/secure.svg";
import learnIcon from "../assets/learn.svg";
import cardIcon from "../assets/card.svg";

export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export const features: Feature[] = [
  {
    title: "Secure storage",
    description:
      "Keep your crypto safe with industry-leading security and 98% of assets held offline.",
    icon: secureIcon,
  },
  {
    title: "Earn while you learn",
    description:
      "Learn about crypto and earn rewards with guided lessons and quizzes.",
    icon: learnIcon,
  },
  {
    title: "Instant funding",
    description:
      "Fund your account with cards, bank transfers, and local payment methods.",
    icon: cardIcon,
  },
];
