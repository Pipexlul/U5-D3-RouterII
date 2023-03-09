const ShinyInput = ({ label, bgColor, labelColor, isActive }) => {
  return (
    <div className="relative">
      <span
        className={`text-base transition font-semibold ${
          isActive ? labelColor : "text-white"
        }`}
      >
        {label}
      </span>
      <span
        className={`absolute bottom-0 left-0 h-1 transform ${
          isActive ? bgColor : "text-gray-400"
        } w-0 transition-all duration-300 ease-in ${
          isActive ? "w-7/12" : "w-0"
        }`}
      />
      <span
        className={`absolute bottom-0 right-0 h-1 transform ${
          isActive ? bgColor : "text-gray-400"
        } w-0 transition-all duration-300 ease-in ${
          isActive ? "w-7/12" : "w-0"
        }`}
      />
    </div>
  );
};

export default ShinyInput;
