

const NextDistributionSchedule = ({
  payoutDate,
  expectedYield,
  distributionType,
}) => {
  return (
    <div className="dashboard-card p-6">
    <div className="bg-primary absolute top-1  w-40  next-blur rotate-45 left-50 -z-1"></div>
      <h3 className="text-xl font-semibold text-white mb-4">
        Next Distribution Schedule
      </h3>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="text-white/70 text-sm mb-1">Payout Date</div>
          <div className="text-white text-sm font-medium">{payoutDate}</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-white/70 text-sm mb-1">Expected Yield</div>
          <div className="text-white text-sm font-medium">{expectedYield}</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-white/70 text-sm mb-1">Distribution Type</div>
          <div className="text-white text-sm font-medium">{distributionType}</div>
        </div>
      </div>
    </div>
  );
};

export default NextDistributionSchedule;
