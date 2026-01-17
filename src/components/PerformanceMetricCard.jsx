const PerformanceMetricCard = ({ label, value, subtitle }) => {
  return (
    <div className="dashboard-card p-4 relative">
      <div className="bg-primary absolute top-2 blur-performance right-2 flex h-10 w-15"></div>
      <div className="text-white/70 text-sm mb-1">{label}</div>
      <div className="text-white text-2xl font-bold">{value}</div>
      <div className="text-white/70 text-xs mt-1">{subtitle}</div>
    </div>
  );
};

export default PerformanceMetricCard;
