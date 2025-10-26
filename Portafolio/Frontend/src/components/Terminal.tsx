import { useState, useRef, useEffect } from "react";
import { getBotAnswer } from "../util/AnswerChatBot";
import NeonTrail from "../styles/NeonTrail";

interface TerminalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  messages: string[];
  setMessages: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Terminal({ isOpen, setIsOpen, messages, setMessages }: TerminalProps) {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

const asciiArt = `
   ____      _            _____             
  / __ \\    | |          |  __ \\            
 | |  | |___| | ___   _  | |  | | _____   __
 | |  | / __| |/ / | | | | |  | |/ _ \\ \\ / /
 | |__| \__ \ | <| |_| | | | |_ / | __/ \\ V / 
  \\____/|___/_|\_\\__,_  | |_____/ \\___| \\_/  
                   __/ |      Osky Dev              
                  |___/                     
`;








  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([asciiArt, "Escribe 'help' para ver los comandos."]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      const userMessage = `> ${input}`;
      setMessages(prev => [...prev, userMessage]);

      const command = input.toLowerCase();

      if (command === "clear") {
        setMessages([asciiArt, "Escribe 'help' para ver los comandos."]);
        setInput("");
        return;
      }

      if (command === "exit") {
        setIsOpen(false);
        setInput("");
        return;
      }

      const respuestaBot = getBotAnswer(input);
      setTimeout(() => {
        setMessages(prev => [...prev, ` ${respuestaBot}`]);
      }, 300);

      setInput("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="flex flex-col h-screen bg-black text-red-600 font-poppins drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]">

      {/* Header */}
      <div className="flex-shrink-0 p-3 border-b border-transparent bg-black relative
                      shadow-[0_4px_10px_rgba(255,0,0,0.8),0_4px_20px_rgba(255,0,0,0.6)]
                      transition-all hover:shadow-[0_4px_12px_rgba(255,0,0,1),0_4px_24px_rgba(255,0,0,0.8)]">
        <span className="whitespace-pre-wrap break-words font-mono text-xs sm:text-sm md:text-base lg:text-lg
               text-red-600 drop-shadow-[0_0_10px_rgba(255,0,0,0.9)]">terminal@oscar</span>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-red-600 hover:text-red-400 font-bold text-lg transition"
          title="Cerrar Terminal"
        >
          ✕
        </button>
      </div>
      {/* Mensajes con scroll */}
      <div className="flex-1 overflow-y-auto overflow-x-auto px-4 py-2 space-y-2 chat-terminal">
        <NeonTrail />
        {messages.map((msg, idx) => (
          <pre
          key={idx}
          className="whitespace-pre-wrap break-words font-mono text-xs sm:text-sm md:text-base lg:text-lg
          text-red-600 drop-shadow-[0_0_10px_rgba(255,0,0,0.9)]"
          >
            {msg}
          </pre>
        ))}
        <div ref={messagesEndRef} />
      </div>


      {/* Input */}
      <div className="flex-shrink-0 flex items-center p-3 bg-black">
        <span className="whitespace-pre-wrap break-words font-mono text-xs sm:text-sm md:text-base lg:text-lg
               text-red-600 drop-shadow-[0_0_10px_rgba(255,0,0,0.9)]">terminal@oscar:</span>
        <input
          className="flex-1 bg-black text-red-600 border-none outline-none font-poppins"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
    </div>
  );
}
