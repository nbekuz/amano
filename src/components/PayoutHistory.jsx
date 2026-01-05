const PayoutHistory = ({ payouts, onViewAll }) => {
  return (
    <div className="dashboard-card p-6 relative">
      <div className="table-blur absolute left-1/2 transform -translate-x-1/2 top-8 h-8 w-1/2"></div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">Payout History</h3>
        <button onClick={onViewAll} className="payout-view-all-button">View all</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full payout-table">
          <thead>
            <tr className="payout-table-header">
              <th className="text-left text-gray-400 text-xs pb-3">Date</th>
              <th className="text-left text-gray-400 text-xs pb-3">Amount</th>
              <th className="text-left text-gray-400 text-xs pb-3">Type</th>
              <th className="text-left text-gray-400 text-xs pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map((payout, index) => (
              <tr key={index} className="payout-table-row">
                <td className="py-3 text-white text-sm">{payout.date}</td>
                <td className="py-3 text-white text-sm">{payout.amount}</td>
                <td className="py-3 text-white text-sm">{payout.type}</td>
                <td className="py-3">
                  <span className="payout-status-badge">{payout.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayoutHistory;

