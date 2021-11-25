import React from "react";
import Input from "../UI/Input";

const Filter = ({ filter, setFilter }) => {
  return (
    <Input
      value={filter}
      type="search"
      label="Фильтр"
      id="name"
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Поиск..."
    />
  );
};

export default Filter;
