import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import nImage from "../assets/img/trad.png";
import highIcon from "../assets/img/high.svg";
import Badge from "../components/Badge";
import locIcon from "../assets/img/loc.svg";
import PriceChart from "../components/PriceChart";
import OrderBook from "../components/OrderBook";
import BuySellPanel from "../components/BuySellPanel";
import PriceInfoCards from "../components/PriceInfoCards";
import xIcon from "../assets/img/x.svg";
import editIcon from "../assets/img/edit.svg";
import LiquidGlassButton from "../components/LiquidGlassButton";

const Trading = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("orders");
  const [selectedOrderType, setSelectedOrderType] = useState("limit");

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

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/portfolio");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <button
          onClick={handleBack}
          className="text-gray-400 hover:text-white mb-0 text-sm"
        >
          ← Back to portfolio
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="dashboard-card p-5 overflow-hidden flex-1 flex justify-between items-center relative">
          <img
            src={xIcon}
            alt="x"
            className="w-auto h-full left-1/2 top-0 transform -translate-x-1/2 absolute"
          />
          <div className="flex flex-col md:flex-row">
            <div className="w-auto h-19">
              <img
                src={nImage}
                alt="Tech Startup Portfolio"
                className="w-15.5 h-15.5 object-cover rounded-xl"
              />
            </div>
            <div className="flex-1 p-4">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <h2 className="text-xl font-bold text-white">
                  Real Estate Fund
                </h2>
                <Badge label="tech" variant="filled" />
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2">
          <PriceChart data={priceData} />
        </div>

        <div className="md:col-span-1">
          <OrderBook sellOrders={sellOrders} buyOrders={buyOrders} />
        </div>

        <div className="md:col-span-1">
          <BuySellPanel />
        </div>
      </div>

      <div className="dashboard-card p-6 relative">
        <div className="table-blur absolute top-5 left-1/2 transform -translate-x-1/2 h-10 w-1/2"></div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedTab("orders")}
              className={`px-4 py-2.5 rounded-lg font-medium transition-all ${
                selectedTab === "orders"
                  ? "bg-primary/15 text-primary"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              My orders
            </button>
            <button
              onClick={() => setSelectedTab("trades")}
              className={`px-4 py-2.5 rounded-lg font-medium transition-all ${
                selectedTab === "trades"
                  ? "bg-primary/15 text-primary"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              My trades
            </button>
          </div>
          <LiquidGlassButton width={100} height={30} radius="8">
            Cancel all
          </LiquidGlassButton>
        </div>
        <div className="flex gap-2 mb-4 overflow-x-auto border border-white/10 p-0.5 rounded-lg">
          <button
            onClick={() => setSelectedOrderType("limit")}
            className={`order-type-btn px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedOrderType === "limit"
                ? "order-type-btn-active"
                : "order-type-btn-inactive"
            }`}
          >
            {selectedOrderType === "limit" && (
              <>
                <span className="order-type-btn-effect"></span>
                <span className="order-type-btn-tint"></span>
                <span className="order-type-btn-shine"></span>
              </>
            )}
            <span className="order-type-btn-content">Limit market (1)</span>
          </button>
          <button
            onClick={() => setSelectedOrderType("trigger")}
            className={`order-type-btn px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedOrderType === "trigger"
                ? "order-type-btn-active"
                : "order-type-btn-inactive"
            }`}
          >
            {selectedOrderType === "trigger" && (
              <>
                <span className="order-type-btn-effect"></span>
                <span className="order-type-btn-tint"></span>
                <span className="order-type-btn-shine"></span>
              </>
            )}
            <span className="order-type-btn-content">Trigger (0)</span>
          </button>
          <button
            onClick={() => setSelectedOrderType("oco")}
            className={`order-type-btn px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedOrderType === "oco"
                ? "order-type-btn-active"
                : "order-type-btn-inactive"
            }`}
          >
            {selectedOrderType === "oco" && (
              <>
                <span className="order-type-btn-effect"></span>
                <span className="order-type-btn-tint"></span>
                <span className="order-type-btn-shine"></span>
              </>
            )}
            <span className="order-type-btn-content">OCO (0)</span>
          </button>
          <button
            onClick={() => setSelectedOrderType("tpsl")}
            className={`order-type-btn px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedOrderType === "tpsl"
                ? "order-type-btn-active"
                : "order-type-btn-inactive"
            }`}
          >
            {selectedOrderType === "tpsl" && (
              <>
                <span className="order-type-btn-effect"></span>
                <span className="order-type-btn-tint"></span>
                <span className="order-type-btn-shine"></span>
              </>
            )}
            <span className="order-type-btn-content">TP/SL (0)</span>
          </button>
          <button
            onClick={() => setSelectedOrderType("trailing")}
            className={`order-type-btn px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedOrderType === "trailing"
                ? "order-type-btn-active"
                : "order-type-btn-inactive"
            }`}
          >
            {selectedOrderType === "trailing" && (
              <>
                <span className="order-type-btn-effect"></span>
                <span className="order-type-btn-tint"></span>
                <span className="order-type-btn-shine"></span>
              </>
            )}
            <span className="order-type-btn-content">Trailing stop (0)</span>
          </button>
          <button
            onClick={() => setSelectedOrderType("iceberg")}
            className={`order-type-btn px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedOrderType === "iceberg"
                ? "order-type-btn-active"
                : "order-type-btn-inactive"
            }`}
          >
            {selectedOrderType === "iceberg" && (
              <>
                <span className="order-type-btn-effect"></span>
                <span className="order-type-btn-tint"></span>
                <span className="order-type-btn-shine"></span>
              </>
            )}
            <span className="order-type-btn-content">Iceberg (0)</span>
          </button>
          <button
            onClick={() => setSelectedOrderType("twap")}
            className={`order-type-btn px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedOrderType === "twap"
                ? "order-type-btn-active"
                : "order-type-btn-inactive"
            }`}
          >
            {selectedOrderType === "twap" && (
              <>
                <span className="order-type-btn-effect"></span>
                <span className="order-type-btn-tint"></span>
                <span className="order-type-btn-shine"></span>
              </>
            )}
            <span className="order-type-btn-content">TWAP (0)</span>
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
                      <img
                        src={editIcon}
                        alt="edit"
                        className="w-4 h-4 opacity-50"
                      />
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="flex gap-2">
                      <LiquidGlassButton width="auto" height={28} radius="8">
                        <span className="px-3 text-xs text-white">Edit</span>
                      </LiquidGlassButton>
                      <LiquidGlassButton width="auto" height={28} radius="8">
                        <span className="px-3 text-xs text-white">Cancel</span>
                      </LiquidGlassButton>
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
