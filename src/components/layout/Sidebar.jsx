import MenuIcon from "../icons/menu";
import CoinIcon from "../icons/coin";
import MarketIcon from "../icons/market";
import ConvIcon from "../icons/conv";
import WalletIcon from "../icons/wallet";
import DepositIcon from "../icons/deposit";
import WithdrawIcon from "../icons/withdraw";
import TransIcon from "../icons/trans";
import AnalyticsIcon from "../icons/analytics";
import SettingsIcon from "../icons/settings";
import logo from "../../assets/img/logo.svg";

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const menuItems = [
    { id: "Dashboard", label: "Dashboard", icon: MenuIcon, path: "/" },
    { id: "My portfolio", label: "My portfolio", icon: CoinIcon, path: "/portfolio" },
    { id: "Marketplace", label: "Marketplace", icon: MarketIcon, path: "/marketplace" },
    { id: "Secondary Market", label: "Secondary Market", icon: ConvIcon, path: "/secondary-market" },
    { id: "Wallet", label: "Wallet", icon: WalletIcon, path: "/wallet" },
    { id: "Deposit", label: "Deposit", icon: DepositIcon, path: "/deposit" },
    { id: "Withdraw", label: "Withdraw", icon: WithdrawIcon, path: "/withdraw" },
    { id: "Transactions", label: "Transactions", icon: TransIcon, path: "/transactions" },
    { id: "Analytics", label: "Analytics", icon: AnalyticsIcon, path: "/analytics" },
  ];

  return (
    <div className="w-64 h-full flex flex-col border-r border-gray-700  relative overflow-hidden">
      {/* Diagonal Gradient Overlay with Blur */}
      <div className="sidebar-gradient-overlay" />
      <div className="h-18 border-b flex items-center pl-5 border-gray-700 relative z-10">
          <img src={logo} alt="AMANO INVEST" className="h-11.5 w-auto" />
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2 relative z-10">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`sidebar-button flex items-center gap-3 px-4 py-3 transition-all ${
                isActive
                  ? "sidebar-button-active text-white"
                  : "text-gray-400 hover:text-white hover:bg-bg-hover rounded-lg"
              }`}
            >
              <Icon />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Settings */}
      <div className="p-4 border-t border-gray-800 relative z-10">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-bg-hover transition-all">
          <SettingsIcon />
          <span className="text-sm font-medium">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
