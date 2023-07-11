import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <span>
        {"Copyright © "}
        <a href="https://condenast.com">Condé Nast</a>{" "}
        {new Date().getFullYear()}
        {"."}
      </span>
    </div>
  );
};
