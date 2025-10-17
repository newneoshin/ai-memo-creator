const SquareButton = ({ text, onClick }) => {
  return (
    <button className="bg-green-500 p-4 rounded-md" onClick={onClick}>
      <p className="text-white text-xl">{text}</p>
    </button>
  );
};

export default SquareButton;
