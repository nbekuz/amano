const ProfitDistributionModel = ({ data }) => {
  const investorFilledSegments = Math.round((data.investorDistribution / 100) * 100);
  const retainedFilledSegments = Math.round((data.retainedEarnings / 100) * 100);

  return (
    <div className="dashboard-card p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Profit Distribution Model</h3>
      <div className="space-y-4">
        <div className=" border-b pb-4 border-white/10">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400 text-sm">Investor Distribution </span>
            <span className="text-white text-sm">{data.investorDistribution}%</span>
          </div>
          <div className="w-full h-6 overflow-hidden flex gap-[2px]">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className={`h-full rounded-sm shrink-0 ${i < investorFilledSegments ? 'bg-[#5DB2FF]' : 'bg-white/20'
                  }`}
                style={{ width: `calc((100% - 99 * 2px) / 100)` }}
              />
            ))}
          </div>
        </div>
        <div >
          <div className="flex justify-between mb-2">
            <span className="text-gray-400 text-sm">Retained Earnings</span>
            <span className="text-white text-sm">{data.retainedEarnings}%</span>
          </div>
          <div className="w-full h-6 overflow-hidden flex gap-[2px]">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className={`h-full rounded-sm shrink-0 ${i < retainedFilledSegments ? 'bg-[#21D9D7]' : 'bg-white/20'
                  }`}
                style={{ width: `calc((100% - 99 * 2px) / 100)` }}
              />
            ))}
          </div>
        </div>
        <div className="pt-4 border-t border-white/10">
          <div className="text-white/70 text-base mb-1">Next Distribution Timeline</div>
          <div className="text-white text-xl font-medium">{data.nextDistributionDate}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfitDistributionModel;
