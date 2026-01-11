import { useNavigate } from 'react-router-dom';
import nImage from '../assets/img/n.png';
import LiquidGlassButton from './LiquidGlassButton';

const HoldingsCard = ({ title, currentValue, expectedYield, badge, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/holdings/${id}`);
    }
  };

  return (
    <div 
      className="dashboard-card p-0 overflow-hidden holdings-card cursor-pointer "
      onClick={handleClick}
    >
      <div className="relative">
        <img 
          src={nImage} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        {badge && (
          <div className="absolute top-3 left-3">
            <LiquidGlassButton width='auto' height={20} radius="12" className="btns">
            <span className="text-xs px-3">{badge}</span>
            
            </LiquidGlassButton>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-white text-sm font-semibold mb-3">{title}</h3>
        <div className="space-y-2">
          <div>
            <p className="text-gray-400 text-xs mb-1">Current value</p>
            <p className="text-white text-base font-semibold">{currentValue}</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs mb-1">Expected Yield</p>
            <p className="text-white text-base font-semibold">{expectedYield}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoldingsCard;

