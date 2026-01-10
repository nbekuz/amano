import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MarketplaceDropdown from "../components/MarketplaceDropdown";
import FilterIcon from "../components/icons/filter";
import HeartIcon from "../components/icons/heart";
import Badge from "../components/Badge";
import AdvancedFilters from "../components/AdvancedFilters";
import locIcon from "../assets/img/loc.svg";
import nImage from "../assets/img/n.png";
import LiquidGlassButton from "../components/LiquidGlassButton";
import CustomDropdown from "../components/CustomDropdown";
import BtnGlass from "../components/BtnGlass";

const Marketplace = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("Highest Price");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const filterButtonRef = useRef(null);

  const categories = [
    "All",
    "Real estate",
    "Energy",
    "Commodities",
    "Art",
    "Startups",
    "Bond",
  ];

  const assets = [
    {
      id: 1,
      image: nImage,
      category: "tech",
      title: "Tech Startup Portfolio",
      location: "San Francisco, CA",
      tokenPrice: "$500",
      expectedYield: "25%",
      minInvestment: "$5,000",
      riskLevel: "High risk",
      funded: 60,
    },
    {
      id: 2,
      image: nImage,
      category: "real estate",
      title: "Luxury Apartment Complex",
      location: "San Francisco, CA",
      tokenPrice: "$500",
      expectedYield: "25%",
      minInvestment: "$5,000",
      riskLevel: "Medium",
      funded: 60,
    },
    {
      id: 3,
      image: nImage,
      category: "energy",
      title: "Renewable Energy Fund",
      location: "San Francisco, CA",
      tokenPrice: "$500",
      expectedYield: "25%",
      minInvestment: "$5,000",
      riskLevel: "Low",
      funded: 60,
    },
    {
      id: 4,
      image: nImage,
      category: "art",
      title: "Contemporary Art Collection",
      location: "San Francisco, CA",
      tokenPrice: "$500",
      expectedYield: "25%",
      minInvestment: "$5,000",
      riskLevel: "Low",
      funded: 60,
    },
    {
      id: 5,
      image: nImage,
      category: "tech",
      title: "Tech Startup Portfolio",
      location: "San Francisco, CA",
      tokenPrice: "$500",
      expectedYield: "25%",
      minInvestment: "$5,000",
      riskLevel: "High risk",
      funded: 60,
    },
    {
      id: 6,
      image: nImage,
      category: "real estate",
      title: "Luxury Apartment Complex",
      location: "San Francisco, CA",
      tokenPrice: "$500",
      expectedYield: "25%",
      minInvestment: "$5,000",
      riskLevel: "Medium",
      funded: 60,
    },
    {
      id: 7,
      image: nImage,
      category: "energy",
      title: "Renewable Energy Fund",
      location: "San Francisco, CA",
      tokenPrice: "$500",
      expectedYield: "25%",
      minInvestment: "$5,000",
      riskLevel: "Low",
      funded: 60,
    },
    {
      id: 8,
      image: nImage,
      category: "art",
      title: "Contemporary Art Collection",
      location: "San Francisco, CA",
      tokenPrice: "$500",
      expectedYield: "25%",
      minInvestment: "$5,000",
      riskLevel: "Low",
      funded: 60,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl font-bold text-white mb-2">
            Asset Marketplace
          </h1>
          <p className="text-gray-400 text-sm">
            Invest in tokenized real-world assets
          </p>
        </div>
        <div className="flex gap-2">
          <CustomDropdown
            options={[
              "Highest Yield",
              "Lowest Yield",
              "Highest Price",
              "Lowest Price",
              "Most Funded",
              "Newest",
            ]}
            value={sortBy}
            onChange={setSortBy}
          />

          <BtnGlass width={92} height={36} radius="8">
            <div className="flex items-center gap-2 px-4 ">
              <FilterIcon />
              Filter
            </div>
          </BtnGlass>
        </div>
      </div>

      <div className="w-full">
        <div className="flex gap-2 overflow-x-auto border border-white/10 rounded-lg p-1">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.toLowerCase();
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`category-btn px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  isSelected ? "btn-glass" : "category-btn-inactive"
                }`}
              >
                {isSelected && (
                  <>
                    <span className="btn-glass-bg" />
                    <span className="btn-glass-border" />
                  </>
                )}
                <span
                  className={`category-btn-content ${
                    isSelected ? "text-white" : "text-white/70"
                  }`}
                >
                  {category}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {assets.map((asset) => (
          <div key={asset.id} className="dashboard-card p-0 overflow-hidden">
            <div className="relative h-48">
              <img
                src={asset.image}
                alt={asset.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <Badge label={asset.category} />
              </div>
              <div className="absolute top-3 right-3">
                <LiquidGlassButton
                  width={24}
                  height={24}
                  radius="full"
                  onClick={() => {
                    const newFavorites = new Set(favorites);
                    if (newFavorites.has(asset.id)) {
                      newFavorites.delete(asset.id);
                    } else {
                      newFavorites.add(asset.id);
                    }
                    setFavorites(newFavorites);
                  }}
                >
                  <HeartIcon filled={favorites.has(asset.id)} />
                </LiquidGlassButton>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white text-xs">Funded</span>
                  <span className="text-white text-xs font-medium">
                    {asset.funded}%
                  </span>
                </div>
                <div className="w-full bg-white/10 backdrop-blur-sm rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-white h-full rounded-full transition-all"
                    style={{ width: `${asset.funded}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <h3 className="text-white text-lg font-semibold">
                {asset.title}
              </h3>
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <img
                  src={locIcon}
                  alt="location"
                  className="w-4 h-4 opacity-70"
                />
                <span>{asset.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-xs">Token Price</p>
                  <p className="text-white font-bold">{asset.tokenPrice}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Expected Yield</p>
                  <p className="text-success font-bold">
                    {asset.expectedYield}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-xs">
                  Min. {asset.minInvestment}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {asset.riskLevel === "High risk" ? (
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">
                    High risk
                  </span>
                ) : (
                  <span className="px-2 py-1 bg-white/6 text-white/70 rounded text-xs font-medium">
                    {asset.riskLevel}
                  </span>
                )}
              </div>
              <div className="flex gap-2 pt-2">
                <button className="flex-1 px-4 py-2 bg-bg-dark border border-gray-600 text-gray-300 rounded-3xl text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors">
                  View details
                </button>
                <button
                  onClick={() => navigate(`/property/${asset.id}`)}
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-3xl text-sm font-medium hover:bg-primary-hover transition-colors"
                >
                  Invest Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AdvancedFilters
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
        buttonRef={filterButtonRef}
        onApply={(filters) => {
          console.log("Applied filters:", filters);
        }}
        onReset={() => {
          console.log("Filters reset");
        }}
      />
    </div>
  );
};

export default Marketplace;
