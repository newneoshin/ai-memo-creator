const Text = ({ fontSize, children }) => {
  return (
    <p className={`${fontSize ?? "text-lg"} whitespace-pre-line`}>{children}</p>
  );
};

export default Text;
