const TransactionHistory = ({ transactions, onViewAll }) => {
  return (
    <div className="dashboard-card p-6">
    <div className="table-blur absolute left-1/2 transform -translate-x-1/2 bottom-8 h-12 w-1/2"></div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">Transaction History</h3>
        <button onClick={onViewAll} className="text-primary text-sm hover:text-primary-hover">View Full History</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400 text-xs border-b border-gray-700">
              <th className="pb-3">Date</th>
              <th className="pb-3">Type</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b border-gray-800">
                <td className="py-3 text-white text-sm">{transaction.date}</td>
                <td className="py-3">
                  <span className="portfolio-type-badge">{transaction.type}</span>
                </td>
                <td className="py-3 text-white text-sm">{transaction.amount}</td>
                <td className="py-3">
                  <span className="portfolio-status-badge">{transaction.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;

