import { useParams, Link } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { marketRows } from "../data/markets";
import chartIllustration from "../assets/chart.svg";

function AssetDetail() {
  const { assetId } = useParams<{ assetId: string }>();
  const asset = marketRows.find((item) => item.id === assetId) ?? marketRows[0];

  return (
    <div className="space-y-12 pb-20">
      <section className="bg-transparent">
        <Container className="space-y-6 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img src={asset.icon} alt="" className="h-16 w-16" />
              <div>
                <p className="text-sm text-slate-500">Asset details</p>
                <h1 className="text-3xl font-semibold text-slate-900">
                  {asset.name} ({asset.symbol})
                </h1>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button as={Link} to="/signup" variant="primary">
                Trade {asset.symbol}
              </Button>
              <Button as={Link} to="/explore" variant="secondary">
                Back to markets
              </Button>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Price</p>
              <p className="text-2xl font-semibold text-slate-900">{asset.price}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                24H Change
              </p>
              <p
                className={`text-2xl font-semibold ${
                  asset.trend === "up" ? "text-emerald-500" : "text-rose-500"
                }`}
              >
                {asset.change}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Market cap
              </p>
              <p className="text-2xl font-semibold text-slate-900">{asset.marketCap}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Volume
              </p>
              <p className="text-2xl font-semibold text-slate-900">{asset.volume}</p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">Price chart</p>
                <h2 className="text-xl font-semibold text-slate-900">Last 30 days</h2>
              </div>
              <div className="flex gap-2 text-xs font-semibold text-slate-600">
                {["1D", "1W", "1M", "1Y", "ALL"].map((range) => (
                  <span
                    key={range}
                    className={`rounded-full border px-3 py-1 ${
                      range === "1M"
                        ? "border-[#0052ff]/30 bg-[#0052ff]/10 text-[#0052ff]"
                        : "border-slate-200"
                    }`}
                  >
                    {range}
                  </span>
                ))}
              </div>
            </div>
            <img src={chartIllustration} alt="Price chart" className="mt-6" />
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                About {asset.name}
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                {asset.name} is a leading digital asset that powers a global
                network of peer-to-peer value transfers. Track performance,
                follow market news, and build your long-term strategy with
                real-time data.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Trading summary</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>24H high: $64,210.55</li>
                <li>24H low: $62,845.18</li>
                <li>Circulating supply: 19.6M</li>
                <li>All-time high: $69,045.00</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default AssetDetail;
