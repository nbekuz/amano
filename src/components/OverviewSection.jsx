const OverviewSection = ({ stats }) => {
  return (
    <div className="overview-section-wrapper p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => {
          const row = Math.floor(index / 4);
          const col = index % 4;
          const isLastRow = row === Math.floor((stats.length - 1) / 4);
          const isLastCol = col === 3;
          
          return (
            <div 
              key={index} 
              className={`flex items-center gap-2 p-4 ${
                !isLastRow ? 'overview-item-border-bottom' : ''
              } ${
                !isLastCol ? 'overview-item-border-right' : ''
              }`}
            >
              <div className="text-white">{stat.icon}</div>
              <div className="text-white font-semibold">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverviewSection;

