import sa from "../assets/img/sa.svg";
const SidebarLiquidGlassItem = ({ children, onClick, isActive = false }) => {
  return (
    <button
      onClick={onClick}
      className={`sidebar-lg-item ${isActive ? "sidebar-lg-active" : ""}`}
      style={{
        borderRadius: "10px",
        "--r": "10px",
        "--eat": "4.5px",
      }}
    >
      {isActive && (
        <>
          <span class="glass-border"></span>
          <span className="btn-glass-bg" />
          <img src={sa} alt="sa" className="w-full h-full absolute top-0 left-0" />
        </>
      )}

      <span className="sidebar-lg-content">{children}</span>
    </button>
  );
};

export default SidebarLiquidGlassItem;
