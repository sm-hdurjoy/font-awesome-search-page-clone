//  Individual Icon Card Component
const IconCard = ({ title, icon }) => {
  return (
    <div className="w-40 h-40 bg-white rounded-xl flex flex-col justify-center items-center hover:bg-card-hover-yellow">
      <div className="font-bold text-5xl">{icon}</div>
      <div className="mt-4">{title}</div>
    </div>
  );
};

export default IconCard;
