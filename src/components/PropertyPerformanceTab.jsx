import PerformanceMetricCard from "./PerformanceMetricCard";
import PropertyPerformanceChart from "./PropertyPerformanceChart";
import PerformanceBreakdownTable from "./PerformanceBreakdownTable";
import NextDistributionSchedule from "./NextDistributionSchedule";

const PropertyPerformanceTab = ({
  performanceMetrics,
  performanceData,
  performanceBreakdown,
  distributionSchedule,
}) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        {performanceMetrics.map((metric, index) => (
          <PerformanceMetricCard
            key={index}
            label={metric.label}
            value={metric.value}
            subtitle={metric.subtitle}
          />
        ))}
      </div>

      <div className="mt-6">
        <PropertyPerformanceChart data={performanceData} />
      </div>

      <div className="mt-6">
        <PerformanceBreakdownTable data={performanceBreakdown} />
      </div>

      <div className="mt-6">
        <NextDistributionSchedule
          payoutDate={distributionSchedule.payoutDate}
          expectedYield={distributionSchedule.expectedYield}
          distributionType={distributionSchedule.distributionType}
        />
      </div>
    </div>
  );
};

export default PropertyPerformanceTab;
