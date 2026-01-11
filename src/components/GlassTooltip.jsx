
const GlassTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
  
    return (
      <div className="tooltip-lg">
        <div className="tooltip-lg-effect"></div>
        <div className="tooltip-lg-tint"></div>
        <div className="tooltip-lg-shine"></div>
  
        <div className="tooltip-lg-content">
          <div className="tooltip-lg-label">{label}</div>
          <div className="tooltip-lg-value">
            ${payload[0].value.toLocaleString()}
          </div>
        </div>
      </div>
    );
  };
  
  export default GlassTooltip;
  