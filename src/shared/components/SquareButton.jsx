const SquareButton = ({ type = "primary", text, onClick }) => {
  const color = type === "other" ? "bg-gray-500" : "bg-red-700";

  return (
    <button className={`${color} p-4 rounded-md w-full`} onClick={onClick}>
      <p className="text-white text-xl">{text}</p>
    </button>
  );
};

export default SquareButton;
