import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import GlassTooltip from './GlassTooltip';
const PriceChart = ({ data }) => {
  const [selectedView, setSelectedView] = useState('original');

  return (
    <div className="dashboard-card p-6  h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">Price chart.</h3>
        <div className="flex gap-2 border border-white/10 p-0.5 rounded-lg">
          <button 
            onClick={() => setSelectedView('original')}
            className={`price-chart-btn ${selectedView === 'original' ? 'price-chart-btn-active' : 'price-chart-btn-inactive'}`}
          >
            {selectedView === 'original' && (
              <>
                <span className="price-chart-btn-effect"></span>
                <span className="price-chart-btn-tint"></span>
                <span className="price-chart-btn-shine"></span>
              </>
            )}
            <span className="price-chart-btn-content">Original</span>
          </button>
          <button 
            onClick={() => setSelectedView('depth')}
            className={`price-chart-btn ${selectedView === 'depth' ? 'price-chart-btn-active' : 'price-chart-btn-inactive'}`}
          >
            {selectedView === 'depth' && (
              <>
                <span className="price-chart-btn-effect"></span>
                <span className="price-chart-btn-tint"></span>
                <span className="price-chart-btn-shine"></span>
              </>
            )}
            <span className="price-chart-btn-content">Depth</span>
          </button>
        </div>
      </div>
      <div className="h-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
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
              tickFormatter={(value) => `$${value / 1000}k`}
              domain={[0, 40000]}
              ticks={[0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000]}
              axisLine={false}
              tickLine={false}
            />
          <Tooltip
              content={<GlassTooltip active={true} />}
            />
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke="rgb(var(--color-primary-rgb))" 
              fill="url(#priceGradient)"
              strokeWidth={2}
              dot={false}
              activeDot={{ fill: 'rgb(var(--color-primary-rgb))', r: 5, strokeWidth: 2, stroke: '#fff' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PriceChart;

