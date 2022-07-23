import SearchInput from "../SearchInput/index.js";
import ResultList from "../ResultList/index.js";
import { useReducer } from "react";
import "./SearchPage.css";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "RANDOM_SNIPPET":
      return action.payload;
    case "SEARCH_SNIPPET":
      return action.payload;
    default:
      console.log("Nothing changes!");
      return state;
  }
}

export default function SearchPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='search-container'>
      <div className='search-header'>
        <h1>
          The <s>School</s> Search of Code
        </h1>
        <SearchInput dispatch={dispatch} />
      </div>
      <ResultList results={state} />
    </div>
  );
}
