const GlassTooltip = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length) return null;
  
    const value = payload[0].value;
  
    return (
      <div className="glass-tooltip">
        <div className="glass-tooltip-label">
          {selectedTab === 'totalValue' ? 'Total Value' : 'Yield Income'}
        </div>
        <div className="glass-tooltip-value">
          ${value.toLocaleString()}
        </div>
      </div>
    );
  };
  