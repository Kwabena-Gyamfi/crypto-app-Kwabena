import Container from "../components/common/Container";
import SectionHeader from "../components/common/SectionHeader";
import MarketTable from "../components/crypto/MarketTable";
import { marketRows } from "../data/markets";

const categories = [
  "All assets",
  "Top movers",
  "DeFi",
  "Stablecoins",
  "Layer 1",
  "Metaverse",
];

function Explore() {
  return (
    <div className="space-y-12 pb-20">
      <section className="bg-transparent">
        <Container className="space-y-6 pt-6">
          <SectionHeader
            eyebrow="Explore"
            title="Discover crypto assets"
            subtitle="Compare prices, market caps, and price changes across the most popular cryptocurrencies."
          />
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 transition hover:border-[#0052ff]/30 hover:text-slate-900"
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <MarketTable rows={marketRows} title="All assets" />
        </Container>
      </section>
    </div>
  );
}

export default Explore;
