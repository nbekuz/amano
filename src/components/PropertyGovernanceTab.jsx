import { governanceData } from "../data/propertyDetailData";

const GovernanceOverviewCard = ({ label, value }) => {
  return (
    <div className="rounded-xl border border-white/10 p-4 relative">
      <div className="min-card-blur absolute  w-20 h-10 top-0 right-0 bg-primary "></div>
      <div className="text-white/70 text-sm mb-1">{label}</div>
      <div className="text-white text-base font-medium">{value}</div>
    </div>
  );
};

const VotingRights = ({ data }) => {
  const filledSegments = Math.round((data.percentage / 100) * 100);

  return (
    <div className=" ">
      <h3 className="text-xl font-semibold text-white mb-4">Your Voting Rights</h3>
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-400 text-sm">Investor Distribution </span>
          <span className="text-white text-sm">{data.percentage}%</span>
        </div>
        <div className="w-full h-6 overflow-hidden flex gap-[2px] mb-3">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className={`h-full rounded-sm shrink-0 ${i < filledSegments ? 'bg-[#5DB2FF]' : 'bg-white/20'
                }`}
              style={{ width: `calc((100% - 99 * 2px) / 100)` }}
            />
          ))}
        </div>
        <p className="text-gray-400 text-sm">{data.description}</p>
      </div>

    </div>
  );
};

const PropertyGovernanceTab = () => {
  return (
    <div className="p-5 rounded-xl overflow-hidden  border border-white/10 bg-white-10/6 relative">
      <div className="absolute bottom-0 left-1/2   -translate-x-1/2   bg-primary w-1/2 h-15  gover-tap-blur  flex "></div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Governance Overview</h3>
        <div className="grid grid-cols-3 gap-4">
          {governanceData.overview.map((item, index) => (
            <GovernanceOverviewCard
              key={index}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <VotingRights data={governanceData.votingRights} />
      </div>
    </div>
  );
};

export default PropertyGovernanceTab;
