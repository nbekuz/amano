const NextDistributionSchedule = ({ payoutDate, expectedYield, distributionType }) => {
  return (
    <div className="dashboard-card p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Next Distribution Schedule</h3>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-gray-400 text-sm mb-1">Payout Date</div>
          <div className="text-white font-medium">{payoutDate}</div>
        </div>
        <div>
          <div className="text-gray-400 text-sm mb-1">Expected Yield</div>
          <div className="text-white font-medium">{expectedYield}</div>
        </div>
        <div>
          <div className="text-gray-400 text-sm mb-1">Distribution Type</div>
          <div className="text-white font-medium">{distributionType}</div>
        </div>
      </div>
    </div>
  );
};

export default NextDistributionSchedule;
