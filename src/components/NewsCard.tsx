import Image from "next/image";
import React from "react";
interface NewsCardProps {
  article: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
  };
}

const NewsCard = ({ article }: NewsCardProps) => {
  console.log(article);

  return (
    <div>
      <div className="card bg-base-100 w-full shadow-sm">
        <figure>
          <Image
            src={article.imageUrl}
            alt={article.imageAlt}
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </figure>

        <div className="card-body">
          <p className="text-red-700 font-semibold">{article.category}</p>

          <h2 className="card-title">
            {article.title}
          </h2>

          <p>{article.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;