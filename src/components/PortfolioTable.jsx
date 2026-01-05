import highIcon from '../assets/img/high.svg';
import lowIcon from '../assets/img/low.svg';

const PortfolioTable = ({ holdings }) => {
  return (
    <div className="dashboard-card p-6 relative">
    <div className='table-blur absolute transform -translate-x-1/2 left-1/2 top-6 h-8 w-1/2'></div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Portfolio Snapshot</h2>
        <button className="portfolio-holding-button">
          {holdings.length} Holding
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full portfolio-table">
          <thead>
            <tr className="portfolio-table-head text-left">
              <th>Asset</th>
              <th>Type</th>
              <th>Current Value</th>
              <th>ROL</th>
              <th>Allocation</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((holding, index) => (
              <tr key={index} className="portfolio-table-row">
                <td className="py-4 text-white font-medium">{holding.asset}</td>
                <td className="py-4">
                  <span className="portfolio-type-badge">{holding.type}</span>
                </td>
                <td className="py-4 text-white">{holding.value}</td>
                <td className={`py-4 ${holding.rol.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  <div className="flex items-center gap-1.5">
                    <img 
                      src={holding.rol.startsWith('+') ? highIcon : lowIcon} 
                      alt={holding.rol.startsWith('+') ? 'increase' : 'decrease'} 
                      className="w-3 h-3" 
                    />
                    <span>{holding.rol}</span>
                  </div>
                </td>
                <td className="py-4">
                  <div className="allocation-bar">
                    {Array.from({ length: 50 }).map((_, i) => {
                      const activeSegments = Math.round((holding.allocation / 100) * 50);
                      const isActive = i < activeSegments;
                      return (
                        <div
                          key={i}
                          className={`allocation-segment ${isActive ? 'active' : ''}`}
                        />
                      );
                    })}
                  </div>
                </td>
                <td className="py-4">
                  <span className="portfolio-status-badge">{holding.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PortfolioTable;

