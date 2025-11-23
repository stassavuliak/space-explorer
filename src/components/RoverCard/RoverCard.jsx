import "./RoverCard.scss";

const RoverCard = ({ img, rover, camera, earthDate, sol }) => {
  return (
    <article className="rover-card">
      <div className="rover-card__image-wrapper">
        <img src={img} alt={camera} className="rover-card__image" />
      </div>

      <div className="rover-card__info">
        <h3 className="rover-card__title">{rover} Rover</h3>

        <p className="rover-card__text">
          <strong>Camera:</strong> {camera}
        </p>

        <p className="rover-card__text">
          <strong>Earth Date:</strong> {earthDate}
        </p>

        <p className="rover-card__text">
          <strong>Sol:</strong> {sol}
        </p>
      </div>
    </article>
  );
};

export default RoverCard;
