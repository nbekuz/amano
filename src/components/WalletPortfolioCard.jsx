import { useNavigate } from 'react-router-dom';
import highIcon from '../assets/img/high.svg';
import DepositIcon from './icons/deposit';
import WithdrawIcon from './icons/withdraw';

const WalletPortfolioCard = ({ totalValue, change }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-card p-6 relative">
      <div className="stat-card-blur absolute top-6 rounded-lg -right-3 h-12.5 w-41"></div>
      <div className="flex justify-between items-start">
        <div>
          <div className="text-gray-400 text-sm mb-1">Total Portfolio Value</div>
          <div className="text-white font-bold text-3xl mb-2">{totalValue}</div>
          <div className="flex items-center gap-1 text-success text-sm">
            <img src={highIcon} alt="trend" className="w-4 h-4" />
            <span>{change}</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => navigate('/deposit')}
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors flex items-center gap-2"
          >
            <DepositIcon />
            Deposit
          </button>
          <button
            onClick={() => navigate('/withdraw')}
            className="px-4 py-2 bg-bg-dark border border-gray-600 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors flex items-center gap-2"
          >
            <WithdrawIcon />
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletPortfolioCard;

