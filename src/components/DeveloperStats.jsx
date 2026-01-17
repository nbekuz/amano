const DeveloperStats = ({ foundationYear, completedProjects }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="p-3 bg-white/5 rounded-lg">
        <div className="text-gray-400 text-xs mb-1">Foundation year</div>
        <div className="text-white font-semibold">{foundationYear}</div>
      </div>
      <div className="p-3 bg-white/5 rounded-lg">
        <div className="text-gray-400 text-xs mb-1">Completed projects</div>
        <div className="text-white font-semibold">{completedProjects}</div>
      </div>
    </div>
  );
};

export default DeveloperStats;
