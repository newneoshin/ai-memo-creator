const SquareButton = ({ text, onClick }) => {
  return (
    <button className="bg-red-700 p-4 rounded-md" onClick={onClick}>
      <p className="text-white text-xl">{text}</p>
    </button>
  );
};

export default SquareButton;
