import React from "react";
import "./article.css"; // Assuming you have a separate CSS file for styling

function Article() {
  // Example data, you might want to fetch this from an API or props
  const articles = [
    {
      id: 1,
      title: "COUPE DU MONDE 1998 A UNE TETE DE L'AVOIR",
      imageUrl: "https://source.unsplash.com/featured/?Article%20Title%201",
      seeMoreUrl: "url_to_article_1"
    },
    {
      id: 2,
      title: "Article Title 2",
      imageUrl: "https://source.unsplash.com/featured/?Article%20Title%202",
      seeMoreUrl: "url_to_article_2"
    },
    {
      id: 3,
      title: "Article Title 3",
      imageUrl: "https://source.unsplash.com/featured/?Article%20Title%203",
      seeMoreUrl: "url_to_article_3"
    },
    {
      id: 4,
      title: "Article Title 4",
      imageUrl: "https://source.unsplash.com/featured/?Article%20Title%204",
      seeMoreUrl: "url_to_article_4"
    },
    {
      id: 5,
      title: "Article Title 5",
      imageUrl: "https://source.unsplash.com/featured/?Article%20Title%205",
      seeMoreUrl: "url_to_article_5"
    },
    {
      id: 6,
      title: "Article Title 6",
      imageUrl: "https://source.unsplash.com/featured/?Article%20Title%206",
      seeMoreUrl: "url_to_article_6"
    },
    {
      id: 7,
      title: "Article Title 7",
      imageUrl: "https://source.unsplash.com/featured/?Article%20Title%207",
      seeMoreUrl: "url_to_article_7"
    },
    {
      id: 8,
      title: "Article Title 8",
      imageUrl: "https://source.unsplash.com/featured/?Article%20Title%208",
      seeMoreUrl: "url_to_article_8"
    },
    {
      id: 9,
      title: "Article Title 9",
      imageUrl: "https://source.unsplash.com/featured/?Article%20Title%209",
      seeMoreUrl: "url_to_article_9"
    },
    {
      id: 10,
      title: "Article Title 10",
      imageUrl: "https://source.unsplash.com/featured/?Article%20Title%2010",
      seeMoreUrl: "url_to_article_10"
    },
    {
      id: 11,
      title: "Article Title 11",
      imageUrl: "https://source.unsplash.com/featured/?Article%20Title%2011",
      seeMoreUrl: "url_to_article_11"
    },
    {
      id: 12,
      title: "Article Title 12",
      imageUrl: "https://source.unsplash.com/featured/?Article%20Title%2012",
      seeMoreUrl: "url_to_article_12"
    }
    
  ];

  

  const openArticle = (url) => {
    window.open(url, '_blank');
  }

  return (
    <>
    <h1 className="titrearticles">Articles</h1>
      <div className="article-container">
        {articles.map(article => (
          <div key={article.id} className="article">
            <div className="article-image-container">
              <img src={article.imageUrl} alt={article.title} />
              <h3 className="article-title">{article.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Article;
