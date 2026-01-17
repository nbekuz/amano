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
    <div className="dashboard-card px-5 py-4 h-full relative flex flex-col justify-between ">
      {/* <div className="stat-card-blur absolute top-6 rounded-lg -right-3 h-12.5 w-41"></div> */}

      <div className="flex justify-between ">
        <div>
          <div className="text-white/70 font-medium text-sm mb-3">
            Total Portfolio Value
          </div>
          <div className="text-white font-bold text-2xl mb-3 ">{totalValue}</div>
        </div>
        <div className="text-white -rotate-135 text-lg w-5 h-5 rounded-full ">
          <DepositIcon />
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div className="flex justify-between gap-3">
          <BtnGlass width={100} height={32} radius={16}>
            <div className=" text-sm font-medium flex   items-center gap-1">
              <div className="text-primary w-6.5 h-6.5 ml-0.5 rotate-45 rounded-full flex justify-center items-center bg-primary/20">
                <DepositIcon />
              </div>
              Deposit
            </div>
          </BtnGlass>
          <BtnGlass width={115} height={32} radius={16}>
            <div className=" text-sm font-medium flex  items-center gap-1">
              <div className="text-primary w-6.5 h-6.5 ml-0.5 -rotate-135 rounded-full flex justify-center items-center bg-primary/20">
                <DepositIcon />
              </div>
              Withdraw
            </div>
          </BtnGlass>
        </div>
      </div>
    </div>
  );
};

export default WalletPortfolioCard;
