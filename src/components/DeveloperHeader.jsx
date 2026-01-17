import itoLogo from '../assets/img/ito.png';

const DeveloperHeader = ({ name, website, logo }) => {
  return (
    <div className="flex items-center gap-3 mb-4 dashboard-card p-5 bg-white/10">
      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
        {logo ? (
          <img src={logo} alt={name} className="w-12 h-12 rounded-full" />
        ) : (
          <img src={itoLogo} alt={name} className="w-12 h-12 rounded-full" />
        )}
      </div>
      <div>
        <div className="text-white text-lg font-semibold">{name}</div>
        <div className="text-gray-400 text-sm">{website}</div>
      </div>
    </div>
  );
};

export default DeveloperHeader;
