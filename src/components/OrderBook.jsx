import { useState } from 'react';

const OrderBook = ({ sellOrders, buyOrders }) => {
  const [selectedTab, setSelectedTab] = useState('orderbook');

  return (
    <div className="dashboard-card p-6">
      <div className="flex gap-4 mb-4">
        <button 
          onClick={() => setSelectedTab('orderbook')}
          className={`font-medium transition-all ${
            selectedTab === 'orderbook'
              ? 'text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Order book
        </button>
        <button 
          onClick={() => setSelectedTab('global')}
          className={`font-medium transition-all ${
            selectedTab === 'global'
              ? 'text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Global activity
        </button>
      </div>
      <div className="space-y-4">
        {/* Sell Orders */}
        <div className="space-y-1">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 text-xs">
                <th className="text-left pb-2">Price</th>
                <th className="text-left pb-2">Amount</th>
                <th className="text-left pb-2">Total</th>
              </tr>
            </thead>
          </table>
          <div className="space-y-1">
            {sellOrders.map((order, index) => (
              <div key={index} className="bg-red-light rounded px-2 py-1 hover:bg-red-light-hover transition-colors">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="text-red-400">
                      <td className="py-1">{order.price.toFixed(2)}</td>
                      <td className="text-left py-1">{order.amount.toFixed(2)}</td>
                      <td className="text-left py-1">{order.total.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>

        {/* Current Price */}
        <div className="text-center py-2 border-y border-gray-700">
          <p className="text-white text-lg font-bold">2,891.69</p>
          <p className="text-gray-400 text-xs">2.891.69</p>
        </div>

        {/* Buy Orders */}
        <div className="space-y-1">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 text-xs">
                <th className="text-left pb-2">Price</th>
                <th className="text-left pb-2">Amount</th>
                <th className="text-left pb-2">Total</th>
              </tr>
            </thead>
          </table>
          <div className="space-y-1">
            {buyOrders.map((order, index) => (
              <div key={index} className="bg-green-light rounded px-2 py-1 hover:bg-green-light-hover transition-colors">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="text-success">
                      <td className="py-1">{order.price.toFixed(2)}</td>
                      <td className="text-left py-1">{order.amount.toFixed(2)}</td>
                      <td className="text-left py-1">{order.total.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBook;

