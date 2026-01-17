import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const CapitalStructure = ({ data }) => {
  const pieData = [
    { name: 'Developer Equity', value: data.developerEquity, color: '#5DB2FF' },
    { name: 'Investor Funds', value: data.investorFunds, color: '#448DCE' },
  ];

  return (
    <div className="dashboard-card p-6 relative">
      <div className="stat-card-blur3  absolute right-1 top-10 h-16 w-1/2"></div>
      <h3 className="text-xl font-semibold text-white mb-4">Capital Structure</h3>
      <div className="h-44 mb-6 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart className=''>
            <defs>
              <filter id="capitalInnerShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3.15" result="blur" />
                <feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
                <feFlood floodColor="#000000" floodOpacity="0.5" result="color" />
                <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
                <feComposite in="SourceGraphic" in2="shadow" operator="over" />
              </filter>
            </defs>
            <Pie
              data={pieData}
              cx="50%"
              cy="100%"
              startAngle={180}
              endAngle={0}
              innerRadius={110}
              outerRadius={150}
              paddingAngle={0.5}
              dataKey="value"
              stroke="none"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  filter="url(#capitalInnerShadow)"
                  stroke="none"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 translate-y-1/4 flex flex-col items-center gap-1">
          <p className="text-white/70 text-sm">Total Capital</p>
          <p className="text-xl font-bold text-white">{data.totalCapital}</p>
        </div>
      </div>
      <div className="space-y-2">
        {pieData.map((item, index) => (
          <div key={index} className="w-full  flex justify-between items-center h-9.5 bg-white-10/6 border-white/15 px-3 border rounded">
            <div className="flex items-center gap-2">
              <span className="text-white text-sm font-normal">{item.name}</span>
            </div>
            <span className={`${index === 0 ? 'text-[#5DB2FF]' : 'text-[#1BE1D5]'} text-sm font-normal`}>{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CapitalStructure;
