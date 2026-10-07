import Image from "next/image";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  const firstNews = news[0];
  const otherNews = news.slice(1);
  console.log(otherNews);

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4">
      <div className="card bg-base-100 w-full shadow-sm">
        <figure>
          <Image
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </figure>
        <div className="card-body">
          <p className="text-red-700 font-semibold">{firstNews.category}</p>
          <h2 className="card-title">{firstNews.title}</h2>
          <p>{firstNews.description}</p>
        </div>
      </div>

      <div className="grid gap-2 w-full">
        {otherNews.slice(0, 4).map((restNews) => (
          <div
            className="card bg-base-100 border border-gray-300 p-2"
            key={restNews.id}
          >
            <div>
              <p className="text-red-700 font-semibold">{restNews.category}</p>
              <h2>{restNews.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;