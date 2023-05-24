// newscard component
import React, { useState } from "react";
import formatDate from "./formatDate";

const NewsCard = ({ title, publishedAt, description, url, ...props }) => {
  const [showFullCharacter, setShowFullCharacter] = useState(false);

  const slicedCharacter = description.substring(0, 100);
  const hasOverflow = description.length > slicedCharacter.length;

  const handleSeeMore = (e) => {
    e.stopPropagation();
    setShowFullCharacter(!showFullCharacter);
  };
  const handleLinkClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col justify-center mt-16 items-center ">
      <div
        className="flex  flex-col justify-center w-5/12 border rounded-md shadow-md p-2 mb-2 bg-white"
        onClick={() => {
          handleLinkClick(url);
        }}
      >
        <div className="top-head text-right mb-5">
          <h4 className="author text-xs font-medium">{props.author}</h4>
          <p className="publish-date text-xs ">
            Published at: {formatDate(publishedAt)}
          </p>
        </div>
        <h1 className="title font-bold text-2xl">{title}</h1>
        <img
          className="mt-6 mb-6  h-4/5 object-fill w-full"
          src={props.urlToImage === null ? "./logo192.png" : props.urlToImage}
          alt="article-img"
        />
        {/* <div dangerouslySetInnerHTML={{ __html: props.content }} /> */}
        <div className="para">
          <p>
            {description}
            {showFullCharacter
              ? description
              : `${description.substring(0, 200)}`}
            {!hasOverflow && showFullCharacter
              ? null
              : description.length > 200 && (
                  <button
                    onClick={handleSeeMore}
                    className="ml-5
                     font-semibold text-blue-600 px-2 py-1 hover:text-blue-500"
                  >
                    {showFullCharacter ? "Hide" : "Show More"}
                  </button>
                )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
