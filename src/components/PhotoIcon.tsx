import "../styles/PhotoIcon.css";

interface PhotoIconProps {
  url: string;
  alt: string;
}

function PhotoIcon({ url, alt }: PhotoIconProps) {
  return (
    <div className="iconWrapper">
      <img className="iconImage" src={url} alt={alt} />
    </div>
  );
}

export default PhotoIcon;
