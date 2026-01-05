import { useParams, useNavigate } from 'react-router-dom';
import nImage from '../assets/img/n.png';
import PortfolioHeaderCard from '../components/PortfolioHeaderCard';
import KeyMetrics from '../components/KeyMetrics';
import PerformanceAnalytics from '../components/PerformanceAnalytics';
import TokenInformation from '../components/TokenInformation';
import PayoutHistory from '../components/PayoutHistory';
import OwnershipBreakdown from '../components/OwnershipBreakdown';
import LegalDocuments from '../components/LegalDocuments';
import TransactionHistory from '../components/TransactionHistory';
import CurrentIcon from '../components/icons/current';
import DownIcon from '../components/icons/down';
import YieldIcon from '../components/icons/yield';
import IncomeIcon from '../components/icons/income';
import CalendarIcon from '../components/icons/calendar';
import DepositIcon from "../components/icons/deposit";

const HoldingsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Performance Graph data - wavy line matching the image
  const performanceData = [
    { month: "Jan", totalValue: 45000, yieldIncome: 0 },
    { month: "Feb", totalValue: 27000, yieldIncome: 5000 },
    { month: "Mar", totalValue: 32000, yieldIncome: 8000 },
    { month: "Apr", totalValue: 25000, yieldIncome: 6000 },
    { month: "May", totalValue: 30000, yieldIncome: 10000 },
    { month: "Jun", totalValue: 42000, yieldIncome: 8000 },
    { month: "Jul", totalValue: 50000, yieldIncome: 15000 },
    { month: "Aug", totalValue: 62000, yieldIncome: 20000 },
    { month: "Sep", totalValue: 58000, yieldIncome: 18000 },
    { month: "Oct", totalValue: 45000, yieldIncome: 10000 },
    { month: "Nov", totalValue: 60000, yieldIncome: 15000 },
    { month: "Dec", totalValue: 72000, yieldIncome: 20000 },
  ];

  const metrics = [
    { label: "Current Value", value: "$52,450", icon: CurrentIcon },
    { label: "Initial Investment", value: "$50,000", icon: DepositIcon },
    { label: "Total Yield Earned", value: "$3,240", icon: YieldIcon },
    { label: "Expected Annual Yield", value: "7.5%", icon: IncomeIcon },
    { label: "Next Payout Date", value: "Dec 15", icon: CalendarIcon },
  ];

  const tokenData = {
    symbol: "TECH-SF-001",
    tokensHeld: "500 tokens",
    price: "$100.00",
    totalSupply: "10,000 tokens",
    contractAddress: "0x742d35Cc6634C0532925a3b844Bc...",
  };

  const payoutHistory = [
    { date: "15 Nov 2024", amount: "$270", type: "Dividend", status: "Completed" },
    { date: "15 Oct 2024", amount: "$270", type: "Dividend", status: "Completed" },
    { date: "15 Sep 2024", amount: "$270", type: "Dividend", status: "Completed" },
    { date: "15 Aug 2024", amount: "$270", type: "Dividend", status: "Completed" },
    { date: "15 Jul 2024", amount: "$270", type: "Dividend", status: "Completed" },
  ];

  const transactionHistory = [
    { date: "15 Nov 2024", type: "Buy", amount: "$50,000", status: "Completed" },
    { date: "15 Oct 2024", type: "Yield", amount: "$50,000", status: "Completed" },
    { date: "15 Sep 2024", type: "Buy", amount: "$50,000", status: "Completed" },
    { date: "15 Aug 2024", type: "Yield", amount: "$50,000", status: "Completed" },
    { date: "15 Jul 2024", type: "Buy", amount: "$50,000", status: "Completed" },
  ];

  const legalDocuments = [
    { name: "Purchase Agreement", status: "Available" },
    { name: "Valuation Report", status: "Available" },
    { name: "Custodian Certificate", status: "Available" },
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div>
        <button 
          onClick={() => navigate('/portfolio')}
          className="text-gray-400 hover:text-white mb-2 text-sm"
        >
          ← Back to holding
        </button>
      </div>

      {/* Portfolio Header Card */}
      <PortfolioHeaderCard
        id={id}
        image={nImage}
        badges={["Active", "Medium Risk", "Tech"]}
        title="Tech Startup Portfolio"
        location="San Francisco, CA"
        description="Diversified portfolio of early-stage tech companies in Silicon Valley, focusing on AI, blockchain, and sustainable technologies."
      />

      {/* Key Metrics */}
      <KeyMetrics metrics={metrics} />

      {/* Performance Analytics */}
      <PerformanceAnalytics data={performanceData} />

      {/* Detailed Information Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <TokenInformation tokenData={tokenData} />
          <PayoutHistory payouts={payoutHistory} onViewAll={() => console.log('View all payouts')} />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <OwnershipBreakdown ownership={10} totalInvestors={42} />
          <LegalDocuments documents={legalDocuments} />
          <TransactionHistory transactions={transactionHistory} onViewAll={() => console.log('View full history')} />
        </div>
      </div>
    </div>
  );
};

export default HoldingsDetail;
