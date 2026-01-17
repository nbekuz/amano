const PerformanceBreakdownTable = ({ data }) => {
  return (
    <div className="dashboard-card p-6 relative">
      <div className="table-blur absolute transform -translate-x-1/2 left-1/2 top-6 h-8 w-1/2"></div>
      <h3 className="text-xl font-semibold text-white mb-4">Performance Breakdown</h3>
      <div className="overflow-x-auto">
        <table className="w-full portfolio-table" style={{ tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '20%' }} />
            <col style={{ width: '20%' }} />
            <col style={{ width: '20%' }} />
            <col style={{ width: '20%' }} />
            <col style={{ width: '20%' }} />
          </colgroup>
          <thead>
            <tr className="portfolio-table-head text-left">
              <th>Period</th>
              <th>Income</th>
              <th>ROI</th>
              <th>Yield</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="portfolio-table-row">
                <td className="py-4 text-white font-medium">{item.period}</td>
                <td className="py-4 text-white">{item.income}</td>
                <td className="py-4 text-white">{item.roi}</td>
                <td className="py-4 text-white">{item.yield}</td>
                <td className="py-4">
                  <span className="text-white-10 bg-white-10/6 py-0.5 px-2 rounded">
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
