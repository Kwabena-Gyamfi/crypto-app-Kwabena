import { Link } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import SectionHeader from "../components/common/SectionHeader";
import MarketTable from "../components/crypto/MarketTable";
import { marketRows } from "../data/markets";
import { stats } from "../data/stats";
import { features } from "../data/features";
import { learnArticles } from "../data/learn";
import heroIllustration from "../assets/hero.svg";
import appIllustration from "../assets/app.svg";
import bitcoinIcon from "../assets/bitcoin.svg";
import tetherIcon from "../assets/tether.svg";
import ethereumIcon from "../assets/ethereum.svg";
import cardanoIcon from "../assets/cardano.svg";
import solanaIcon from "../assets/solana.svg";

function Home() {
  return (
    <div className="space-y-20 pb-20">
      <section className="relative overflow-hidden bg-slate-50 pb-16 pt-12">
        <Container className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col items-start gap-4">
            <div className="w-full max-w-md rounded-[48px] bg-[#0b2fbf] p-6 shadow-2xl">
              <div className="rounded-[40px] bg-[#1f44d1] p-4">
                <div className="rounded-[32px] bg-white p-6 shadow-lg">
                  <img src={heroIllustration} alt="Coinbase app preview" className="w-full" />
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400">
              Stocks and predictions are not available in your jurisdiction.
            </p>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              The future of finance is here.
            </h1>
            <p className="text-base text-slate-600 sm:text-lg">
              Trade crypto and more on a platform you can trust.
            </p>
            <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="satoshi@nakamoto.com"
                className="w-full flex-1 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400"
              />
              <Button as={Link} to="/signup" variant="primary" className="px-6">
                Sign up
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Trusted security
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#0052ff]" />
                Advanced trading
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                24/7 support
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-100 py-14">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">
              Explore crypto like Bitcoin, Ethereum, and Dogecoin.
            </h2>
            <p className="text-sm text-slate-600">
              Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
            </p>
            <Button as={Link} to="/explore" variant="ghost">
              See more assets
            </Button>
          </div>
          <div className="rounded-3xl bg-[#0b0f1a] p-6 text-white shadow-2xl">
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="rounded-full bg-white/10 px-3 py-1 text-white">
                Tradable
              </span>
              <span>Top gainers</span>
              <span>New on Coinbase</span>
            </div>
            <div className="mt-6 space-y-4 text-sm">
              {marketRows.slice(0, 6).map((row) => (
                <div key={row.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={row.icon} alt="" className="h-7 w-7" />
                    <span className="font-semibold">{row.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">GHS 10.66</p>
                    <p
                      className={`text-xs ${
                        row.trend === "up" ? "text-emerald-400" : "text-rose-400"
                      }`}
                    >
                      {row.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <SectionHeader
            eyebrow="Markets"
            title="Trade top assets"
            subtitle="Track the largest crypto assets by market cap and build your portfolio with real-time insights."
          />
          <MarketTable rows={marketRows.slice(0, 4)} title="Top movers" showViewAll />
        </Container>
      </section>

      <section>
        <Container className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-10 text-center sm:grid-cols-2 lg:grid-cols-4 lg:text-left">
          {stats.map((item) => (
            <div key={item.label} className="space-y-2">
              <p className="text-3xl font-semibold text-slate-900">{item.value}</p>
              <p className="text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <SectionHeader
            eyebrow="Why Coinbase"
            title="Powerful tools for every investor"
            subtitle="Whether you are starting small or moving millions, our tools keep you in control with pro-grade security."
          />
          <div className="grid gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <img src={feature.icon} alt="" className="h-12 w-12" />
                <div className="space-y-2">
                  <p className="text-base font-semibold text-slate-900">
                    {feature.title}
                  </p>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <img src={appIllustration} alt="Coinbase app" />
          </div>
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Mobile"
              title="Stay on top of the market from anywhere"
              subtitle="Buy, sell, send, and spend with the Coinbase app. Track performance, set price alerts, and manage your digital assets on the go."
            />
            <div className="flex flex-wrap gap-3">
              <Button variant="light">Download for iOS</Button>
              <Button variant="secondary">Get it on Android</Button>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <SectionHeader
            eyebrow="Learn"
            title="Build your crypto knowledge"
            subtitle="Discover how crypto works, learn about DeFi, and explore the latest market trends."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {learnArticles.map((article) => (
              <div
                key={article.id}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0052ff]">
                  {article.category}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{article.description}</p>
                <Button className="mt-5" variant="ghost">
                  Read more
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-10">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Ready to start your crypto journey?
            </h2>
            <p className="text-base text-slate-600">
              Create your Coinbase account and trade in minutes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button as={Link} to="/signup" variant="primary">
                Create account
              </Button>
              <Button as={Link} to="/learn" variant="ghost">
                Learn more
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-48 w-48">
              <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f7931a] text-white shadow-md">
                <img src={bitcoinIcon} alt="Bitcoin" className="h-full w-full p-3" />
              </div>
              <div className="absolute left-1/2 top-0 h-12 w-12 -translate-x-1/2 rounded-full bg-[#111827] text-white shadow-md">
                <span className="flex h-full w-full items-center justify-center text-sm font-semibold">Λ</span>
              </div>
              <div className="absolute right-0 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-[#f2c94c] text-slate-900 shadow-md">
                <span className="flex h-full w-full items-center justify-center text-lg">→</span>
              </div>
              <div className="absolute left-0 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-[#0052ff] text-white shadow-md">
                <span className="flex h-full w-full items-center justify-center text-base font-semibold">C</span>
              </div>
              <div className="absolute left-4 top-6 h-12 w-12 rounded-full bg-[#f2c94c] text-slate-900 shadow-md">
                <img src={tetherIcon} alt="Tether" className="h-full w-full p-3" />
              </div>
              <div className="absolute right-6 top-6 h-12 w-12 rounded-full bg-[#627eea] text-white shadow-md">
                <img src={ethereumIcon} alt="Ethereum" className="h-full w-full p-3" />
              </div>
              <div className="absolute left-6 bottom-6 h-12 w-12 rounded-full bg-[#2775ca] text-white shadow-md">
                <img src={cardanoIcon} alt="Cardano" className="h-full w-full p-3" />
              </div>
              <div className="absolute right-2 bottom-10 h-12 w-12 rounded-full bg-[#14f195] text-slate-900 shadow-md">
                <img src={solanaIcon} alt="Solana" className="h-full w-full p-3" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
