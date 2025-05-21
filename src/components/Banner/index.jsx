import './Banner.scss';
const Banner = ({title, imageUrl, altTexte}) => {
  return (
    <div className="banner" >
      <img className="banner-image" src={imageUrl} alt={altTexte} />
      {title && (
        <h2 className="banner-title">{title}</h2>
      )}
    </div>
  );
}
export default Banner;