import Style from './style.module.css';

// eslint-disable-next-line react/prop-types
const Photo = ({ image, caption }) => {
  return (
    <div className={Style.polaroid}>
      <img src={image} alt="Polaroid" className={Style.polaroid-image} />
      {caption && <div className={Style.caption}>{caption}</div>}
    </div>
  );
};

export default Photo;
