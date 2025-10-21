import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMemo } from "../features/todos/todoSlice.js";

import ChatForm from "../features/addtodo/ChatForm";
import MemoSuggestion from "../features/addtodo/MemoSuggestion";
import memoGenerator from "../features/addtodo/memoGenerator";

export default function AddTodoPage() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading === true || prompt.trim().length === 0) {
      return;
    }

    setPrompt("");
    setSuggestion(null);
    setIsLoading(true);
    const obj = await memoGenerator.generate(prompt);
    setSuggestion(obj ?? null);
    setIsLoading(false);
  };

  const handleAccept = () => {
    dispatch(addMemo({ ...suggestion }));
    setSuggestion(null);
    alert("등록되었습니다!");
  };

  const handleReject = () => {
    setSuggestion(null);
  };

  return (
    <div>
      <ChatForm
        prompt={prompt}
        setPrompt={setPrompt}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
      {suggestion && (
        <MemoSuggestion
          memo={suggestion}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      )}
    </div>
  );
}
