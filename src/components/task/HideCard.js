import React, { useState } from 'react';

const CardSelection = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    <div>
      <div>
        <Card
          id={1}
          onClick={() => handleCardClick(1)}
          disabled={selectedCard === 2}
        />
        <Card
          id={2}
          onClick={() => handleCardClick(2)}
          disabled={selectedCard === 1}
        />
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

const Card = ({ id, onClick, disabled }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px',
        cursor: 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
      onClick={() => onClick(id)}
    >
      Card {id}
    </div>
  );
};

export default CardSelection;
