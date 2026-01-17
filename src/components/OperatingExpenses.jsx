const OperatingExpenses = ({ data }) => {
  const total = data.reduce(
    (acc, item) => ({
      monthly: acc.monthly + parseFloat(item.monthly.replace(/[^0-9.]/g, "")),
      annual: acc.annual + parseFloat(item.annual.replace(/[^0-9.]/g, "")),
    }),
    { monthly: 0, annual: 0 }
  );

  const tableData = [
    ...data.map(item => ({
      category: item.category,
      monthly: item.monthly,
      annual: item.annual,
    })),
    {
      category: "Total Expenses",
      monthly: `$${total.monthly.toLocaleString()}`,
      annual: `$${total.annual.toLocaleString()}`,
      isTotal: true,
    },
  ];

  return (
    <div className="dashboard-card p-6 relative">
      <div className="table-blur absolute transform -translate-x-1/2 left-1/2 top-6 h-8 w-1/2"></div>
      <h3 className="text-xl font-semibold text-white mb-4">Operating Expenses</h3>
      <div className="overflow-x-auto">
        <table className="w-full portfolio-table" style={{ tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '33.33%' }} />
            <col style={{ width: '33.33%' }} />
            <col style={{ width: '33.33%' }} />
          </colgroup>
          <thead>
            <tr className="portfolio-table-head text-left">
              <th>Category</th>
              <th>Monthly</th>
              <th>Annual</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index} className="portfolio-table-row">
                <td className={`py-4 ${item.isTotal ? 'text-white font-semibold' : 'text-white'}`}>
                  {item.category}
                </td>
                <td className={`py-4 ${item.isTotal ? 'text-white font-semibold' : 'text-white'}`}>
                  {item.monthly}
                </td>
                <td className={`py-4 ${item.isTotal ? 'text-white font-semibold' : 'text-white'}`}>
                  {item.annual}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OperatingExpenses;
