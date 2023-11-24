import React from 'react';

function Article({ titre, image, onVoirPlus }) {
  return (
    <div className="article">
      <img src={image} alt={titre} />
      <h3>{titre}</h3>
      <button onClick={onVoirPlus}>Voir plus</button>
    </div>
  );
}

export default Article;
2. Mise à jour du Composant Articles
Dans votre composant Articles, vous pouvez utiliser le composant Article pour afficher chaque article. Vous allez probablement récupérer les données de vos articles depuis une API ou une base de données.

javascript
Copy code
import React, { useState, useEffect } from 'react';
import Article from './Article';

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