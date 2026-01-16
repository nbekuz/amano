const PerformanceBreakdownTable = ({ data }) => {
  return (
    <div className="dashboard-card p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Performance Breakdown</h3>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="text-gray-400 text-xs border-b border-gray-700">
              <th className="text-left pb-3">Period</th>
              <th className="text-left pb-3">Income</th>
              <th className="text-left pb-3">ROI</th>
              <th className="text-left pb-3">Yield</th>
              <th className="text-left pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-800">
                <td className="py-3 text-white text-sm">{item.period}</td>
                <td className="py-3 text-white text-sm">{item.income}</td>
                <td className="py-3 text-white text-sm">{item.roi}</td>
                <td className="py-3 text-white text-sm">{item.yield}</td>
                <td className="py-3">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-white text-xs border border-white/20">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceBreakdownTable;
