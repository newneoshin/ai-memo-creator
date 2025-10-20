const SubmitButton = ({ text, onClick }) => {
  return (
    <input
      type="submit"
      className="bg-red-700 p-4 rounded-md w-full text-white text-xl"
      onClick={onClick}
      value={text}
    />
  );
};

export default SubmitButton;
