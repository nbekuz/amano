const RevenueBreakdown = ({ data }) => {
  const total = data.reduce(
    (acc, item) => ({
      monthly: acc.monthly + parseFloat(item.monthly.replace(/[^0-9.]/g, "")),
      annualized: acc.annualized + parseFloat(item.annualized.replace(/[^0-9.]/g, "")),
    }),
    { monthly: 0, annualized: 0 }
  );

  const tableData = [
    ...data.map(item => ({
      source: item.source,
      monthly: item.monthly,
      annualized: item.annualized,
    })),
    {
      source: "Total",
      monthly: `$${total.monthly.toLocaleString()}`,
      annualized: `$${total.annualized.toLocaleString()}`,
      isTotal: true,
    },
  ];

  return (
    <div className="dashboard-card p-6 relative">
      <div className="revenue-breakdown-blur bg-primary absolute transform right-0 top-6 h-15 w-1/2"></div>
      <h3 className="text-xl font-semibold text-white mb-4">Revenue Breakdown</h3>
      <div className="overflow-x-auto">
        <table className="w-full portfolio-table" style={{ tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '33.33%' }} />
            <col style={{ width: '33.33%' }} />
            <col style={{ width: '33.33%' }} />
          </colgroup>
          <thead>
            <tr className="portfolio-table-head text-left text-xs text-white/70">
              <th>Source</th>
              <th>Monthly</th>
              <th>Annualized</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index} className="portfolio-table-row text-base">
                <td className={`py-4 ${item.isTotal ? 'text-white font-semibold' : 'text-white'}`}>
                  {item.source}
                </td>
                <td className={`py-4 ${item.isTotal ? 'text-white font-semibold' : 'text-white'}`}>
                  {item.monthly}
                </td>
                <td className={`py-4 ${item.isTotal ? 'text-white font-semibold' : 'text-white'}`}>
                  {item.annualized}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RevenueBreakdown;
