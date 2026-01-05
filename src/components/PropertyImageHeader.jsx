import Badge from './Badge';
import ShareIcon from './icons/share';
import HeartIcon from './icons/heart';
import locIcon from '../assets/img/loc.svg';

const PropertyImageHeader = ({ image, badges, title, location, isSaved, onSaveToggle }) => {
  return (
    <div className="relative h-[500px] rounded-xl overflow-hidden">
      <img src={image} alt="Property" className="w-full h-full object-cover" />
      {/* Save and Share buttons */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={onSaveToggle}
          className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm font-medium hover:bg-white/15 transition-colors flex items-center gap-2"
        >
          <HeartIcon filled={isSaved} />
          Save
        </button>
        <button className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm font-medium hover:bg-white/15 transition-colors flex items-center gap-2">
          <ShareIcon />
          Share
        </button>
      </div>
      {/* Badges */}
      <div className="absolute bottom-20 left-4 flex gap-2">
        {badges.map((badge, index) => (
          <Badge key={index} label={badge} />
        ))}
      </div>
      {/* Title and Location */}
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

