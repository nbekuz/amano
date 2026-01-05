import highIcon from "../assets/img/high.svg";

const StatsCard = ({ title, value, percentage, icon }) => {
  return (
    <div className="dashboard-card p-6 relative">
      <div className="stat-card-blur absolute top-6 rounded-lg -right-3 h-12.5 w-41 ">
        {" "}
      </div>
      <div className="flex items-start justify-between mb-4">
        <div className="stats-card-icon">
          {icon || (
            <svg
              width="24"
              height="24"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2L10 6H14L11 8.5L12.5 12.5L8 10L3.5 12.5L5 8.5L2 6H6L8 2Z"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      <p
        className="text-gray-400 text-sm mb-2"
        style={{ fontSize: "12.6px", fontWeight: 500, lineHeight: "150%" }}
      >
        {title}
      </p>
      <p
        className="text-white mb-2"
        style={{ fontSize: "25.21px", fontWeight: 700, lineHeight: "125%" }}
      >
        {value}
      </p>
      <div className="flex items-center gap-1.5">
        <img src={highIcon} alt="trend up" className="w-3 h-3" />
        <p
          className="text-white"
          style={{ fontSize: "12.6px", fontWeight: 500, lineHeight: "150%" }}
        >
          {percentage}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
