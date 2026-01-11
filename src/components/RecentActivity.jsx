import checkIcon from "../assets/img/check.svg";
import pendingIcon from "../assets/img/pending.svg";
import LiquidGlassButton from "./LiquidGlassButton";

const RecentActivity = ({ activities }) => {
  return (
    <div className="dashboard-card p-6 h-full">
      <div className="bg-primary rotate-45 blur-3xl  absolute right-4 top-8 h-12 w-40 "></div>
      <div className="bg-primary -rotate-45 blur-3xl  absolute left-4 bottom-8 h-12 w-40 "></div>
      <h2 className="text-lg font-semibold text-white mb-3">Recent Activity </h2>
      <div className="flex flex-col gap-1.5"> 
        {activities.map((activity, index) => (
            <div key={index} className="recent-activity-item">
              <LiquidGlassButton width={40} height={40} radius="8" >
              <div className="recent-activity-icon-inner">{activity.icon}</div>
            </LiquidGlassButton>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm mb-1 font-normal">
                {activity.description}
              </p>
              <p className="text-gray-400 text-xs">{activity.time}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-white text-sm font-medium">
                {activity.amount}
              </span>
              <div className="flex items-center gap-1.5">
                <img
                  src={
                    activity.status === "Completed" ? checkIcon : pendingIcon
                  }
                  alt={activity.status}
                  className="w-3 h-3"
                />
                <span
                  className={`text-xs font-normal ${
                    activity.status === "Completed"
                      ? "text-success"
                      : "text-warning"
                  }`}
                >
                  {activity.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
