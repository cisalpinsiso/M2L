import React from "react";
import "./article.css"; // Assuming you have a separate CSS file for styling

function Article() {
  // Example data, you might want to fetch this from an API or props
  const articles = [
    {
      id: 1,
      title: "Article Title 1",
      imageUrl: "path_to_image_1.jpg",
      seeMoreUrl: "url_to_article_1"
    },
    {
      id: 2,
      title: "Article Title 2",
      imageUrl: "path_to_image_2.jpg",
      seeMoreUrl: "url_to_article_2"
    },
    // Add more articles as needed
  ];

  const openArticle = (url) => {
    window.open(url, '_blank');
  }

  return (
    <div className="article-container">
      {articles.map(article => (
        <div key={article.id} className="article">
          <h3>{article.title}</h3>
          <img src={article.imageUrl} alt={article.title} />
          <button onClick={() => openArticle(article.seeMoreUrl)}>
            Voir Plus
          </button>
        </div>
      ))}
    </div>
  );
}

export default Article;