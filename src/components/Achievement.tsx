import "../styles/Achievement.css";

interface AchievementProps {
  image: string;
  title: string;
  description: string;
}

export default function Achievement({ image, title, description }: AchievementProps) {
  return (
    <div className="achievementWrapper">
      <img className="achievementImage" src={image} alt={title} />
      <div className="achievementInfo">
        <h3 className="achievementTitle">{title}</h3>
        <p className="achievementDescription">{description}</p>
      </div>
    </div>
  );
}
