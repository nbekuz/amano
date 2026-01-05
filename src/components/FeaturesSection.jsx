const FeaturesSection = ({ features }) => {
  return (
    <div className="features-section-wrapper p-6 relative">
      <div className="table-blur absolute bottom-6 rounded-lg right-3 h-8 w-1/2"></div>
      <h2 className="text-xl font-semibold text-white mb-4">Key Features & Amenities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {features.map((feature, index) => {
          // Calculate row number (0-indexed)
          const row = Math.floor(index / 3);
          const isLastRow = row === Math.floor((features.length - 1) / 3);
          const isLastInRow = (index + 1) % 3 === 0;
          
          return (
            <div 
              key={index} 
              className={`flex items-center gap-2 text-gray-300 pb-3 ${
                !isLastRow ? 'features-item-border-bottom' : ''
              } ${
                !isLastInRow ? 'features-item-border-right' : ''
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></div>
              <span>{feature}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesSection;

