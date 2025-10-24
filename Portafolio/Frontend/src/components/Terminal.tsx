import { useState, useRef, useEffect } from "react";
import { getBotAnswer } from "../util/AnswerChatBot";

interface TerminalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  messages: string[];
  setMessages: React.Dispatch<React.SetStateAction<string[]>>; 
}
export default function Terminal({ isOpen, setIsOpen, messages, setMessages }: TerminalProps) {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages(["🤖 Escribe 'help' para ver los comandos."]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter" && input.trim()) {
    const userMessage = `> ${input}`;
    setMessages(prev => [...prev, userMessage]); // Guardamos mensaje del usuario

    // Comando "clear" interceptado
    if (input.toLowerCase() === "clear") {
      setMessages(["🤖 Escribe 'help' para ver los comandos."]); // reinicia la terminal
      setInput("");
      return; // no pasar al bot
    }

    const respuestaBot = getBotAnswer(input);

    setTimeout(() => {
      setMessages(prev => [...prev, `🤖 ${respuestaBot}`]); // agrega respuesta del bot
    }, 300);

    setInput("");
  }
};



  if (!isOpen) return null;

  return (
    <div className="flex flex-col flex-1 min-h-0 bg-black text-red-500 font-mono z-30 relative">
      {/* Header de la terminal */}
      <div className="flex-shrink-0 p-3 border-b border-red-700 bg-black relative">
        <span className="text-red-500">terminal@oscar:~</span>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-red-500 hover:text-red-400 font-bold text-lg transition"
          title="Cerrar Terminal"
        >
          ✕
        </button>
      </div>

      {/* Contenido de la terminal */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        {messages.map((msg, idx) => (
          <div key={idx} className="whitespace-pre-wrap break-words">{msg}</div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex-shrink-0 flex items-center p-3 border-t border-red-700 bg-black">
        <span className="text-red-500 mr-2">$</span>
        <input
          className="flex-1 bg-black text-red-500 border-none outline-none font-mono"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          placeholder="Escribe..."
        />
      </div>
    </div>
  );
}
