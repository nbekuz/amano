import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropertyImageHeader from "../components/PropertyImageHeader";
import OverviewSection from "../components/OverviewSection";
import PropertyTabs from "../components/PropertyTabs";
import DescriptionSection from "../components/DescriptionSection";
import FeaturesSection from "../components/FeaturesSection";
import LocationSection from "../components/LocationSection";
import InvestmentOverview from "../components/InvestmentOverview";
import PropertyDeveloper from "../components/PropertyDeveloper";
import PropertyPerformanceTab from "../components/PropertyPerformanceTab";
import PropertyDocumentsTab from "../components/PropertyDocumentsTab";
import PropertyFinancialsTab from "../components/PropertyFinancialsTab";
import PropertyGovernanceTab from "../components/PropertyGovernanceTab";
import {
  performanceData,
  performanceMetrics,
  performanceBreakdown,
  distributionSchedule,
} from "../data/propertyDetailData";
import BedIcon from "../components/icons/bed";
import BathIcon from "../components/icons/bath";
import ZoominIcon from "../components/icons/zoomin";
import KitchenIcon from "../components/icons/kitchen";
import ParkIcon from "../components/icons/park";
import FurnitureIcon from "../components/icons/furniture";
import BalconyIcon from "../components/icons/balcony";
import DoorIcon from "../components/icons/door";
import nImage from "../assets/img/n.png";

const PropertyDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState("Details");
  const [isSaved, setIsSaved] = useState(false);

  const overviewStats = [
    { icon: <BedIcon />, value: "4", label: "Bedroom" },
    { icon: <BathIcon />, value: "7", label: "Bathroom" },
    { icon: <ZoominIcon />, value: "20000", label: "SQ FT" },
    { icon: <KitchenIcon />, value: "4", label: "Kitchen" },
    { icon: <ParkIcon />, value: "2", label: "Parking" },
    { icon: <FurnitureIcon />, value: "All", label: "Furniture" },
    { icon: <BalconyIcon />, value: "2", label: "Balcony" },
    { icon: <DoorIcon />, value: "8", label: "Doors" },
  ];

  const features = [
    "Bedroom: 5",
    "Bathroom: 4",
    "Smart Home System",
    "Monitored Alarm System",
    "Secure Parking",
    "24-Hour Security",
    "Natural Light",
    "Well-Lit Streets",
    "Granite Countertops",
    "Stainless Steel Appliances",
    "Walk-In Closet",
    "Fireplace",
  ];


  const renderTabContent = () => {
    switch (selectedTab) {
      case "Details":
        return (
          <>
            <DescriptionSection description="Explore extensive property listings, connect with professional agents, and stay informed about real estate trends through our comprehensive blog. Discover your perfect property investment opportunity with detailed insights and expert guidance." />
            <FeaturesSection features={features} />
            <LocationSection />
          </>
        );
      
      case "Performance":
        return (
          <PropertyPerformanceTab
            performanceMetrics={performanceMetrics}
            performanceData={performanceData}
            performanceBreakdown={performanceBreakdown}
            distributionSchedule={distributionSchedule}
          />
        );
      
      case "Documents":
        return <PropertyDocumentsTab />;
      
      case "Financials":
        return <PropertyFinancialsTab />;
      
      case "Governance":
        return <PropertyGovernanceTab />;
      
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <button
          onClick={() => navigate("/marketplace")}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to holding
        </button>
      </div>

      <PropertyImageHeader
        image={nImage}
        badges={["raising", "infrastructure"]}
        title="Luxury Apartment Complex"
        location="10425 Tabor St, Los Angeles, America"
        isSaved={isSaved}
        onSaveToggle={() => setIsSaved(!isSaved)}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <OverviewSection stats={overviewStats} />

          <PropertyTabs
            tabs={[
              "Details",
              "Performance",
              "Documents",
              "Financials",
              "Governance",
            ]}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
          />

          {renderTabContent()}
        </div>

        <div className="space-y-6 ">
          <InvestmentOverview
            totalRaised="35.46%"
            tokenPrice="125.50"
            progress="$124110 / $350,000"
            tokenAvailable="120 token available"
            roi="12.5%"
            apr="8.2%"
            requiredFunds="$350,000"
            targetDate="Dec 31, 2025"
            distribution="Quarterly"
            minInvestment="125.50"
            currentAmount={124110}
            targetAmount={350000}
          />

            <PropertyDeveloper
              name="ITO Agency"
              website="itodigitalagency.com"
              foundationYear="2018"
              completedProjects="4"
            />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
