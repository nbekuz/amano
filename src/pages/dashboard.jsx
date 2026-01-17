import { useState } from 'react';
import { LineChart, Line, Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import StatsCard from '../components/StatsCard';
import ComplianceCard from '../components/ComplianceCard';
import PortfolioTable from '../components/PortfolioTable';
import PortfolioAllocations from '../components/PortfolioAllocations';
import CustomDropdown from '../components/CustomDropdown';
import ProfitIcon from '../components/icons/profit';
import IncomeIcon from '../components/icons/income';
import DividendIcon from '../components/icons/dividend';
import CoinIcon from '../components/icons/coin';
import UsdIcon from '../components/icons/usd';
import InvestIcon from '../components/icons/invest';
import BankIcon from '../components/icons/bank';
import DownIcon from '../components/icons/down';
import checkIcon from '../assets/img/check.svg';
import pendingIcon from '../assets/img/pending.svg';
import GlassTooltip from '../components/GlassTooltip';

const Dashboard = () => {
  const [incomeType, setIncomeType] = useState('Dividend');
  const [incomePeriod, setIncomePeriod] = useState('Monthly');

  const incomeData = [
    { month: 'Jan', income: 20000 },
    { month: 'Feb', income: 18500 },
    { month: 'Mar', income: 22449 },
    { month: 'Apr', income: 19500 },
    { month: 'May', income: 28000 },
    { month: 'Jun', income: 32000 },
  ];

  const portfolioData = [
    { name: 'REIT', value: 25, color: '#856DFC' },
    { name: 'Bond', value: 25, color: '#5DB2FF' },
    { name: 'SU', value: 20, color: '#0ED34E' },
    { name: 'REIT 2', value: 10, color: '#1BE1D5' },
    { name: 'Token', value: 20, color: '#FBB336' },
  ];

  const portfolioHoldings = [
    { asset: 'Amano REIT #02', type: 'Real Estate', value: '$15,320.00', rol: '+7.4%', allocation: 62, status: 'Active' },
    { asset: 'Solar Bond 2030', type: 'Green Bond', value: '$9,750.00', rol: '-2.20%', allocation: 39, status: 'Active' },
    { asset: 'StartUp Equity', type: 'Private Equity', value: '$12,800.00', rol: '+13.5%', allocation: 52, status: 'Active' },
    { asset: 'US Treasury Token', type: 'RWA Bond', value: '$9,710.24', rol: '+2.1%', allocation: 39, status: 'Active' },
    { asset: 'Amano REIT #03', type: 'Real Estate', value: '$15,320.00', rol: '+7.4%', allocation: 62, status: 'Active' },
  ];

  const recentActivities = [
    { icon: <UsdIcon />, description: 'Dividend payment from Tech REIT Fund', amount: '+$125.50', status: 'Completed', time: '2 hours ago' },
    { icon: <InvestIcon />, description: 'Invested in Green Energy Portfolio', amount: '+$125.50', status: 'Completed', time: '1 day ago' },
    { icon: <BankIcon />, description: 'Bank transfer deposit', amount: '+$125.50', status: 'Pending', time: '3 days ago' },
    { icon: <DownIcon />, description: 'Dividend payment from Global Equity Fund', amount: '+$125.50', status: 'Completed', time: '5 days ago' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-white-70 text-sm">Welcome back! Here is your dashboard overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatsCard 
          title="Total Portfolio" 
          value="$248,532.00" 
          percentage="+12.5%"
          icon={<CoinIcon />}
        />
        <StatsCard 
          title="Daily P&L" 
          value="$2,845.50" 
          percentage="+3.2%"
          icon={<ProfitIcon />}
        />
        <StatsCard 
          title="Total Income" 
          value="$248,532.00" 
          percentage="+8.1%"
          icon={<IncomeIcon />}
        />
        <StatsCard 
          title="Dividend Income" 
          value="$5,680.00" 
          percentage="+12.5%"
          icon={<DividendIcon />}
        />
        <ComplianceCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <PortfolioTable holdings={portfolioHoldings} />

          <div className="dashboard-card p-6 income-summary-card">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Income Summary</h2>
              <div className="flex gap-2">
                <CustomDropdown
                  options={['Dividend', 'Interest', 'Capital Gains', 'Other']}
                  value={incomeType}
                  onChange={setIncomeType}
                  isLight={true}
                  className="w-30"
                />
                <CustomDropdown
                  options={['Monthly', 'Quarterly', 'Yearly', 'All Time']}
                  value={incomePeriod}
                  onChange={setIncomePeriod}
                  isLight={true}
                />
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={incomeData}>
                  <defs>
                    <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgb(var(--color-primary-rgb))" stopOpacity={0.15} />
                      <stop offset="100%" stopColor="#10101A" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke="rgba(255, 255, 255, 0.05)" 
                    vertical={false}
                  />
                  <XAxis 
                    dataKey="month" 
                    stroke="rgba(255, 255, 255, 0.1)" 
                    tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis 
                    stroke="rgba(255, 255, 255, 0.1)"
                    tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 12 }}
                    tickFormatter={(value) => `${value / 1000}k`}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
              content={<GlassTooltip active={true} />}
            />
                  <Area 
                    type="monotone" 
                    dataKey="income" 
                    stroke="rgb(var(--color-primary-rgb))" 
                    strokeWidth={2}
                    fill="url(#incomeGradient)"
                    dot={false}
                    activeDot={{ fill: 'rgb(var(--color-primary-rgb))', r: 5, strokeWidth: 2, stroke: '#fff' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <PortfolioAllocations 
                    data={portfolioData}
            totalValue="$248,532.00"
          />

          <div className="dashboard-card p-6">
          <div className="table-blur  absolute left-1/2 transform -translate-x-1/2 top-10 h-10 w-1/2 "></div>
            <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className="recent-activity-item">
                  <div className="recent-activity-icon-wrapper">
                    <div className="recent-activity-icon-inner">
                      {activity.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm mb-1 font-normal">{activity.description}</p>
                    <p className="text-gray-400 text-xs">{activity.time}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-white text-sm font-medium">{activity.amount}</span>
                    <div className="flex items-center gap-1.5">
                      <img 
                        src={activity.status === 'Completed' ? checkIcon : pendingIcon} 
                        alt={activity.status}
                        className="w-3 h-3"
                      />
                      <span className={`text-xs font-normal ${
                            activity.status === 'Completed'
                          ? 'text-success' 
                          : 'text-warning'
                      }`}>
                          {activity.status}
                        </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

