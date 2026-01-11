import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import highIcon from '../assets/img/high.svg';
import CustomDropdown from './CustomDropdown';
import GlassTooltip from './GlassTooltip';

const PerformanceAnalytics = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState('totalValue');
  const [timeRange, setTimeRange] = useState('Last year');

  return (
    <div className="dashboard-card p-6">
    <div className="table-blur absolute left-1/2 transform -translate-x-1/2 top-12 h-8 w-1/2"></div>
      <div className="flex justify-between items-center mb-4 relative">
        <h3 className="text-xl font-semibold text-white">Performance Analytics</h3>
        <div className="flex items-center gap-3 absolute left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => setSelectedTab('totalValue')}
            className={selectedTab === 'totalValue' ? 'performance-tab-active' : 'performance-tab-inactive'}
          >
            Total Value
          </button>
          <button 
            onClick={() => setSelectedTab('yieldIncome')}
            className={selectedTab === 'yieldIncome' ? 'performance-tab-active' : 'performance-tab-inactive'}
          >
            Yield Income
          </button>
        </div>
        <CustomDropdown
          options={['Last year', 'Last 6 months', 'Last 3 months', 'Last month']}
          value={timeRange}
          onChange={setTimeRange}
          className="ml-auto"
        />
      </div>
      <div className="h-80 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="detailGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(var(--color-primary-rgb))" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#10101A" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="yieldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" stopOpacity={0.1} />
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
              tickFormatter={(value) => `$${value / 1000}k`}
              domain={selectedTab === 'totalValue' ? [0, 75000] : [0, 20000]}
              ticks={selectedTab === 'totalValue' ? [0, 15000, 30000, 45000, 60000, 75000] : [0, 5000, 10000, 15000, 20000]}
              axisLine={false}
              tickLine={false}
            />
           <Tooltip content={<GlassTooltip />} />

            {selectedTab === 'totalValue' ? (
              <Area 
                type="monotone" 
                dataKey="totalValue" 
                stroke="rgb(var(--color-primary-rgb))" 
                fill="url(#detailGradient)"
                strokeWidth={2}
                dot={false}
                activeDot={{ fill: 'rgb(var(--color-primary-rgb))', r: 5, strokeWidth: 2, stroke: '#fff' }}
              />
            ) : (
              <Area 
                type="monotone" 
                dataKey="yieldIncome" 
                stroke="rgba(255, 255, 255, 0.4)" 
                fill="url(#yieldGradient)"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
                activeDot={{ fill: 'rgba(255, 255, 255, 0.4)', r: 5, strokeWidth: 2, stroke: '#fff' }}
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center gap-2">
        <img src={highIcon} alt="growth" className="w-4 h-4" />
        <p className="text-gray-400 text-sm">
          This asset has grown by 25.0% since your initial investment.
        </p>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;

