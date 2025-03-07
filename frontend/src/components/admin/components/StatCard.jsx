import {
  FaUsers,
  FaDollarSign,
  FaShoppingCart,
  FaPercentage,
} from "react-icons/fa"; // Import icons from react-icons

const iconMap = {
  users: FaUsers,
  "dollar-sign": FaDollarSign,
  "shopping-cart": FaShoppingCart,
  percent: FaPercentage,
};

export default function StatCard({ title, value, icon }) {
  const IconComponent = iconMap[icon];

  return (
    <div className="bg-gradient-to-r from-cDarkBlue to-CPurple font-inter rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-medium text-cWhite">{title}</h2>
          <p className="text-3xl font-semibold text-cWhite">{value}</p>
        </div>
        {IconComponent ? (
          <IconComponent className="text-[#3B82F6]" size={24} />
        ) : null}
      </div>
    </div>
  );
}
