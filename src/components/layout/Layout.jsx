import { useState } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import WalletPopup from '../WalletPopup';

const Layout = ({ children, currentPage, setCurrentPage, hideSidebar = false }) => {
  const [showWalletPopup, setShowWalletPopup] = useState(false);

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
  };

  const handleWalletClick = () => {
    setShowWalletPopup(true);
  };

  return (
    <>
      <svg style={{ display: 'none' }} className="liquid-glass-filter">
        <filter id="glass-distortion">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="150"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <div className="flex h-screen bg-bg-base overflow-hidden">
        {!hideSidebar && (
          <Sidebar currentPage={currentPage} setCurrentPage={handlePageChange} />
        )}
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopNav onWalletClick={handleWalletClick} />
          <main className="flex-1 p-6 overflow-x-auto">
            {children}
          </main>
        </div>
      </div>
      
      <WalletPopup 
        isOpen={showWalletPopup} 
        onClose={() => setShowWalletPopup(false)} 
      />
    </>
  );
};

export default Layout;

