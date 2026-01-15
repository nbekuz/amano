import Badge from './Badge';
import ConvIcon from './icons/conv';
import LegalIcon from './icons/legal';
import locIcon from '../assets/img/loc.svg';
import { useNavigate } from 'react-router-dom';

const PortfolioHeaderCard = ({ id, image, badges, title, location, description }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-card p-5 overflow-hidden">
    <div className='h-card-blur w-85 h-12 absolute top-5 -right-15 flex'></div>
      <div className="flex flex-col md:flex-row">
        <div className="w-1/3 h-64 md:h-auto">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="flex-1 p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {badges.map((badge, index) => (
              <Badge key={index} label={badge} variant="default" />
            ))}
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <div className="flex items-center gap-2 mb-4">
            <img src={locIcon} alt="location" className="w-4 h-4 opacity-70" />
            <p className="text-gray-400 text-sm">{location}</p>
          </div>
          <p className="text-gray-300 text-sm mb-6">{description}</p>
          <div className="flex gap-3">
            <button 
              onClick={() => navigate(`/trading/${id}`)}
              className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors flex items-center gap-2"
            >
              <ConvIcon />
              Trade on Secondary Market
            </button>
            <button className="px-6 py-2 border border-gray-600 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
              <LegalIcon />
              Legal Documents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeaderCard;

