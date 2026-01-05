const ComplianceCard = () => {
  return (
    <div className="dashboard-card p-6 compliance-card">
      <h2 className="text-xl font-semibold text-white mb-2">
        Compliance & Account
      </h2>
      <p className="text-gray-400 text-sm mb-4">Verify your account</p>
      <div className="space-y-4">
        <div className="border flex justify-between items-center border-white/10 py-1.5 rounded-lg px-2">
          <div className=" mb-2 ">
            <span className="text-white font-bold text-xs">
              KYC Verification
            </span>
            <p className="text-gray-500 text-xs">Updated: Oct 15, 2025</p>
          </div>
          <span className="compliance-badge verified">Verified</span>
        </div>
        <div className="border border-white/10 py-1.5 rounded-lg px-2 flex justify-between items-center">
          <div className=" mb-2">
            <span className="text-white font-bold text-xs">2FA Security</span>

            <p className="text-gray-500 text-xs ">Updated: Oct 15, 2025</p>
          </div>
          <span className="compliance-badge not-verified">Not Verified</span>
        </div>
      </div>
    </div>
  );
};

export default ComplianceCard;
