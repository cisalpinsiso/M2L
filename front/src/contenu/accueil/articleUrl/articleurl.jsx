import React from 'react';
import { useParams } from 'react-router-dom';

function ArticleUrl(props) {
  const { id } = useParams(); // Récupérer l'ID de l'URL
  const article = props.articles.find(a => a.id.toString() === id); // Trouver l'article par ID

    console.log(id)
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