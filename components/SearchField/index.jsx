import React, { useState } from "react";
import styles from "./styles.module.css";

function SearchField({ getSearchValue }) {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.searchFieldContainer}>
      <input
        placeholder="Search (E.g: chicken, risotto, gyoza ...)"
        type="text"
        className={styles.searchInput}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            getSearchValue(query);
          }
        }}
      />
      <button
        className={styles.searchBtn}
        onClick={() => getSearchValue(query)}
      >
        Search
      </button>
    </div>
  );
}

export default SearchField;
