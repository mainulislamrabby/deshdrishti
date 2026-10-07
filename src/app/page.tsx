import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

interface OtherNews {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
  }[];
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherNews: OtherNews[] = sections.slice(1);

  return (
    <div>
      <Marquee />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {/* News Section */}
          <div className="col-span-1 lg:col-span-2">
            <MainNews news={mainNews} />

            <div className="grid gap-2 mt-5">
              {otherNews.map((newsSection) => (
                <div
                  className=""
                  key={newsSection.curationId}
                >
                  <h1 className="font-bold text-xl border-b-2 border-red-700 pb-1">
                    {newsSection.title}
                  </h1>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
                    {newsSection.articles.map((article) => (
                      <NewsCard key={article.id} article={article} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Most Read Section */}
          <div className="col-span-1">
            <MostRead/>
          </div>
        </div>
      </div>
    </div>
  );
}