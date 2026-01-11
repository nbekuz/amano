import { useNavigate } from "react-router-dom";
import highIcon from "../assets/img/high.svg";
import DepositIcon from "./icons/deposit";
import WithdrawIcon from "./icons/withdraw";
import xIcon from "../assets/img/x.svg";
import LiquidGlassButton from "./LiquidGlassButton";
import BtnGlass from "./BtnGlass";
const WalletPortfolioCard = ({ totalValue, change }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-card p-6 relative">
      <img
        src={xIcon}
        alt="x"
        className="w-auto h-full left-1/2 top-0 transform -translate-x-1/2 absolute"
      />
      <div className="stat-card-blur absolute top-6 rounded-lg -right-3 h-12.5 w-41"></div>
      <div className="flex justify-between items-start">
        <div>
          <div className="text-gray-400 text-sm mb-1">
            Total Portfolio Value
          </div>
          <div className="text-white font-bold text-3xl mb-2">{totalValue}</div>
          <div className="flex items-center gap-1 text-success text-sm">
            <img src={highIcon} alt="trend" className="w-4 h-4" />
            <span>{change}</span>
          </div>
        </div>
        <div className="flex gap-3">
          <BtnGlass width={105} height={36} radius="8">
            <div className=" text-sm font-medium flex justify-center items-center gap-2">
              <DepositIcon />
              Deposit
            </div>
          </BtnGlass>
          <BtnGlass width={115} height={36} radius="8">
            <div className=" text-sm font-medium flex justify-center items-center gap-2">
              <WithdrawIcon />
              Withdraw
            </div>
          </BtnGlass>

          
        </div>
      </div>
    </div>
  );
};

export default WalletPortfolioCard;
