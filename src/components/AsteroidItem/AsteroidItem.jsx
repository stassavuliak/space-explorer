import "./AsteroidItem.scss";

const AsteroidItem = ({ name, diameter, hazardous, approachDate, speed }) => {
  return (
    <div className={`asteroid-item ${hazardous ? "hazardous" : ""}`}>
      <h3 className="asteroid-item__title">Asteroid name: {name}</h3>

      <p className="asteroid-item__text">
        <strong>Diameter:</strong> {diameter} m
      </p>

      <p className="asteroid-item__text">
        <strong>Hazardous:</strong>{" "}
        <span className={hazardous ? "danger" : "safe"}>
          {hazardous ? "Yes" : "No"}
        </span>
      </p>

      <p className="asteroid-item__text">
        <strong>Closest Approach:</strong> {approachDate}
      </p>

      <p className="asteroid-item__text">
        <strong>Speed:</strong> {speed} km/h
      </p>
    </div>
  );
};

export default AsteroidItem;
