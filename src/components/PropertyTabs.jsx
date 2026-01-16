const PropertyTabs = ({ tabs, selectedTab, onTabChange }) => {
  return (
    <div className="flex gap-2 overflow-x-auto mb-6 border border-white/10 p-1 rounded-lg">
      {tabs.map((tab) => {
        const isSelected = selectedTab === tab;
        return (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`category-btn px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              isSelected ? "btn-glass" : "category-btn-inactive"
            }`}
          >
            {isSelected && (
              <>
                <span className="btn-glass-bg" />
                <span className="btn-glass-border" />
              </>
            )}
            <span
              className={`category-btn-content ${
                isSelected ? "text-white" : "text-white/70"
              }`}
            >
              {tab}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default PropertyTabs;
