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
const WalletPerformanceGraph = ({ data }) => {
  const [timeframe, setTimeframe] = useState("Last 6 month");

  return (
    <div className="dashboard-card p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Performance Graph</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#8365FF]"></div>
              <span className="text-gray-400 text-sm">Fiat</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#5DB2FF]"></div>
              <span className="text-gray-400 text-sm">Crypto</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#47AA52]"></div>
              <span className="text-gray-400 text-sm">RWA tokens</span>
            </div>
          </div>
          <CustomDropdown
            options={["Last 6 month", "Last year", "All time"]}
            value={timeframe}
            onChange={setTimeframe}
            isLight={true}
            className="w-35"
          />
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255, 255, 255, 0.1)"
          />
          <XAxis dataKey="date" stroke="#9CA3AF" style={{ fontSize: "12px" }} />
          <YAxis
            stroke="#9CA3AF"
            style={{ fontSize: "12px" }}
            tickFormatter={(value) => `$${value}k`}
          />
          <Tooltip content={<GlassTooltip active={true} />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="fiat"
            stroke="#8365FF"
            strokeWidth={2}
            dot={false}
            name="Fiat"
          />
          <Line
            type="monotone"
            dataKey="crypto"
            stroke="#5DB2FF"
            strokeWidth={2}
            dot={false}
            name="Crypto"
          />
          <Line
            type="monotone"
            dataKey="rwa"
            stroke="#47AA52"
            strokeWidth={2}
            dot={false}
            name="RWA tokens"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WalletPerformanceGraph;
