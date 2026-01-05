const TokenInformation = ({ tokenData }) => {
  const rows = [
    { label: "Token Symbol", value: tokenData.symbol },
    { label: "Tokens Held", value: tokenData.tokensHeld },
    { label: "Token Price", value: tokenData.price },
    { label: "Total Token Supply", value: tokenData.totalSupply },
  ];

  return (
    <div className="dashboard-card p-5">
    <div className="table-blur w-1/2 h-8 absolute top-10 left-1/2 transform -translate-x-1/2"></div>
      <h3 className="text-lg font-semibold text-white mb-4">Token Information</h3>
      <div className="space-y-3">
        {rows.map((row, index) => (
          <div key={index} className="token-info-card flex-col sm:flex-row sm:items-center sm:justify-between">
            <span className="text-gray-400 text-sm mb-1 sm:mb-0">{row.label}</span>
            <span className="text-white text-sm font-medium">{row.value}</span>
          </div>
        ))}
        <div className="token-info-card flex-col items-start">
          <span className="text-gray-400 text-sm mb-2 w-full text-left">Smart Contract Address</span>
          <div className="flex items-center gap-2 w-full flex-wrap">
            <span className="text-white text-sm font-mono flex-1 min-w-0 break-all text-left">{tokenData.contractAddress}</span>
            <div className="flex items-center gap-2 shrink-0">
              <button className="text-gray-400 hover:text-white">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V12C2 12.5304 2.21071 13.0391 2.58579 13.4142C2.96086 13.7893 3.46957 14 4 14H12C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 6L14 2M14 2H10M14 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="text-gray-400 hover:text-white">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2V8M8 8L5 5M8 8L11 5M3 9.5V12C3 12.5304 3.21071 13.0391 3.58579 13.4142C3.96086 13.7893 4.46957 14 5 14H11C11.5304 14 12.0391 13.7893 12.4142 13.4142C12.7893 13.0391 13 12.5304 13 12V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenInformation;

