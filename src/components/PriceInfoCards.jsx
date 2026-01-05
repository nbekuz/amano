import highIcon from '../assets/img/high.svg';

const PriceInfoCards = () => {
  return (
    <div className=" flex gap-4">
      <div className="h-19 dashboard-card px-3 py-2.5 min-w-42">
        <p className="text-gray-400 text-xs mb-1">Current Price</p>
        <p className="text-white text-2xl font-bold mt-2">$100</p>
      </div>
      <div className="h-19 dashboard-card px-3 py-2.5 min-w-42">
        <p className="text-gray-400 text-xs mb-1">24h Change</p>
        <div className="flex items-center gap-1">
          <img src={highIcon} alt="up" className="w-3 h-3" />
          <p className="text-white text-2xl font-bold mt-2">+3.06%</p>
        </div>
      </div>
    </div>
  );
};

export default PriceInfoCards;

