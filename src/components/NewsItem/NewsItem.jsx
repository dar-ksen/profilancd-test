import React from "react";
import "./NewsItem.scss";

const NewsItem = ({ title, body, time }) => {
  return (
    <li className="news-item">
      <div className="news-item__header">
        <h5 className="news-item__title">{title}</h5>
        <span className="news-item__time">{time}</span>
      </div>
      <div className="news-item__content">{body}</div>
    </li>
  );
};

export default NewsItem;
