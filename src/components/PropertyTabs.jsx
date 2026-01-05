const PropertyTabs = ({ tabs, selectedTab, onTabChange }) => {
  return (
    <div className="flex gap-2 border-b border-gray-700">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 font-medium transition-all ${
            selectedTab === tab
              ? 'text-white bg-primary/15 rounded-t-lg'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default PropertyTabs;

