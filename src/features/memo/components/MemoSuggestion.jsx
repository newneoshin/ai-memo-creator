import { useMemo } from "react";
import SquareButton from "../../../shared/components/SquareButton";

export default function MemoSuggestion({ memo, onAccept, onReject }) {
  if (!memo) return null;

  const { title, createdAt, content, isCompleted } = memo;

  const formattedDate = useMemo(() => {
    try {
      return new Date(createdAt).toLocaleString("ko-KR", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return createdAt;
    }
  }, [createdAt]);

  return (
    <article className="mx-auto my-6 max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-lg">
      {/* 헤더 */}
      <header className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-semibold text-slate-800 break-words">
          {title}
        </h1>
        <span
          className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${
            isCompleted
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-amber-200 bg-amber-50 text-amber-700"
          }`}
        >
          {isCompleted ? "완료" : "미완료"}
        </span>
      </header>

      {/* 생성일 */}
      <p className="text-sm text-slate-500 mb-4">날짜: {formattedDate}</p>

      {/* 본문 */}
      <section className="mb-5">
        <p className="whitespace-pre-wrap break-words text-slate-700 leading-relaxed">
          {content}
        </p>
      </section>

      {/* 푸터 (버튼 영역) */}
      <footer className="flex justify-end gap-3">
        <SquareButton
          text="생성"
          onClick={onAccept}
          className="bg-emerald-500 text-white hover:bg-emerald-600"
        />
        <SquareButton
          type="other"
          text="취소"
          onClick={onReject}
          className="bg-slate-200 text-slate-700 hover:bg-slate-300"
        />
      </footer>
    </article>
  );
}
