import React, { useState } from 'react';
import './Article.css';

const Article = ({ image, title, date }) => {
  const [hover, setHover] = useState(false);

  const summaryText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

  return (
    <div 
      className="card article-card" 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} className="card-img-top" alt={title} />
      {hover && (
        <div className="card-summary">
          <p className="summary-text">{summaryText}</p>
        </div>
      )}
      <div className={`card-body ${hover ? 'hover' : ''}`}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{date}</p>
      </div>
    </div>
  );
};

export default Article;

