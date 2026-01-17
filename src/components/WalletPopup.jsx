import WalletPortfolioCard from './WalletPortfolioCard';

const WalletPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="wallet-popup-overlay"
      onClick={onClose}
    >
      <div 
        className="wallet-popup"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="wallet-popup-effect" />
        <div className="wallet-popup-tint" />
        <div className="wallet-popup-shine" />
        <div className="wallet-popup-content ">
          <WalletPortfolioCard totalValue="$58,233.99" change="+15.3%" />
        </div>
      </div>
    </div>
  );
};

export default WalletPopup;

