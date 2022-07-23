import React, { useState } from "react";
import "./SearchInput.css";

const snippetsURL = "https://revision-app-backend.herokuapp.com/snippets";
const randomNumber = 6;

export default function SearchInput({ dispatch }) {
  const [Text, setText] = useState("");
  function updateText(event) {
    setText(event.target.value);
    console.log(Text);
  }

  async function handleRandom() {
    const searchID = Math.floor(Math.random() * randomNumber + 1);
    const response = await fetch(`${snippetsURL}/${searchID}`);
    const responseJSON = await response.json();
    dispatch({ type: "RANDOM_SNIPPET", payload: responseJSON.payload });
  }

  async function handleSearch() {
    const response = await fetch(`${snippetsURL}?category=${Text}`);
    const responseJSON = await response.json();
    dispatch({ type: "SEARCH_SNIPPET", payload: responseJSON.payload });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Category"
        onChange={updateText}
        id="search-bar"
      ></input>
      <br />
      <button onClick={handleSearch} className="search-btn" name="searchButton">
        Search
      </button>
      <button
        onClick={handleRandom}
        className="search-btn random-btn"
        name="randomButton"
      >
        Random
      </button>
    </div>
  );
}
