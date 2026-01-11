 const GlassTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;
  
    return (
      <div className="figma-glass-tooltip">
        <div className="figma-glass-tooltip-label">
          Mar 02, 2025
        </div>
        <div className="figma-glass-tooltip-value">
          ${payload[0].value.toLocaleString()}
        </div>
      </div>
    );
  };
  export default GlassTooltip;