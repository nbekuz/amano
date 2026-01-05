import PortfolioCard from "../components/PortfolioCard";
import RecentActivity from "../components/RecentActivity";
import PerformanceGraph from "../components/PerformanceGraph";
import HoldingsCard from "../components/HoldingsCard";
import UsdIcon from "../components/icons/usd";
import InvestIcon from "../components/icons/invest";
import BankIcon from "../components/icons/bank";
import DownIcon from "../components/icons/down";

const Portfolio = () => {
  const performanceData = [
    { month: "Jan 25", totalValue: 12500, yieldIncome: 13000 },
    { month: "Feb 25", totalValue: 15000, yieldIncome: 10000 },
    { month: "Mar 25", totalValue: 22449, yieldIncome: 18000 },
    { month: "Apr 25", totalValue: 18000, yieldIncome: 16000 },
    { month: "May 25", totalValue: 22000, yieldIncome: 19000 },
    { month: "Jun 25", totalValue: 25000, yieldIncome: 16000 },
  ];

  const recentActivities = [
    {
      icon: <UsdIcon />,
      description: "Dividend payment from Tech REIT Fund",
      amount: "+$125.50",
      status: "Completed",
      time: "2 hours ago",
    },
    {
      icon: <InvestIcon />,
      description: "Invested in Green Energy Portfolio",
      amount: "+$125.50",
      status: "Completed",
      time: "1 day ago",
    },
    {
      icon: <BankIcon />,
      description: "Bank transfer deposit",
      amount: "+$125.50",
      status: "Pending",
      time: "3 days ago",
    },
    {
      icon: <DownIcon />,
      description: "Dividend payment from Global Equity Fund",
      amount: "+$125.50",
      status: "Completed",
      time: "5 days ago",
    },
    {
      icon: <UsdIcon />,
      description: "Dividend payment from Tech REIT Fund",
      amount: "+$125.50",
      status: "Completed",
      time: "1 week ago",
    },
    {
      icon: <BankIcon />,
      description: "Bank transfer deposit",
      amount: "+$125.50",
      status: "Completed",
      time: "2 weeks ago",
    },
    {
      icon: <UsdIcon />,
      description: "Dividend payment from Global Equity Fund",
      amount: "+$125.50",
      status: "Completed",
      time: "3 weeks ago",
    },
  ];

  const holdings = [
    { id: 1, title: "Tech", currentValue: "$125000", expectedYield: "12.5%", badge: "Active" },
    {
      id: 2,
      title: "Real Estate fund",
      currentValue: "$125000",
      expectedYield: "12.5%",
      badge: "Active",
    },
    {
      id: 3,
      title: "Contemporary Art Collection",
      currentValue: "$125000",
      expectedYield: "12.5%",
      badge: "Active",
    },
    {
      id: 4,
      title: "Renewable Energy Fund",
      currentValue: "$125000",
      expectedYield: "12.5%",
      badge: "Active",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-white mb-2">My Portfolio</h1>
        <p className="text-gray-400 text-sm">
          Smart overview of your investments and growth
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col col-span-2  gap-6 items-start flex-1">
          <div className="flex w-full  gap-6">
            <PortfolioCard
              title="Total Portfolio Value"
              value="$15,774.00"
              subtitle="+1.80% Today"
              icon="coin"
              showTrend={true}
            />

            <PortfolioCard
              title="Total Yield Earned (YTD)"
              value="+$1,274.00"
              subtitle="Passive Income"
              icon="income"
              showTrend={false}
            />
          </div>
          <div className="w-full">
            <PerformanceGraph data={performanceData} />
          </div>
        </div>
        <div className="">
          <RecentActivity activities={recentActivities} />
        </div>
      </div>

      <div className="dashboard-card px-4 pt-6 pb-4 relative ">
      <div className="table-blur absolute left-1/2 transform -translate-x-1/2 h-10 w-1/2"></div>
        <h2 className="text-xl font-semibold text-white  text-center ">Your Holdings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {holdings.map((holding) => (
            <HoldingsCard
              key={holding.id}
              id={holding.id}
              title={holding.title}
              currentValue={holding.currentValue}
              expectedYield={holding.expectedYield}
              badge={holding.badge}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
