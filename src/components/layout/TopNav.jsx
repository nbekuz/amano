import WalletIcon from "../icons/wallet";
import RingIcon from "../icons/ring";
import LiquidGlassButton from "../LiquidGlassButton";
import avatarImg from "../../assets/img/avatar.png";

const TopNav = ({ onWalletClick }) => {
  return (
    <div className="h-18 border-b border-gray-700 flex items-center justify-between px-6 relative ">
      <div className="topnav-blur absolute -top-5 h-12.5 left-1/2 transform -translate-x-1/2 w-1/2 border"></div>
      <div className="flex-1 max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full  border border-black-100 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 14L11.1 11.1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <LiquidGlassButton radius="full" onClick={onWalletClick}>
          <WalletIcon />
        </LiquidGlassButton>
        <LiquidGlassButton radius="full">
          <RingIcon />
        </LiquidGlassButton>

        <div className="flex items-center gap-3 pl-4 pr-10 border-gray-700">
          <img
            src={avatarImg}
            alt="avatar"
            className="w-8 h-8 object-cover rounded-full"
          />

          <div className="flex flex-col">
            <span className="text-white text-sm font-medium">Alex Y</span>
            <span className="text-gray-400 text-xs">alex07Y</span>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
