import { useMemo } from "react";

const useFilter = (news, field, filter) => {
  const filteredNews = useMemo(() => {
    return news.filter((post) =>
      post[field].toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, news, field]);

  return filteredNews;
};

export default useFilter;