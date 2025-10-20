export default function TodoCell({ todo, onToggle }) {
  const { id, title, content, isCompleted, createdAt } = todo;

  const formattedAt = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(createdAt));

  const handleToggle = () => {
    onToggle?.(id, !isCompleted);
  };

  return (
    <div
      className="
        flex items-start justify-between gap-4 rounded-xl border border-gray-200
        bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900
      "
    >
      {/* 왼쪽: 텍스트 영역 */}
      <div className="min-w-0">
        <h3
          className={`
            text-base font-semibold
            ${isCompleted ? "line-through text-gray-400" : "text-gray-900 dark:text-gray-50"}
          `}
        >
          {title}
        </h3>
        <p
          className={`
            mt-1 text-sm break-words
            ${isCompleted ? "text-gray-400" : "text-gray-600 dark:text-gray-300"}
          `}
        >
          {content}
        </p>

        <div className="mt-2 inline-flex items-center gap-2">
          <span
            className={`
              inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium
              ${
                isCompleted
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                  : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
              }
            `}
          >
            {isCompleted ? "완료됨" : "진행중"}
          </span>
          <span className="text-xs text-gray-400">·</span>
          <time className="text-xs text-gray-500 dark:text-gray-400">
            {formattedAt}
          </time>
        </div>
      </div>

      {/* 오른쪽: 토글 스위치 */}
      <button
        type="button"
        role="switch"
        aria-checked={isCompleted}
        onClick={handleToggle}
        className={`
          relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full
          transition-colors duration-200
          ${isCompleted ? "bg-green-600" : "bg-gray-300 dark:bg-gray-600"}
          focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
          dark:focus-visible:ring-offset-gray-900
        `}
      >
        <span
          className={`
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200
            ${isCompleted ? "translate-x-5" : "translate-x-1"}
          `}
        />
        <span className="sr-only">완료 상태 토글</span>
      </button>
    </div>
  );
}
