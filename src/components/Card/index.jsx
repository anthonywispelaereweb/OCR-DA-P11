import './Card.scss'; // Import des styles spécifiques à la carte

const Card = ({ image, title, link }) => {
  return (
    <a href={link} className="card-link">
      <div className="card">
        <figure className="card-content">
          <img className="card-image" src={image} alt={title} />
        </figure>
        <figcaption className="card-title">{title}</figcaption>
      </div>
    </a>
  );
};


export default Card;