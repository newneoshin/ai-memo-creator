const TextField = ({ type, name, value, placeholder, onChange, error }) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`
          w-full px-3 py-2 rounded-md shadow-sm transition-colors duration-200
          focus:outline-none focus:ring-2
          ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }
        `}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default TextField;
