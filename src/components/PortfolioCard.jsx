import CoinIcon from "./icons/coin";
import IncomeIcon from "./icons/income";
import highIcon from "../assets/img/high.svg";

const PortfolioCard = ({ title, value, subtitle, icon, showTrend }) => {
  const IconComponent = icon === "coin" ? CoinIcon : IncomeIcon;

  return (
    <div className="dashboard-card p-6 relative h-fit w-full">
      <div className="stat-card-blur  w-40   h-12 absolute top-10 right-10 flex">
      
      </div>
      <div className="flex items-start justify-between mb-4">
        <div className="stats-card-icon">
          <IconComponent />
        </div>
      </div>
      <p className="text-gray-400 text-sm mb-2 ">{title}</p>
      <p className="text-white  text-2xl font-bold">{value}</p>
      <div className="flex items-center gap-1.5">
        <img src={highIcon} alt="trend up" className="w-3 h-3" />
        <p className="text-white/70 text-xs">{subtitle}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
