import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  let [error, setError] = useState(false);

  function handleDictionaryResponse(response) {
    if (response.data.status === "not_found") {
      setError(true);
      return;
    }
    setError(false);
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=0f394coc58tc83ab43c50095f3bd3ad9`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "lsSBCbTYc4DrIJv8IsDsYDo9YYHFweH2KmOGhKW6ZmZmrsbbUqecBCnU";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: ` ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded && !error) {
    return (
      <div className="Dictionary">
        <section>
          <h1>Search for a word below 🔍</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control input-focus"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">Suggested words: car, money, career...</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else if (loaded && error) {
    return (
      <div className="Dictionary">
        <section>
          <h1>Search for a word below 🔍</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control input-focus"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            Suggested words: Javascipt, money, career...
          </div>
        </section>
        <h2 className="Oops">🤖: Sorry, cannot compute. </h2>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
