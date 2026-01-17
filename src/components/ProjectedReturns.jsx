import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 65 },
  { month: "Feb", value: 28 },
  { month: "Mar", value: 52 },
  { month: "Apr", value: 43 },
  { month: "May", value: 68 },
  { month: "Jun", value: 30 },
];

const CustomLabel = ({ x, y, width, height, value }) => {
  if (!height || height <= 0) return null;

  return (
    <text
      x={x + width / 2}          
      y={y - 20}       
      textAnchor="middle"
      dominantBaseline="middle"
      fill="#fff"
      fontSize="13"
      fontWeight="600"
    >
      ${value}K
    </text>
  );
};


const MaskedBar = ({ x, y, width, height }) => {
  if (!height || height <= 0) return null;
  const uid = `stripe-${Math.round(x)}-${Math.round(y)}`;

  return (
    <g>
      <defs>
        <pattern
          id={`pattern-${uid}`}
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <rect
            width="2"
            height="10"
            fill="white"
          />
        </pattern>


        <mask id={`mask-${uid}`}>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#pattern-${uid})`}
          />
        </mask>
      </defs>

      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={6}
        fill="#7C6BFF"
        mask={`url(#mask-${uid})`}
      />
    </g>
  );
};

const ProjectedReturns = () => {
  return (
    <div className="dashboard-card p-6">
      <h3 className="text-xl font-semibold text-white mb-4">
        Projected Returns
      </h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 30, right: 10, left: 0, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.06)"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
            />

            <YAxis
              domain={[0, 80]}
              ticks={[0, 20, 40, 60, 80]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
              tickFormatter={(v) => `${v}k`}
            />

            <Bar
              dataKey="value"
              shape={(props) => <MaskedBar {...props} />}
              isAnimationActive={false}
            >
              <LabelList content={<CustomLabel />} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectedReturns;
