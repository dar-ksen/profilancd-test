import React, { useState } from "react";
import { useSelector } from "react-redux";
import Filter from "../components/Filter";
import NewsList from "../components/NewsList";
import Container from "../components/UI/Container";
import useFilter from "../hooks/useFilter";

const News = () => {
  const { news } = useSelector((state) => state.news);

  const [filter, setFilter] = useState("");
  const searchPosts = useFilter(news, "title", filter);

  return (
    <Container>
      <h1 className="title">Здесь вы можете посмотреть новости:</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <NewsList news={searchPosts} />
    </Container>
  );
};

export default News;
