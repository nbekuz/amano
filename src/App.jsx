import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/dashboard';
import Portfolio from './pages/portfolio';
import HoldingsDetail from './pages/holdings-detail';
import Trading from './pages/trading';
import Marketplace from './pages/marketplace';
import PropertyDetail from './pages/property-detail';
import SecondaryMarket from './pages/secondary-market';
import Wallet from './pages/wallet';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get current page from pathname
  const getCurrentPage = () => {
    const path = location.pathname;
    // Don't select any sidebar item for detail pages
    if (path.startsWith('/trading/') || path.startsWith('/holdings/')) {
      return null;
    }
    if (path === '/portfolio' || path === '/my-portfolio') return 'My portfolio';
    if (path === '/marketplace') return 'Marketplace';
    if (path === '/secondary-market') return 'Secondary Market';
    if (path === '/wallet') return 'Wallet';
    if (path === '/deposit') return 'Deposit';
    if (path === '/withdraw') return 'Withdraw';
    if (path === '/transactions') return 'Transactions';
    if (path === '/analytics') return 'Analytics';
    if (path === '/') return 'Dashboard';
    return null;
  };

  const handlePageChange = (pageId) => {
    const routes = {
      'Dashboard': '/',
      'My portfolio': '/portfolio',
      'Marketplace': '/marketplace',
      'Secondary Market': '/secondary-market',
      'Wallet': '/wallet',
      'Deposit': '/deposit',
      'Withdraw': '/withdraw',
      'Transactions': '/transactions',
      'Analytics': '/analytics',
    };
    navigate(routes[pageId] || '/');
  };

  return (
    <Layout currentPage={getCurrentPage()} setCurrentPage={handlePageChange}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/my-portfolio" element={<Portfolio />} />
        <Route path="/holdings/:id" element={<HoldingsDetail />} />
        <Route path="/trading/:id" element={<Trading />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/property/:id" element={<PropertyDetail />} />
              <Route path="/secondary-market" element={<SecondaryMarket />} />
              <Route path="/wallet" element={<Wallet />} />
              {/* Add other routes as needed */}
      </Routes>
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
