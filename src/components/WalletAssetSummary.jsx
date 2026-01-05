import highIcon from '../assets/img/high.svg';

const WalletAssetSummary = ({ assets }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {assets.map((asset, index) => (
        <div key={index} className="dashboard-card p-6 relative">
          <div className="stat-card-blur absolute top-6 rounded-lg -right-3 h-12.5 w-41"></div>
          <div className="flex items-center gap-4">
            <div className="stats-card-icon dashboard-card bg-white/5">
              {asset.icon}
            </div>
            <div className="flex-1">
              <div className="text-gray-400 text-sm mb-1">{asset.title}</div>
              <div className="text-white font-bold text-2xl mb-1">{asset.value}</div>
              <div className="flex items-center gap-1 text-success text-sm">
                <img src={highIcon} alt="trend" className="w-4 h-4" />
                <span>{asset.change}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WalletAssetSummary;

