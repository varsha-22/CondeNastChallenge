import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NewsOverview } from "components/NewsOverview";
import { NewsDetails } from "components/NewsDetails";
import { Footer } from "layouts/Footer";
import { Navigation } from "layouts/Navigation";
// data source
import data from "data/news.json";

export const NewsList = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    // Fetch news articles from JSON source
    const fetchNewsArticles = async () => {
      try {
        const response = await data;

        console.log(response);

        setNewsArticles(response.articles);
      } catch (error) {
        console.error("Error fetching news articles:", error);
      }
    };

    fetchNewsArticles();
  }, []);

  return (
    <Router>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/" element={<NewsOverview articles={newsArticles} />} />
          <Route
            path="/news/:id"
            element={<NewsDetails newsArticles={newsArticles} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
