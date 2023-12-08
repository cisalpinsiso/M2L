import React from "react";
import { Link } from "react-router-dom";
import "./article.css";

function Article(props) {
  const { articles } = props;

  return (
    <>
      <h1 className="titrearticles">Articles</h1>
      <div className="article-container">
        {articles && articles.map(article => (
          <Link to={`/article/${article.id}`} key={article.id} className="article">
            <div className="article-image-container">
              <img src={article.image} alt={`Article titled: ${article.titre}`} />
              <h3 className="article-title">{article.titre}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Article;

