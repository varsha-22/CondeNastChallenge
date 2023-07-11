import React from "react";

export const Pagination = ({
  newsArticles,
  paginate,
  currentPage,
  articlesPerPage,
}) => {
  return (
    <div>
      {newsArticles.length > articlesPerPage && (
        <ul className="pagination">
          {Array(Math.ceil(newsArticles.length / articlesPerPage))
            .fill()
            .map((_, index) => (
              <li
                key={index}
                className={currentPage === index + 1 ? "active" : ""}
              >
                <button onClick={() => paginate(index + 1)}>{index + 1}</button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
