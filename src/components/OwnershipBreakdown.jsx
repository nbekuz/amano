const OwnershipBreakdown = ({ ownership, totalInvestors }) => {
  const ownershipPercentage = ownership || 0;
  // Calculate number of filled segments (out of 100 total segments)
  const filledSegments = Math.round((ownershipPercentage / 100) * 100);

  return (
    <div className="dashboard-card p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Ownership Breakdown</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-white">Your Ownership</span>
            <span className="text-white font-semibold">{ownershipPercentage}%</span>
          </div>
          <div className="w-full h-6 overflow-hidden flex gap-[2px]">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className={`h-full rounded-sm flex-shrink-0 ${i < filledSegments ? 'ownership-bar-filled' : 'bg-white/20'}`}
                style={{ width: `calc((100%) / 100)` }}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white">Total investors</span>
          <span className="text-white font-semibold">{totalInvestors || 42}</span>
        </div>
      </div>
    </div>
  );
};

export default OwnershipBreakdown;
