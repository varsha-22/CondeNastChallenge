import React from "react";
import { useParams } from "react-router-dom";

export const NewsDetails = ({ newsArticles }) => {
  const { id } = useParams();

  const article = newsArticles.find((article) => article.id === id);

  if (!article) {
    return <div>Article not found.</div>;
  }

  const { title, content, imageURL, author, summary } = article;

  return (
    <div className="overview">
      <h1>{title}</h1>
      <p>{content}</p>
      <img src={imageURL} alt={title} />
      <p>Author: {author}</p>
      <p>{summary}</p>
    </div>
  );
};
