import React, { useState } from "react";
import styles from "./styles.module.css";

function SearchField({ getSearchValue }) {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.searchFieldContainer}>
      <input
        type="text"
        className={styles.searchInput}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="searchBtn" onClick={() => getSearchValue(query)}>
        Search
      </button>
    </div>
  );
}

export default SearchField;
