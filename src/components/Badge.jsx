import LiquidGlassButton from "./LiquidGlassButton";
const Badge = ({ label, variant = "" }) => {
  const baseClasses =
    "px-2 py-0.5 rounded-full text-xs font-medium backdrop-blur-sm border";

  const variantClasses = {
    default: "bg-white/20 border-white/20 text-white",
    active: "bg-white/20 border-white/20 text-white",
    risk: "bg-white/20 border-white/20 text-white",
    tech: "bg-white/20 border-white/20 text-white",
  };

  return (
    <>
      {variant === "default" ? (
        <div className="flex items-center justify-center w-auto h-6 border border-white-100/10 rounded-xl">
          <span className="text-xs px-2.5">{label}</span>
        </div>
      ) : variant === "filled" ? (
        <div className="flex items-center justify-center w-auto h-6 bg-white-100/10  text-white rounded-xl">
          <span className="text-xs px-2.5">{label}</span>
        </div>
      ) : (
        <LiquidGlassButton width="auto" height={20} radius="12">
          <span className="text-xs px-2.5">{label}</span>
        </LiquidGlassButton>
      )}
    </>
  );
};

export default Badge;
