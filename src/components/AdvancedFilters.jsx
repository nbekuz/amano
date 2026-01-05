import { useState, useRef, useEffect } from 'react';

const AdvancedFilters = ({ isOpen, onClose, onApply, onReset, buttonRef }) => {
  const dropdownRef = useRef(null);
  const [expectedYield, setExpectedYield] = useState([0, 100]);
  const [riskLevel, setRiskLevel] = useState({
    low: false,
    medium: true,
    high: false,
  });
  const [location, setLocation] = useState({
    us: true,
    uk: true,
    eu: false,
    asia: false,
    other: false,
  });
  const [availability, setAvailability] = useState({
    active: false,
    upcoming: true,
    soldOut: false,
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && 
          buttonRef?.current && !buttonRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, onClose, buttonRef]);


  const handleRiskChange = (level) => {
    setRiskLevel(prev => ({ ...prev, [level]: !prev[level] }));
  };

  const handleLocationChange = (loc) => {
    setLocation(prev => ({ ...prev, [loc]: !prev[loc] }));
  };

  const handleAvailabilityChange = (avail) => {
    setAvailability(prev => ({ ...prev, [avail]: !prev[avail] }));
  };

  const handleReset = () => {
    setExpectedYield([0, 100]);
    setRiskLevel({ low: false, medium: false, high: false });
    setLocation({ us: false, uk: false, eu: false, asia: false, other: false });
    setAvailability({ active: false, upcoming: false, soldOut: false });
    if (onReset) onReset();
  };

  const handleApply = () => {
    if (onApply) {
      onApply({
        expectedYield,
        riskLevel,
        location,
        availability,
      });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        ref={dropdownRef}
        className="dashboard-card p-6 w-full max-w-md bg-bg-base/80 backdrop-blur-xl border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'rgba(15, 15, 15, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <h2 className="text-lg font-semibold text-white mb-4">Advanced Filters</h2>
        
        <div className="space-y-6">
          {/* Expected Yield */}
          <div>
            <label className="text-white text-sm mb-2 block">
              Expected Yield: {expectedYield[0]}% - {expectedYield[1]}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={expectedYield[1]}
              onChange={(e) => setExpectedYield([expectedYield[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Risk Level */}
          <div>
            <label className="text-white text-sm mb-3 block">Risk Level</label>
            <div className="flex flex-col gap-2">
              {['low', 'medium', 'high'].map((level) => (
                <label key={level} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={riskLevel[level]}
                    onChange={() => handleRiskChange(level)}
                    className="advanced-filter-checkbox"
                  />
                  <span className="text-gray-300 capitalize">{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="text-white text-sm mb-3 block">Location</label>
            <div className="flex flex-col gap-2">
              {['us', 'uk', 'eu', 'asia', 'other'].map((loc) => (
                <label key={loc} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={location[loc]}
                    onChange={() => handleLocationChange(loc)}
                    className="advanced-filter-checkbox"
                  />
                  <span className="text-gray-300 uppercase">{loc === 'us' ? 'US' : loc === 'uk' ? 'UK' : loc === 'eu' ? 'EU' : loc === 'asia' ? 'ASIA' : 'Other'}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <label className="text-white text-sm mb-3 block">Availability</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={availability.active}
                  onChange={() => handleAvailabilityChange('active')}
                  className="advanced-filter-checkbox"
                />
                <span className="text-gray-300">Active</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={availability.upcoming}
                  onChange={() => handleAvailabilityChange('upcoming')}
                  className="advanced-filter-checkbox"
                />
                <span className="text-gray-300">Upcoming</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={availability.soldOut}
                  onChange={() => handleAvailabilityChange('soldOut')}
                  className="advanced-filter-checkbox"
                />
                <span className="text-gray-300">Sold out</span>
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6 pt-6 border-t border-gray-700">
          <button
            onClick={handleReset}
            className="flex-1 px-4 py-2 bg-bg-dark border border-gray-600 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors"
          >
            Reset
          </button>
          <button
            onClick={handleApply}
            className="flex-1 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFilters;

