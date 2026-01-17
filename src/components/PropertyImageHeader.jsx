import Badge from "./Badge";
import ShareIcon from "./icons/share";
import HeartIcon from "./icons/heart";
import locIcon from "../assets/img/loc.svg";
import LiquidGlassButton from "./LiquidGlassButton";
const PropertyImageHeader = ({
  image,
  badges,
  title,
  location,
  isSaved,
  onSaveToggle,
}) => {
  return (
    <div className="relative h-[500px]  rounded-xl overflow-hidden">
      <img src={image} alt="Property" className="w-full h-full object-cover" />
      <div className="absolute top-4 right-4 flex gap-2 property">
        <LiquidGlassButton
          onClick={onSaveToggle}
          className="px-4 py-2 w-18  rounded-lg"
        >
          <div className="flex items-center gap-1.5">
            <HeartIcon size={14} filled={isSaved} />
            <span className="text-sm">Save</span>
          </div>
        </LiquidGlassButton>
        <LiquidGlassButton
          onClick={onSaveToggle}
          className="px-4 py-2 w-18 mr-4  rounded-lg"
        >
          <div className="flex items-center gap-1.5">
            <ShareIcon size={14} />
            <span className="text-sm">Share</span>

          </div>
        </LiquidGlassButton>
      </div>
      <div className="absolute bottom-20 left-4 flex gap-2">
        {badges.map((badge, index) => (
          <Badge variant="primary" key={index} label={badge} />
        ))}
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
        <div className="flex items-center gap-2">
          <img src={locIcon} alt="location" className="w-4 h-4 opacity-70" />
          <span className="text-white text-sm">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyImageHeader;
