import { useState } from "react";
import MessageList from "../features/addtodo/MessageList";
import ChatForm from "../features/addtodo/ChatForm";

export default function AddTodoPage() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading === true || prompt.trim().length === 0) {
      return;
    }

    setMessages((prev) => [...prev, { role: "user", content: prompt }]);
    setPrompt("");
  };

  return (
    <div>
      <MessageList messages={messages} />
      <ChatForm
        prompt={prompt}
        setPrompt={setPrompt}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}
