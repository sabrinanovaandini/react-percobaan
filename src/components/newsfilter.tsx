import React from "react";
import { Link } from "react-router-dom";

export function NewsFilter({ selectedCategory, onSelectCategory, newsData }) {
  const categories = ["Semua", ...new Set(newsData.map((news) => news.category))];

  const handleCategoryChange = (category) => {
    onSelectCategory(category); // Call the parent's setSelectedCategory function
  };

  return (
    <div className="card-filter">
      <ul className="filter-items">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
      <Link to="/berita" className="btn-sm">Lihat Semua</Link>
    </div>
  );
}