const FinancialMetricCard = ({ label, value }) => {
  return (
    <div className="dashboard-card p-4">
      <div className="text-gray-400 text-sm mb-1">{label}</div>
      <div className="text-white text-2xl font-bold">{value}</div>
    </div>
  );
};

export default FinancialMetricCard;
