const HeartIcon = ({ filled = false ,size = 10}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M4.33747 9.15353C3.16193 8.27449 0.833008 6.26483 0.833008 4.45634C0.833008 3.261 1.7102 2.29199 2.91634 2.29199C3.54134 2.29199 4.16634 2.50033 4.99968 3.33366C5.83301 2.50033 6.45801 2.29199 7.08301 2.29199C8.28913 2.29199 9.16634 3.261 9.16634 4.45634C9.16634 6.26483 6.83743 8.27449 5.66188 9.15353C5.2663 9.44932 4.73305 9.44932 4.33747 9.15353Z" 
        stroke="#FDFCFF" 
        strokeWidth="0.8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill={filled ? "#FDFCFF" : "none"}
      />
    </svg>
  );
};

export default HeartIcon;

