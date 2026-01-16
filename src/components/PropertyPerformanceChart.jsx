import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomDropdown from "./CustomDropdown";
import GlassTooltip from "./GlassTooltip";

const PropertyPerformanceChart = ({ data }) => {
  const [timeRange, setTimeRange] = useState("Last 6 months");

  return (
    <div className="dashboard-card p-6 relative">
      <div className="table-blur absolute left-1/2 transform -translate-x-1/2 top-12 h-8 w-1/2"></div>
      <div className="flex justify-between w-full items-center mb-6 relative">
        <h3 className="text-xl font-semibold text-white">
          Performance Analytics
        </h3>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-gray-400 text-sm">Total Value</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white/40"></div>
              <span className="text-gray-400 text-sm">Yield Income</span>
            </div>
          </div>
          <CustomDropdown
            options={[
              "Last 6 months",
              "Last year",
              "Last 3 months",
              "Last month",
            ]}
            value={timeRange}
            onChange={setTimeRange}
          />
        </div>
      </div>
      <div className="h-80 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <defs>
              <linearGradient id="totalValueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="rgb(var(--color-primary-rgb))"
                  stopOpacity={0.2}
                />
                <stop offset="100%" stopColor="#10101A" stopOpacity={0} />
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
              tick={{ fill: "rgba(255, 255, 255, 0.5)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              stroke="rgba(255, 255, 255, 0.1)"
              tick={{ fill: "rgba(255, 255, 255, 0.5)", fontSize: 12 }}
              tickFormatter={(value) => `${value}`}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<GlassTooltip active={true} />} />
            <Legend 
              wrapperStyle={{ paddingTop: "30px", paddingBottom: "10px" }}
              iconType="circle"
            />
            <Line
              type="monotone"
              dataKey="totalValue"
              stroke="rgb(var(--color-primary-rgb))"
              strokeWidth={2}
              dot={false}
              activeDot={{
                fill: "rgb(var(--color-primary-rgb))",
                r: 5,
                strokeWidth: 2,
                stroke: "#fff",
              }}
              name="Total Value"
            />
            <Line
              type="monotone"
              dataKey="yieldIncome"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              activeDot={{
                fill: "rgba(255, 255, 255, 0.4)",
                r: 5,
                strokeWidth: 2,
                stroke: "#fff",
              }}
              name=""
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PropertyPerformanceChart;
