import Badge from './Badge';

const InvestmentOverview = ({ 
  totalRaised, 
  tokenPrice, 
  progress, 
  tokenAvailable,
  roi,
  apr,
  requiredFunds,
  targetDate,
  distribution,
  minInvestment,
  currentAmount,
  targetAmount
}) => {
  // Calculate progress percentage
  const progressPercentage = currentAmount && targetAmount 
    ? (currentAmount / targetAmount) * 100 
    : 35.46;
  
  // Calculate number of filled segments (out of 60 total segments)
  const filledSegments = Math.round((progressPercentage / 100) * 60);
  
  // Calculate total raised percentage dynamically
  const calculatedTotalRaised = currentAmount && targetAmount
    ? `${progressPercentage.toFixed(2)}%`
    : totalRaised;
  
  // Parse token available number
  const tokenCount = tokenAvailable ? parseInt(tokenAvailable.match(/\d+/)?.[0] || '120') : 120;
  return (
    <div className="dashboard-card p-6 relative">
    <div className="table-blur absolute top-3 rounded-lg right-3 h-10 w-1/2 "></div>
      <h2 className="text-xl font-semibold text-white mb-4">Investment Overview</h2>
      
      {/* Total raised & Token Price */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-4 bg-white/5 rounded-lg">
          <div className="text-gray-400 text-sm mb-1">Total raised</div>
          <div className="text-white font-bold text-xl">{calculatedTotalRaised}</div>
        </div>
        <div className="p-4 bg-white/5 rounded-lg">
          <div className="text-gray-400 text-sm mb-1">Token Price</div>
          <div className="text-white font-bold text-xl">{tokenPrice}</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>{progress || `$${currentAmount?.toLocaleString() || '124110'} / $${targetAmount?.toLocaleString() || '350,000'}`}</span>
        </div>
        <div className="w-full   h-6 overflow-hidden flex gap-[2px]">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className={`h-full rounded-sm flex-shrink-0 ${i < filledSegments ? 'ownership-bar-filled' : 'bg-white/20'}`}
              style={{ width: `calc((100%) / 100)` }}
            />
          ))}
        </div>
        <div className="text-sm text-gray-400 mt-2">
          <span className="text-white/40">{tokenCount} token available</span>
        </div>
      </div>

      {/* Buy amount */}
      <div className="mb-4">
        <label className="text-gray-400 text-sm mb-2 block">Buy amount</label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter your quentity"
            className="flex-1 px-4 py-2 bg-bg-dark border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary"
          />
          <button className="px-4 py-2 bg-bg-dark border border-gray-600 rounded-lg text-gray-300 text-sm hover:bg-gray-700">
            Max
          </button>
        </div>
        <div className="text-gray-400 text-xs mt-1 text-right">Your balance: 1234</div>
      </div>

      {/* ROI & APR */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-gray-400 text-sm">ROI</div>
          <div className="text-white font-semibold">{roi}</div>
        </div>
        <div>
          <div className="text-gray-400 text-sm">% APR</div>
          <div className="text-white font-semibold">{apr}</div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="space-y-2 mb-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">Required Funds</span>
          <span className="text-white">{requiredFunds}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Target Date</span>
          <span className="text-white">{targetDate}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Distribution</span>
          <Badge label={distribution} />
        </div>
      </div>

      {/* Invest Now Button */}
      <button className="w-full px-4 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors mb-2">
        Invest Now
      </button>
      <div className="text-gray-400 text-xs text-center">
        Minimum investment: {minInvestment}
      </div>
    </div>
  );
};

export default InvestmentOverview;

