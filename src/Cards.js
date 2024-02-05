import React from 'react'
import  image1 from './assets/cardimage.jpg'

const cardData = [
  {
    title: "Card 1 Title",
    description: "Card 1 Description",
    image: "./assets/cardimage.jpg"
  },
  {
    title: "Card 2 Title",
    description: "Card 2 Description",
    image: "./assets/cardimage.jpg"
  },
  // ... more card data
];

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};





const Cards = () => {
  return (
    <>
     <section>
      {cardData.map((card) => (
        <Card key={card.title} title={card.title} description={card.description} image={card.image} />
      ))}
    </section>
    
    
    </>
  )
}

export default Cards