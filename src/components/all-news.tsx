import React, { useState } from "react";
import {NewsFilter} from "./newsfilter";
import NewsList from "./newslist";
import newsData from "../data/newsdata";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AllNews() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredNews =
    selectedCategory === "Semua"
      ? newsData
      : newsData.filter((news) => news.category === selectedCategory);

      console.log(filteredNews)
  return (
    <>
        <div className="card-news">
            <div className="card-title">
                <h1>Berita Terkini</h1>
            </div>

            <NewsFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory} // Pass the function to update the category
                newsData={newsData} // Pass newsData to derive categories
            />

            <NewsList filteredNews={filteredNews} />
        </div>
    </>
  );
}