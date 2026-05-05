import Container from "../components/common/Container";
import SectionHeader from "../components/common/SectionHeader";
import Button from "../components/common/Button";
import { learnArticles } from "../data/learn";
import learnIllustration from "../assets/learn-hero.svg";

const topics = [
  "Crypto basics",
  "Decentralized finance",
  "NFTs and creators",
  "Web3 identity",
  "Security tips",
  "Market insights",
];

function Learn() {
  return (
    <div className="space-y-12 pb-20">
      <section className="bg-transparent">
        <Container className="grid items-center gap-10 pt-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Learn"
              title="Level up your crypto knowledge"
              subtitle="Explore curated guides, tutorials, and research to help you build confidence and stay informed."
            />
            <div className="flex flex-wrap gap-3">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <img src={learnIllustration} alt="Learning resources" />
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <SectionHeader
            eyebrow="Guides"
            title="Featured articles"
            subtitle="Stay ahead with hand-picked lessons from the Coinbase learning hub."
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
                  Read lesson
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Get weekly insights</h2>
          <p className="mt-2 text-sm text-slate-600">
            Join the Coinbase newsletter for market updates, product releases, and
            educational content.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-sm rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-900 placeholder:text-slate-500"
            />
            <Button variant="primary">Subscribe</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Learn;
