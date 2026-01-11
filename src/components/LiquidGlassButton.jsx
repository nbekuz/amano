const LiquidGlassButton = ({
  children,
  onClick,
  className = "",
  width = 32,
  height = 32,
  radius = 8, 
}) => {
  const borderRadius = radius === "full" ? "50%" : `${radius}px`;
  const buttonWidth = width === "auto" || width === undefined ? "max-content" : width;

  return (
    <div className={` ${className}`}>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
        <defs>
          <filter id="glass-distortion">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="1"
              seed="7"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="2" result="softNoise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="softNoise"
              scale="18"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <button
        onClick={onClick}
        className={`lg-btn ${className}`}
        style={{
          width: buttonWidth,
          height,
          borderRadius,
        }}
      >
        <span className="lg-effect" style={{ borderRadius }} />
        <span className="lg-tint" style={{ borderRadius }} />
        <span className="lg-shine" style={{ borderRadius }} />
        <span className="lg-content">{children}</span>
      </button>
    </div>
  );
};

export default LiquidGlassButton;
