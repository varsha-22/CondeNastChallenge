import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "components/Pagination";

export const NewsOverview = ({ articles }) => {
  const [newsArticles, setNewsArticles] = useState(articles);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(50);

  useEffect(() => {
    setNewsArticles(articles);
  }, [articles]);

  // Pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = newsArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="overview">
      <h1>News Overview</h1>
      {currentArticles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <img src={article.imageURL} alt={article.title} />
          <p>Author: {article.author}</p>
          <p>{article.summary}</p>
          <Link to={`/news/${article.id}`}>Read more</Link>
        </div>
      ))}

      <Pagination
        newsArticles={newsArticles}
        paginate={paginate}
        currentPage={currentPage}
        articlesPerPage={articlesPerPage}
      />
    </div>
  );
};
