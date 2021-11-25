import React from "react";
import NewsItem from "../NewsItem";
import "./NewsList.scss";

const NewsList = ({ news }) => {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <NewsItem key={newsItem.id} {...newsItem} />
      ))}
    </ul>
  );
};

export default NewsList;
