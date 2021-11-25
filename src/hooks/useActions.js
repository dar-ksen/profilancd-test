import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import allActionCreators from "../store/action-creators";

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActionCreators, dispatch);
};

export default useActions;
