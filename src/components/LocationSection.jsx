import mapImage from '../assets/img/map.svg';

const LocationSection = () => {
  return (
    <div className="">
      <h2 className="text-xl font-semibold text-white mb-4">Location</h2>
      <div className="rounded-lg overflow-hidden">
        <img src={mapImage} alt="Map" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default LocationSection;

