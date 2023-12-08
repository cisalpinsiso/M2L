import React from "react";
import "./article.css"; 

function Article(props) {
  const { articles } = props;


  return (
    <>
      <h1 className="titrearticles">Articles</h1>
      <div className="article-container">
        {articles && articles.map(article => (
          console.log(article.titre),
          <div key={article.id} className="article">
            <div className="article-image-container">
              <img src={article.image} alt={`Article titled: ${article.titre}`} />
              <h3 className="article-title">{article.titre}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Article;
