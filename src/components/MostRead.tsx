interface MostReadNews {
  id: string;
  title: string;
}

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const mostReadData = await res.json();
  const mostReadNews: MostReadNews[] = mostReadData.data;

  return (
    <div className="card p-2 bg-base-100 border border-gray-300 shadow-sm ml-1">
      <h2 className="text-xl font-bold mb-2 text-red-700">সর্বাধিক পঠিত</h2>
      <div className="grid gap-2">
        {mostReadNews.map((news, i) => (
          <div className="flex items-center gap-2" key={news.id}>
            <p className="text-xl font-bold text-red-600">{i + 1}</p>{" "}
            <h2>{news.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRead;
