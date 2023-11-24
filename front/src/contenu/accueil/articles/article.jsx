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