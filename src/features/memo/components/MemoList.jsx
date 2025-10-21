import MemoCell from "./MemoCell";

const MemoList = ({ memos, onToggle }) => {
  return (
    <div className="bg-gray-50">
      {memos.map((item) => {
        return <MemoCell key={item.id} memo={item} onToggle={onToggle} />;
      })}
    </div>
  );
};

export default MemoList;
