function Card({ cardData }) {
  return (
    <article id="cards">
      <div className="card__container">
        <button className="card__remove-button"></button>
        <img className="card__img" src={cardData.link} alt={cardData.name} />
        <div className="card__text-container">
          <h2 className="card__title">{cardData.name}</h2>
          <div className="card__like-container">
            <button className="card__like-button"></button>
            <span className="card__like-counter">{cardData.likes.length}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Card;
