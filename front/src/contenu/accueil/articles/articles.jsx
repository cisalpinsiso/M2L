import React from 'react';
import Article from './article';

const Articles = () => {
  const articlesData = [
    {
      id: 1,
      image: 'https://img.freepik.com/vecteurs-libre/concept-equipement-sport_1284-13034.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1698451200&semt=ais',
      title: 'Titre de l\'article 1',
      date: 'Date 1'
    },
    {
      id: 2,
      image: "https://img.freepik.com/vecteurs-libre/concept-equipement-sport_1284-13034.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1698451200&semt=ais",
      title: 'Titre de l\'article 2',
      date: 'Date 2'
    },
    // ... autres articles
  ];

  return (
    <div className="articles d-flex mt-4 gap-4">
      {articlesData.map((article) => (
        <Article image={article.image} title={article.title} date={article.date} />
      ))}
    </div>
  );
};

export default Articles;