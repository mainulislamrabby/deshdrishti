import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headlines {
  id: string;
  title: string;
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=30");
  const data = await res.json();
  const headlines: Headlines[] = data.data;

  return (
    <div className="my-1 bg-green-600 text-white">
      <div className="flex items-center container mx-auto px-4">
        <p className="bg-green-700 py-1 px-5 font-bold">সর্বশেষ</p>
        <MarqueeText className="py-1" direction="right" duration={9}>
          {headlines.map((headline) => (
            <span key={headline.id}>
              <span>{headline.title}</span>
              <span className="mx-2">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
