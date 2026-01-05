import { useState } from 'react';
import FiatIcon from '../components/icons/fiat';
import RwaIcon from '../components/icons/rwa';
import CoinIcon from '../components/icons/coin';
import WalletPortfolioCard from '../components/WalletPortfolioCard';
import WalletPerformanceGraph from '../components/WalletPerformanceGraph';
import WalletAssetSummary from '../components/WalletAssetSummary';
import WalletAssetsTable from '../components/WalletAssetsTable';
import WalletTabs from '../components/WalletTabs';
import btcImage from '../assets/img/btc.png';
import ethImage from '../assets/img/eth.png';
import usdtImage from '../assets/img/teather.png';
import usdcImage from '../assets/img/usd.png';
import tonImage from '../assets/img/ton.png';

const Wallet = () => {
  const [selectedTab, setSelectedTab] = useState('Assets');
  const [selectedAssetTab, setSelectedAssetTab] = useState('Crypto');

  const performanceData = [
    { date: 'Jan 25', fiat: 9, crypto: 12, rwa: 17 },
    { date: 'Feb 25', fiat: 12, crypto: 20, rwa: 24 },
    { date: 'Mar 25', fiat: 18, crypto: 10, rwa: 10 },
    { date: 'Apr 25', fiat: 22, crypto: 14, rwa: 18 },
    { date: 'May 25', fiat: 25, crypto: 12, rwa: 15 },
    { date: 'Jun 25', fiat: 27, crypto: 6, rwa: 12 },
  ];

  const assetSummary = [
    {
      icon: <FiatIcon />,
      title: 'Fiat Currency',
      value: '120000',
      change: '+8.2%',
    },
    {
      icon: <CoinIcon />,
      title: 'Crypto',
      value: '15000.99',
      change: '+8.2%',
    },
    {
      icon: <RwaIcon />,
      title: 'RWA Tokens',
      value: '220000.20',
      change: '+15.3%',
    },
  ];

  const cryptoAssets = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      icon: btcImage,
      quantity: '1.1234',
      usdValue: '113,036.00',
      ratio: 49.00,
    },
    {
      name: 'Etheruam',
      symbol: 'ETH',
      icon: ethImage,
      quantity: '2.2550',
      usdValue: '3,999.59',
      ratio: 20.50,
    },
    {
      name: 'Tether',
      symbol: 'USDT',
      icon: usdtImage,
      quantity: '120',
      usdValue: '120.00',
      ratio: 10.50,
    },
    {
      name: 'USDC',
      symbol: 'USDC',
      icon: usdcImage,
      quantity: '154.1234',
      usdValue: '154.1234',
      ratio: 10.50,
    },
    {
      name: 'TON',
      symbol: 'TON',
      icon: tonImage,
      quantity: '250',
      usdValue: '565.94',
      ratio: 8.50,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-white mb-2">Wallet</h1>
        <p className="text-gray-400 text-sm">Manage your funds and assets</p>
      </div>

      {/* Total Portfolio Value Card */}
      <WalletPortfolioCard totalValue="$58,233.99" change="+12.5%" />

      {/* Performance Graph */}
      <WalletPerformanceGraph data={performanceData} />

      {/* Assets/Transactions Tabs */}
      <WalletTabs 
        tabs={['Assets', 'Transactions']} 
        selectedTab={selectedTab} 
        onTabChange={setSelectedTab} 
      />

      {selectedTab === 'Assets' && (
        <>
          {/* Asset Summary Cards */}
          <WalletAssetSummary assets={assetSummary} />

          {/* Asset Tabs */}
          <WalletTabs 
            tabs={['Crypto', 'Fiat', 'RWA tokens']} 
            selectedTab={selectedAssetTab} 
            onTabChange={setSelectedAssetTab} 
          />

          {/* Assets Table */}
          {selectedAssetTab === 'Crypto' && (
            <WalletAssetsTable assets={cryptoAssets} />
          )}
        </>
      )}
    </div>
  );
};

export default Wallet;

