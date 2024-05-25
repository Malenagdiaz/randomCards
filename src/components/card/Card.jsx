import "./card.css";

export const Card = ({
  cardHeader,
  cardFooter,
  cardImage,
  footballPlayerName,
}) => {
  return (
    <div className="card__container">
      <h3 className="card__title">
        El jugador que te tocó es {footballPlayerName}
      </h3>
      {cardHeader && <p className="card__header">{cardHeader}</p>}
      {cardImage && <img src={cardImage} alt="imagen" className="card__img" />}
      {cardFooter && <p className="card__footer">{cardFooter}</p>}
    </div>
  );
};
