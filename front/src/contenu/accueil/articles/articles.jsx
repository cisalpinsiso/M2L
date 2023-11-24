import React, { useState, useEffect } from 'react';
import Article from './article';

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Ici, vous pouvez appeler votre API pour récupérer les articles
    // Exemple :
    // fetch('/api/articles').then(res => res.json()).then(data => setArticles(data));
  }, []);

  return (
    <div className="articles">
      {articles.map(article => (
        <Article
          key={article.id}
          titre={article.titre}
          image={article.image}
          onVoirPlus={() => console.log("Voir plus cliqué pour", article.titre)}
        />
      ))}
    </div>
  );
}

export default Articles;
