// // https://newsapi.org/v2/everything?q=keyword&apiKey=25d0cebaa703453eae55184fc681d757
// this is the rendering page
import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

import "./fetch.css";
import Navbar from "../components/Navbar";

const Fetch = () => {
  const [searchData, setSearchData] = useState();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchData().then((res) => {
      setArticles(res.articles);
    });
  }, []);

  async function fetchData() {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=keyword&apiKey=25d0cebaa703453eae55184fc681d757"
    );
    const json = await response.json();
    return json;
  }

  if (articles.length === 0) {
    return (
      <div className=" h-screen w-screen flex justify-center items-center ">
        <img
          className=""
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="loading"
        />
      </div>
    );
  } else {
    return (
      <div className="bg-gray-50">
        <Navbar setSearchData={setSearchData} />

        {searchData
          ? articles.map((article, index) => (
              <div key={index} className="flex justify-center ">
                {article.title.toLowerCase().includes(searchData) && (
                  <NewsCard {...article} />
                )}
              </div>
            ))
          : articles.map((article, index) => (
              <div key={index} className="flex justify-center ">
                <NewsCard {...article} />
              </div>
            ))}
      </div>
    );
  }
};

export default Fetch;
