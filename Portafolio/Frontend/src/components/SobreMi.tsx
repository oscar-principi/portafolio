import { useState, useRef, useEffect } from "react";
import { getBotAnswer } from "../util/AnswerChatBot";

export default function ChatSobreMi() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const chatRef = useRef<HTMLDivElement>(null);
  const offset = useRef({ x: 0, y: 0 });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    offset.current = {
      x: e.clientX - (position?.x ?? 0),
      y: e.clientY - (position?.y ?? 0),
    };
  };

  useEffect(() => {
    if (isOpen && position === null) {
      setTimeout(() => {
        const chatWidth = chatRef.current?.offsetWidth ?? 384;
        const chatHeight = chatRef.current?.offsetHeight ?? 320;

        const centerX = window.innerWidth / 2 - chatWidth / 2;
        const centerY = window.innerHeight / 2 - chatHeight / 2;
        setPosition({ x: centerX, y: centerY });
      }, 0);
    }
  }, [isOpen, position]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - offset.current.x,
          y: e.clientY - offset.current.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Mensaje automático al abrir el chat
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages(["🤖 Hola! Soy Oscar. ¿Querés saber sobre mi perfil profesional o personal, experiencia, formación, tecnologías, meta, redes?"]);
    }
  }, [isOpen, messages]);

  const enviarPregunta = () => {
    if (!input.trim()) return;
    setLoading(true);
    const userMessage = input;
    setMessages((prev) => [...prev, `👤 ${userMessage}`]);
    setInput("");

    const respuestaBot = getBotAnswer(userMessage);
    setTimeout(() => {
      setMessages((prev) => [...prev, `🤖 ${respuestaBot}`]);
      setLoading(false);
    }, 600);
  };

  return (
    <>
      <button
        className="fixed bottom-20 right-4 z-60 px-4 py-2 bg-zinc-500 text-white rounded-lg shadow-lg hover:bg-zinc-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Cerrar chat" : "Abrir chat"}
      </button>

      {isOpen && position && (
     <div
  ref={chatRef}
  className="fixed z-50 bg-white rounded-lg shadow-lg text-zinc-900 space-y-4 cursor-default
             w-[90vw] max-w-md sm:w-80 md:w-96"
  style={{ top: position.y, left: position.x, maxWidth: 'calc(100vw - 1rem)' }}
>
  <div
    className="p-2 bg-zinc-200 rounded-t-lg cursor-move font-bold text-center select-none flex justify-between items-center"
    onMouseDown={handleMouseDown}
  >
    <span>Chatea conmigo y conoceme</span>
    <button
      className="text-xl font-bold px-2 hover:bg-zinc-300 rounded"
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen(false);
      }}
      aria-label="Cerrar chat"
      type="button"
    >
      −
    </button>
  </div>

  <div className="p-4 pt-1 flex flex-col h-80">
    <div className="space-y-2 overflow-y-auto text-sm flex-grow pr-1">
      {messages.map((msg, idx) => {
        const isUser = msg.startsWith("👤");
        return (
          <div
            key={idx}
            className={`whitespace-pre-wrap px-3 py-2 rounded-md max-w-full ${
              isUser ? "bg-zinc-100 self-end" : "bg-zinc-100 self-start"
            }`}
          >
            {msg}
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>

    <div className="flex gap-2 mt-4">
      <input
        className="flex-grow px-3 py-1 rounded bg-zinc-100 text-zinc-900 border border-zinc-300 min-w-0"
        placeholder="¿Qué querés saber?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && enviarPregunta()}
      />
      <button
        className="px-4 py-1 bg-zinc-500 text-white rounded hover:bg-zinc-600 disabled:opacity-50 flex-shrink-0"
        onClick={enviarPregunta}
        disabled={loading}
      >
        {loading ? "..." : "Enviar"}
      </button>
    </div>
  </div>
</div>

      )}
    </>
  );
}
