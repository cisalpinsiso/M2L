import React from 'react';
import { useLocation } from 'react-router-dom';

function ArticleUrl() {
  const location = useLocation();
  const article = location.state.article;

  if (!article) return <div>Aucun article sélectionné</div>;

  return (
    <div>
      <h2>{article.titre}</h2>
      <img src={article.image} alt={`Article titled: ${article.titre}`} />
      <p>{article.texte}</p>
      {/* autres détails de l'article */}
    </div>
  );
}

export default ArticleUrl;