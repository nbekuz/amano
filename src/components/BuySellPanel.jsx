import { useState } from 'react';
import CustomDropdown from './CustomDropdown';

const BuySellPanel = () => {
  const [selectedTab, setSelectedTab] = useState('buy');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('500');
  const [orderType, setOrderType] = useState('Limited order');

  const handleQuantityChange = (value) => {
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setQuantity(value);
    }
  };

  const handlePriceChange = (value) => {
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setPrice(value);
    }
  };

  const incrementQuantity = () => {
    const num = parseFloat(quantity) || 0;
    setQuantity((num + 1).toString());
  };

  const decrementQuantity = () => {
    const num = parseFloat(quantity) || 0;
    if (num > 0) {
      setQuantity((num - 1).toString());
    }
  };

  const incrementPrice = () => {
    const num = parseFloat(price) || 0;
    setPrice((num + 1).toString());
  };

  const decrementPrice = () => {
    const num = parseFloat(price) || 0;
    if (num > 0) {
      setPrice((num - 1).toString());
    }
  };

  const estimatedTotal = (parseFloat(quantity) || 0) * (parseFloat(price) || 0);

  return (
    <div className="dashboard-card p-6">
      <div className="flex gap-4 mb-4">
        <button 
          onClick={() => setSelectedTab('buy')}
          className={`flex-1 font-medium text-center py-2 px-4 rounded-3xl transition-all ${
            selectedTab === 'buy'
              ? 'bg-white/10 backdrop-blur-sm border border-white/20 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Buy
        </button>
        <button 
          onClick={() => setSelectedTab('sell')}
          className={`flex-1 font-medium text-center py-2 px-4 rounded-3xl transition-all ${
            selectedTab === 'sell'
              ? 'bg-white/10 backdrop-blur-sm border border-white/20 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Sell
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-white text-sm mb-2 block">Order Type</label>
          <CustomDropdown
            options={['Limited order', 'Market order']}
            value={orderType}
            onChange={setOrderType}
          />
          <p className="text-gray-500 text-xs mt-1">Set your own price and wait for a match.</p>
        </div>

        <div>
          <label className="text-white text-sm mb-2 block">Quantity</label>
          <div className="relative">
            <input 
              type="text"
              inputMode="numeric"
              value={quantity}
              onChange={(e) => handleQuantityChange(e.target.value)}
              className="w-full bg-bg-dark border border-gray-700 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-primary"
              placeholder="Enter your quantity"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-0.5">
              <button 
                onClick={incrementQuantity}
                className="text-gray-400 hover:text-white transition-colors"
                type="button"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 7.5L6 4.5L3 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={decrementQuantity}
                className="text-gray-400 hover:text-white transition-colors"
                type="button"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div>
          <label className="text-white text-sm mb-2 block">Price per Share</label>
          <div className="relative">
            <input 
              type="text"
              inputMode="numeric"
              value={price}
              onChange={(e) => handlePriceChange(e.target.value)}
              className="w-full bg-bg-dark border border-gray-700 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-primary"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-0.5">
              <button 
                onClick={incrementPrice}
                className="text-gray-400 hover:text-white transition-colors"
                type="button"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 7.5L6 4.5L3 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={decrementPrice}
                className="text-gray-400 hover:text-white transition-colors"
                type="button"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-700">
          <div className="flex justify-between mb-2">
            <span className="text-white text-sm">Estimated total</span>
            <span className="text-white text-lg font-bold">${estimatedTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <p className="text-gray-500 text-xs">Fee: $0.00 (Amn token discount applied)</p>
        </div>

        <button className="w-full bg-primary text-white rounded-3xl py-3 font-medium hover:bg-primary-hover transition-colors">
          Place Buy Order
        </button>
      </div>
    </div>
  );
};

export default BuySellPanel;

