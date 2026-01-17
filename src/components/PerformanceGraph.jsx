import { useState } from "react";
import {
  LineChart,
  Line,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomDropdown from "./CustomDropdown";
import GlassTooltip from "./GlassTooltip";

const PerformanceGraph = ({ data }) => {
  const [timeRange, setTimeRange] = useState("Last 6 month");

  return (
    <div className="dashboard-card p-6 relative ">
      <div className="graph-blur w-85 h-12 absolute top-5 left-1/2 transform -translate-x-1/2 flex">
        {" "}
      </div>
      <div className="flex justify-between items-center mb-4 w-full relative">
        <h2 className="text-xl font-semibold text-white">Performance Graph</h2>
        <div className="flex items-center gap-4 absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-gray-400 text-sm">Total Value</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <span className="text-gray-400 text-sm">Yield Income</span>
          </div>
        </div>
        <CustomDropdown
          options={["Last 6 month", "Last year", "Last 3 months", "Last month"]}
          value={timeRange}
          onChange={setTimeRange}
          className="ml-auto"
          isLight={true}
        />
      </div>
      <div className="h-104">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="totalValueGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="rgb(var(--color-primary-rgb))"
                  stopOpacity={0.15}
                />
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
              tick={{ fill: "rgba(255, 255, 255, 0.5)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              stroke="rgba(255, 255, 255, 0.1)"
              tick={{ fill: "rgba(255, 255, 255, 0.5)", fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              content={<GlassTooltip active={true} />}
            />

            <Area
              type="monotone"
              dataKey="totalValue"
              stroke="rgb(var(--color-primary-rgb))"
              fill="url(#totalValueGradient)"
              strokeWidth={2}
              dot={false}
              activeDot={{
                fill: "rgb(var(--color-primary-rgb))",
                r: 5,
                strokeWidth: 2,
                stroke: "#fff",
              }}
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
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceGraph;
