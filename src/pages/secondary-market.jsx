import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CoinIcon from '../components/icons/coin';
import nImage from '../assets/img/n.png';
import highIcon from '../assets/img/high.svg';
import locIcon from '../assets/img/loc.svg';

const SecondaryMarket = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'Real estate', 'Energy', 'Commodities', 'Art', 'Startups', 'Bond'];

  const stats = [
    {
      icon: <CoinIcon />,
      label: 'Total Volume',
      value: '$3.4M',
      change: '+12.5%',
    },
    {
      icon: <CoinIcon />,
      label: 'Active Traders',
      value: '1,247',
      change: '+8.2%',
    },
    {
      icon: <CoinIcon />,
      label: 'Total Trades',
      value: '3,821',
      change: '+15.3%',
    },
  ];

  const assets = [
    {
      id: 1,
      image: nImage,
      name: 'Tech Startup Portf...',
      location: 'Miami Beach, FL',
      price: '$100',
      change24h: '2.35%',
      high24h: '$43.20',
      low24h: '$41.80',
      volume: '$1250K',
    },
    {
      id: 2,
      image: nImage,
      name: 'Green Energy Fund',
      location: 'Miami Beach, FL',
      price: '$100',
      change24h: '2.35%',
      high24h: '$43.20',
      low24h: '$41.80',
      volume: '$1250K',
    },
    {
      id: 3,
      image: nImage,
      name: 'Tech Fund Alpha',
      location: 'Miami Beach, FL',
      price: '$100',
      change24h: '2.35%',
      high24h: '$43.20',
      low24h: '$41.80',
      volume: '$1250K',
    },
    {
      id: 4,
      image: nImage,
      name: 'Healthcare Innova...',
      location: 'Miami Beach, FL',
      price: '$100',
      change24h: '2.35%',
      high24h: '$43.20',
      low24h: '$41.80',
      volume: '$1250K',
    },
    {
      id: 5,
      image: nImage,
      name: 'Tech Startup Portf...',
      location: 'Miami Beach, FL',
      price: '$100',
      change24h: '2.35%',
      high24h: '$43.20',
      low24h: '$41.80',
      volume: '$1250K',
    },
    {
      id: 6,
      image: nImage,
      name: 'Green Energy Fund',
      location: 'Miami Beach, FL',
      price: '$100',
      change24h: '2.35%',
      high24h: '$43.20',
      low24h: '$41.80',
      volume: '$1250K',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-white mb-2">Secondary Market</h1>
        <p className="text-gray-400 text-sm">Trade assets with live order books and real-time pricing</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="dashboard-card p-6 relative">
            <div className="stat-card-blur absolute top-6 rounded-lg -right-3 h-12.5 w-41"></div>
            <div className="flex items-center gap-4">
              <div className="stats-card-icon">
                {stat.icon}
              </div>
              <div className="flex-1">
                <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
                <div className="text-white font-bold text-2xl mb-1">{stat.value}</div>
                <div className="flex items-center gap-1 text-success text-sm">
                  <img src={highIcon} alt="trend" className="w-4 h-4" />
                  <span>{stat.change}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Available Assets */}
      <div className="dashboard-card p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Available Assets</h2>
        </div>

        {/* Category Filters and Search */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category.toLowerCase()
                    ? 'bg-primary/15 text-primary'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Q Search..."
                className="w-full px-4 py-2 pl-10 bg-bg-dark border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Assets Table */}
        <div className="space-y-2">
          {/* Table Header */}
          <div className="portfolio-table-head grid grid-cols-7 gap-4 py-3 px-4">
            <div className="text-gray-400 text-sm font-medium">Asset</div>
            <div className="text-gray-400 text-sm font-medium">Price</div>
            <div className="text-gray-400 text-sm font-medium">24h Change</div>
            <div className="text-gray-400 text-sm font-medium">24h High</div>
            <div className="text-gray-400 text-sm font-medium">24h Low</div>
            <div className="text-gray-400 text-sm font-medium">Volume</div>
            <div className="text-gray-400 text-sm font-medium">Action</div>
          </div>

          {/* Table Rows */}
          {assets.map((asset) => (
            <div key={asset.id} className="portfolio-table-row grid grid-cols-7 gap-4 py-4 px-4">
              <div>
                <div className="flex items-center gap-3">
                  <img src={asset.image} alt={asset.name} className="w-10 h-10 rounded-lg object-cover" />
                  <div>
                    <div className="text-white font-medium">{asset.name}</div>
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <img src={locIcon} alt="location" className="w-3 h-3 opacity-70" />
                      <span>{asset.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-white font-medium flex items-center">{asset.price}</div>
              <div className="flex items-center">
                <div className="flex items-center gap-1 text-success">
                  <img src={highIcon} alt="trend" className="w-4 h-4" />
                  <span>{asset.change24h}</span>
                </div>
              </div>
              <div className="text-white flex items-center">{asset.high24h}</div>
              <div className="text-white flex items-center">{asset.low24h}</div>
              <div className="text-white flex items-center">{asset.volume}</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate(`/property/${asset.id}`)}
                  className="px-4 py-2 bg-bg-dark border border-gray-600 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors"
                >
                  Details
                </button>
                <button
                  onClick={() => navigate(`/trading/${asset.id}`)}
                  className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
                >
                  Trade
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondaryMarket;

