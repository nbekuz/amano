const BtnGlass = ({
  children,
  onClick,
  className = "",
  width,
  height,
  radius,
}) => {
  const style = {};
  if (width) style.width = width;
  if (height) style.height = height;
  if (radius) style.borderRadius = radius;

  return (
    <button
      onClick={onClick}
      className={`btn-glass  ${className}`}
      style={style}
    >
      <span className="btn-glass-bg" />
      <span className="btn-glass-border" />
      <span className="btn-glass-content text-xs absolute ">{children}</span>
    </button>
  );
};

export default BtnGlass;
