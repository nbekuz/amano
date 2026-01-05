const WalletAssetsTable = ({ assets }) => {
  return (
    <div className="dashboard-card p-6 relative">
    <div className="table-blur absolute transform -translate-x-1/2 left-1/2 bottom-6 h-12 w-1/2"></div>
      <div className="space-y-2">
        {/* Table Header */}
        <div className="portfolio-table-head grid grid-cols-3 gap-4 py-3 px-4">
          <div className="text-gray-400 text-sm font-medium">Coin</div>
          <div className="text-gray-400 text-sm font-medium">Quantity</div>
          <div className="text-gray-400 text-sm font-medium">Ratio</div>
        </div>

        {/* Table Rows */}
        {assets.map((asset, index) => (
          <div key={index} className="portfolio-table-row grid grid-cols-3 gap-4 py-4 px-4">
            <div className="flex items-center gap-3">
              <img src={asset.icon} alt={asset.name} className="w-8 h-8 rounded-full" />
              <div>
                <div className="text-white font-medium">{asset.name}</div>
                <div className="text-gray-400 text-sm">{asset.symbol}</div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-white font-medium">{asset.quantity}</div>
              <div className="text-gray-400 text-sm">${asset.usdValue} USD</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${asset.ratio}%`, backgroundColor: '#448DCE' }}
                  />
                </div>
              </div>
              <span className="text-white text-sm font-medium w-20 text-right">{asset.ratio.toFixed(2)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletAssetsTable;

