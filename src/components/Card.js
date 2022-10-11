function Card({ cardData, onCardClick }) {
  function handleClick() {
    onCardClick(cardData);
  }

  return (
    <div className="card">
      <button className="card__remove-button" />
      <img
        className="card__img"
        src={cardData.link}
        alt={cardData.name}
        onClick={handleClick}
      />
      <div className="card__text-container">
        <h2 className="card__title">{cardData.name}</h2>
        <div className="card__like-container">
          <button className="card__like-button" />
          <span className="card__like-counter">{cardData.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
