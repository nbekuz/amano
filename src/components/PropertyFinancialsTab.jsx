import { financialsData } from "../data/propertyDetailData";
import FinancialMetricCard from "./FinancialMetricCard";
import CapitalStructure from "./CapitalStructure";
import RevenueBreakdown from "./RevenueBreakdown";
import ProjectedReturns from "./ProjectedReturns";
import OperatingExpenses from "./OperatingExpenses";
import ProfitDistributionModel from "./ProfitDistributionModel";

const PropertyFinancialsTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        {financialsData.summary.map((metric, index) => (
          <FinancialMetricCard
            key={index}
            label={metric.label}
            value={metric.value}
          />
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-6">
        <CapitalStructure data={financialsData.capitalStructure} />
        <RevenueBreakdown data={financialsData.revenueBreakdown} />
      </div>

      <div className="mt-6">
        <ProjectedReturns />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-6">
        <OperatingExpenses data={financialsData.operatingExpenses} />
        <ProfitDistributionModel data={financialsData.profitDistribution} />
      </div>
    </div>
  );
};

export default PropertyFinancialsTab;
