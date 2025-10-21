import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const responseSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "configure based from uuid",
    },
    title: {
      type: "string",
      description: "할 일의 제목",
    },
    content: {
      type: "string",
      description: "할 일의 내용",
    },
    createdAt: {
      type: "string",
      description: "할 일의 날짜",
    },
    isCompleted: {
      type: "boolean",
      description: "always false",
    },
  },
  required: ["title", "content"],
  additionalProperties: false,
};

const config = {
  responseMimeType: "application/json",
  responseJsonSchema: responseSchema,
  systemInstruction: [
    "당신은 할 일 계획 세우기 전문가 입니다.",
    "You have to return json format",
  ],
};

const chat = ai.chats.create({
  model: "gemini-2.5-flash",
  config: config,
});

const memoGenerator = {
  generate: async (request) => {
    const query = request + `\n오늘은 ${new Date().toDateString()}이야.`;
    const response = await chat.sendMessage({
      message: query,
    });
    const obj = JSON.parse(response.text);
    return { ...obj };
  },
};

export default memoGenerator;
