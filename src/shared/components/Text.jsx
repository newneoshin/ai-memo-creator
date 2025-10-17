const Text = ({ fontSize, children }) => {
  return <p className={fontSize ?? "text-base"}>{children}</p>;
};

export default Text;
