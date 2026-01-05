const DescriptionSection = ({ description }) => {
  return (
    <div className="">
      <h2 className="text-xl font-semibold text-white mb-4">Description</h2>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default DescriptionSection;

