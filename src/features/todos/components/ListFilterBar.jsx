import { useState } from "react";

const OPTIONS = [
  { id: "all", value: "all", label: "전체" },
  { id: "complete", value: "complete", label: "완료" },
  { id: "incomplete", value: "incomplete", label: "미완료" },
];

export default function ListFilterBar({ onChange }) {
  const [order, setOrder] = useState("all");

  const handleChange = (e) => {
    const value = e.target.value;
    setOrder(value);
    onChange?.(value);
  };

  return (
    <fieldset className="w-full">
      <legend className="sr-only">할 일 필터</legend>

      <div
        className="
          inline-flex w-full max-w-md items-center justify-between
          rounded-xl border border-gray-200 bg-white p-1 shadow-sm
          dark:border-gray-700 dark:bg-gray-900
        "
        role="tablist"
        aria-label="할 일 필터"
      >
        {OPTIONS.map((opt, idx) => {
          const isLeft = idx === 0;
          const isRight = idx === OPTIONS.length - 1;
          const radius = isLeft
            ? "rounded-l-lg"
            : isRight
              ? "rounded-r-lg"
              : "rounded-none";

          return (
            <div key={opt.id} className="flex-1">
              <input
                id={opt.id}
                type="radio"
                name="order"
                value={opt.value}
                checked={order === opt.value}
                onChange={handleChange}
                className="peer sr-only"
              />
              <label
                htmlFor={opt.id}
                className={`
                  ${radius}
                  flex h-10 w-full items-center justify-center gap-2
                  select-none cursor-pointer px-4 text-sm font-medium
                  text-gray-700 transition
                  hover:bg-gray-50 active:scale-[0.98]
                  dark:text-gray-200 dark:hover:bg-gray-800
                  peer-checked:bg-gray-900 peer-checked:text-white
                  dark:peer-checked:bg-white dark:peer-checked:text-gray-900
                  ring-inset
                `}
                role="tab"
                aria-selected={order === opt.value}
              >
                {opt.label}
              </label>
            </div>
          );
        })}
      </div>

      {/* 포커스 링: 키보드 접근성 향상 */}
      <style>{`
        input[type="radio"]:focus-visible + label {
          outline: 2px solid rgb(59 130 246);
          outline-offset: 2px;
          border-radius: 0.5rem;
        }
      `}</style>
    </fieldset>
  );
}
