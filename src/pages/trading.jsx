import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import nImage from "../assets/img/n.png";
import highIcon from "../assets/img/high.svg";
import Badge from "../components/Badge";
import locIcon from "../assets/img/loc.svg";
import PriceChart from "../components/PriceChart";
import OrderBook from "../components/OrderBook";
import BuySellPanel from "../components/BuySellPanel";
import PriceInfoCards from "../components/PriceInfoCards";  
import xIcon from "../assets/img/x.svg";
import editIcon from "../assets/img/edit.svg";

const Trading = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('orders');
  const [selectedOrderType, setSelectedOrderType] = useState('limit');

  // Price chart data
  const priceData = [
    { month: "Jan", price: 22000 },
    { month: "Feb", price: 21000 },
    { month: "Mar", price: 23000 },
    { month: "Apr", price: 20000 },
    { month: "May", price: 19000 },
    { month: "Jun", price: 17000 },
    { month: "Jul", price: 17000 },
    { month: "Aug", price: 25000 },
    { month: "Sep", price: 30000 },
    { month: "Oct", price: 29000 },
    { month: "Nov", price: 28000 },
    { month: "Dec", price: 29000 },
  ];

  const sellOrders = [
    { price: 42.9, amount: 125.5, total: 5382.75 },
    { price: 42.85, amount: 200.0, total: 8570.0 },
    { price: 42.8, amount: 150.0, total: 6420.0 },
    { price: 42.75, amount: 300.0, total: 12825.0 },
    { price: 42.7, amount: 100.0, total: 4270.0 },
    { price: 42.65, amount: 250.0, total: 10662.5 },
    { price: 42.6, amount: 180.0, total: 7668.0 },
    { price: 42.55, amount: 220.0, total: 9361.0 },
  ];

  const buyOrders = [
    { price: 42.9, amount: 150.0, total: 6435.0 },
    { price: 42.85, amount: 200.0, total: 8570.0 },
    { price: 42.8, amount: 100.0, total: 4280.0 },
    { price: 42.75, amount: 180.0, total: 7695.0 },
    { price: 42.7, amount: 250.0, total: 10675.0 },
    { price: 42.65, amount: 300.0, total: 12795.0 },
  ];

  const myOrders = [
    {
      tradingPair: "TON/USDC",
      date: "October 28, 2025",
      direction: "Buy",
      orderType: "Limit",
      price: "1.9 USDT",
      quantity: "2.2 TON",
      total: "4.22 USDT",
      filled: "0.00",
      unfilled: "2.22",
    },
    {
      tradingPair: "TON/USDC",
      date: "October 28, 2025",
      direction: "Buy",
      orderType: "Limit",
      price: "1.9 USDT",
      quantity: "2.2 TON",
      total: "4.22 USDT",
      filled: "0.00",
      unfilled: "2.22",
    },
    {
      tradingPair: "TON/USDC",
      date: "October 28, 2025",
      direction: "Buy",
      orderType: "Limit",
      price: "1.9 USDT",
      quantity: "2.2 TON",
      total: "4.22 USDT",
      filled: "0.00",
      unfilled: "2.22",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Portfolio Header Card with Price Cards */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Portfolio Header Card */}
        <div className="dashboard-card p-5 overflow-hidden flex-1 flex justify-between items-center relative">
        <img src={xIcon} alt="x" className="w-auto h-full left-1/2 top-0 transform -translate-x-1/2 absolute" />
          <div className="flex flex-col md:flex-row">
            <div className="w-auto h-19">
              <img
                src={nImage}
                alt="Tech Startup Portfolio"
                className="w-full h-full object-cover rounded-l-xl"
              />
            </div>
            <div className="flex-1 p-4">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <h2 className="text-xl font-bold text-white">
                  Tech Startup Portfolio (TECH)
                </h2>
                <Badge label="tech" />
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={locIcon}
                  alt="location"
                  className="w-4 h-4 opacity-70"
                />
                <p className="text-gray-400 text-sm">Miami Beach, FL</p>
              </div>
            </div>
          </div>
          <PriceInfoCards />
        </div>
      </div>

      {/* Main Content - 3 Cards in Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Price Chart - 2 columns */}
        <div className="md:col-span-2">
          <PriceChart data={priceData} />
        </div>

        {/* Order Book - 1 column */}
        <div className="md:col-span-1">
          <OrderBook sellOrders={sellOrders} buyOrders={buyOrders} />
        </div>

        {/* Buy/Sell Panel - 1 column */}
        <div className="md:col-span-1">
          <BuySellPanel />
        </div>
      </div>

      {/* My Orders / My Trades */}
      <div className="dashboard-card p-6 relative">
      <div className="table-blur absolute top-5 left-1/2 transform -translate-x-1/2 h-10 w-1/2"></div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <button 
              onClick={() => setSelectedTab('orders')}
              className={`px-4 py-2.5 rounded-lg font-medium transition-all ${
                selectedTab === 'orders'
                  ? 'bg-primary/15 text-primary'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              My orders
            </button>
            <button 
              onClick={() => setSelectedTab('trades')}
              className={`px-4 py-2.5 rounded-lg font-medium transition-all ${
                selectedTab === 'trades'
                  ? 'bg-primary/15 text-primary'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              My trades
            </button>
          </div>
          <button className="px-4 py-2 bg-bg-dark border border-gray-600 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors">
            Cancel all
          </button>
        </div>
        <div className="flex gap-2 mb-4 overflow-x-auto">
          <button 
            onClick={() => setSelectedOrderType('limit')}
            className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedOrderType === 'limit'
                ? 'bg-bg-dark border border-white/20 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Limit market (1)
          </button>
          <button 
            onClick={() => setSelectedOrderType('trigger')}
            className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedOrderType === 'trigger'
                ? 'bg-bg-dark border border-white/20 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Trigger (0)
          </button>
          <button 
            onClick={() => setSelectedOrderType('oco')}
            className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedOrderType === 'oco'
                ? 'bg-bg-dark border border-white/20 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            OCO (0)
          </button>
          <button 
            onClick={() => setSelectedOrderType('tpsl')}
            className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedOrderType === 'tpsl'
                ? 'bg-bg-dark border border-white/20 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            TP/SL (0)
          </button>
          <button 
            onClick={() => setSelectedOrderType('trailing')}
            className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedOrderType === 'trailing'
                ? 'bg-bg-dark border border-white/20 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Trailing stop (0)
          </button>
          <button 
            onClick={() => setSelectedOrderType('iceberg')}
            className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedOrderType === 'iceberg'
                ? 'bg-bg-dark border border-white/20 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Iceberg (0)
          </button>
          <button 
            onClick={() => setSelectedOrderType('twap')}
            className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedOrderType === 'twap'
                ? 'bg-bg-dark border border-white/20 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            TWAP (0)
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="text-gray-400 text-xs border-b border-gray-700">
                <th className="text-left pb-3">Trading pair</th>
                <th className="text-left pb-3">Date</th>
                <th className="text-left pb-3">Direction</th>
                <th className="text-left pb-3">Order type</th>
                <th className="text-left pb-3">Price/Quantity</th>
                <th className="text-left pb-3">Total</th>
                <th className="text-left pb-3">Filled/Unfilled</th>
                <th className="text-left pb-3">TP/SL</th>
                <th className="text-left pb-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((order, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="py-3 text-white text-sm">
                    {order.tradingPair}
                  </td>
                  <td className="py-3 text-white text-sm">{order.date}</td>
                  <td className="py-3">
                    <div className="flex items-center gap-1">
                      <img src={highIcon} alt="buy" className="w-3 h-3" />
                      <span className="text-success text-sm">
                        {order.direction}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 text-white text-sm">{order.orderType}</td>
                  <td className="py-3 text-white text-sm">
                    <div>{order.price}</div>
                    <div className="text-gray-400 text-xs">
                      {order.quantity}
                    </div>
                  </td>
                  <td className="py-3 text-white text-sm">{order.total}</td>
                  <td className="py-3 text-white text-sm">
                    <div>{order.filled}</div>
                    <div className="text-gray-400 text-xs">
                      {order.unfilled}
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">-/-</span>
                      <img src={editIcon} alt="edit" className="w-4 h-4 opacity-50" />
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-bg-dark border border-gray-600 text-gray-300 rounded text-xs font-medium hover:bg-gray-700 hover:text-white transition-colors">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-bg-dark border border-gray-600 text-gray-300 rounded text-xs font-medium hover:bg-gray-700 hover:text-white transition-colors">
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Trading;
