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
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-4 gap-4">
              <div className="dashboard-card p-4">
                <div className="text-gray-400 text-sm mb-1">Project Value</div>
                <div className="text-white text-2xl font-bold">$2.5M</div>
              </div>
              <div className="dashboard-card p-4">
                <div className="text-gray-400 text-sm mb-1">Funds Raised</div>
                <div className="text-white text-2xl font-bold">$1.85M</div>
              </div>
              <div className="dashboard-card p-4">
                <div className="text-gray-400 text-sm mb-1">Token Price</div>
                <div className="text-white text-2xl font-bold">$125.50</div>
              </div>
              <div className="dashboard-card p-4">
                <div className="text-gray-400 text-sm mb-1">Target APR</div>
                <div className="text-white text-2xl font-bold">8.2%</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="dashboard-card p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Capital Structure</h3>
                <div className="flex items-center justify-center h-48">
                  <div className="relative w-40 h-40">
                    <svg className="transform -rotate-90" width="160" height="160">
                      <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="20"/>
                      <circle cx="80" cy="80" r="70" fill="none" stroke="#448DCE" strokeWidth="20" strokeDasharray={`${2 * Math.PI * 70 * 0.4} ${2 * Math.PI * 70}`} strokeDashoffset={-2 * Math.PI * 70 * 0.3}/>
                      <circle cx="80" cy="80" r="70" fill="none" stroke="#5DB2FF" strokeWidth="20" strokeDasharray={`${2 * Math.PI * 70 * 0.6} ${2 * Math.PI * 70}`} strokeDashoffset={-2 * Math.PI * 70 * 0.7}/>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-white text-sm">Total Capital</div>
                      <div className="text-white text-xl font-bold">25,00,000</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#5DB2FF]"></div>
                    <span className="text-gray-400 text-sm">Developer Equity 60%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#448DCE]"></div>
                    <span className="text-gray-400 text-sm">Investor Funds 40%</span>
                  </div>
                </div>
              </div>

              <div className="dashboard-card p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Revenue Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-gray-400 text-sm">Source</span>
                    <span className="text-gray-400 text-sm">Monthly</span>
                    <span className="text-gray-400 text-sm">Annualized</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Rent</span>
                    <span className="text-white">$30,000</span>
                    <span className="text-white">$360,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Parking</span>
                    <span className="text-white">$5,000</span>
                    <span className="text-white">$60,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Amenities</span>
                    <span className="text-white">$2,000</span>
                    <span className="text-white">$24,000</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-white/10">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-white font-semibold">$37,000</span>
                    <span className="text-white font-semibold">$444,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-card p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Projected Returns</h3>
              <div className="h-64 flex items-end gap-4">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="text-white text-xs mb-2">$1234K</div>
                    <div 
                      className="w-full bg-primary rounded-t"
                      style={{ 
                        height: `${index % 2 === 0 ? 75 : 35}%`,
                        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.1) 5px, rgba(255,255,255,0.1) 10px)"
                      }}
                    ></div>
                    <div className="text-gray-400 text-xs mt-2">{month}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="dashboard-card p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Operating Expenses</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-gray-400 text-sm">Category</span>
                    <span className="text-gray-400 text-sm">Monthly</span>
                    <span className="text-gray-400 text-sm">Annual</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Maintenance</span>
                    <span className="text-white">$4,500</span>
                    <span className="text-white">$54,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Management...</span>
                    <span className="text-white">$2,000</span>
                    <span className="text-white">$24,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Insurance</span>
                    <span className="text-white">$1,500</span>
                    <span className="text-white">$18,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Utilities</span>
                    <span className="text-white">$1,000</span>
                    <span className="text-white">$12,000</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-white/10">
                    <span className="text-white font-semibold">Total Exp..</span>
                    <span className="text-white font-semibold">$9,000</span>
                    <span className="text-white font-semibold">$108,000</span>
                  </div>
                </div>
              </div>

              <div className="dashboard-card p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Profit Distribution Model</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400 text-sm">Investor Distribution</span>
                      <span className="text-white text-sm">75%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div className="h-full bg-[#448DCE] rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400 text-sm">Retained Earnings</span>
                      <span className="text-white text-sm">25%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div className="h-full bg-[#5DB2FF] rounded-full" style={{ width: "25%" }}></div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-gray-400 text-sm mb-1">Next Distribution Timeline</div>
                    <div className="text-white font-medium">October 1, 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case "Governance":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Governance Overview</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="dashboard-card p-4">
                  <div className="text-gray-400 text-sm mb-1">Project Owner</div>
                  <div className="text-white font-medium">Miami Development Corp</div>
                </div>
                <div className="dashboard-card p-4">
                  <div className="text-gray-400 text-sm mb-1">Management Entity</div>
                  <div className="text-white font-medium">RealEstate Partners LLC</div>
                </div>
                <div className="dashboard-card p-4">
                  <div className="text-gray-400 text-sm mb-1">Governance Type</div>
                  <div className="text-white font-medium">On-chain Voting</div>
                </div>
              </div>
            </div>

            <div className="dashboard-card p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Your Voting Rights</h3>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Investor Distribution</span>
                  <span className="text-white">2.5%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden mb-3">
                  <div className="h-full bg-[#5DB2FF] rounded-full" style={{ width: "2.5%" }}></div>
                </div>
                <p className="text-gray-400 text-sm">Based on your token holdings</p>
              </div>
            </div>
          </div>
        );
      
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
