import * as types from "../action-creators/types";
import news from "../../mock/news";

const initialState = {
  news: news,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NEWS:
      return { ...state, news: [...state.news, action.payload] };
    case types.DELETE_NEWS:
      return {
        ...state,
        news: state.news.filter((newsItem) => newsItem.id !== action.payload),
      };
    default:
      return state;
  }
};

export default newsReducer;
