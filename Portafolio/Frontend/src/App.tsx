// App.tsx
import "./index.css";
import "./styles/CardProjectsFlip.css";

import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Terminal from "./components/Terminal";
import CursorNeon from "./components/CursorNeon";
import { useState } from "react";

function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <div className="font-sans bg-zinc-100 text-gray-200 min-h-screen flex flex-col">
      <CursorNeon />
      <Header />

      <main className="flex-1 flex flex-col relative min-h-0">
        {!terminalOpen && <Projects />}

        {terminalOpen && (
          <div className="absolute inset-0 bg-black z-10 flex flex-col">

            <Terminal 
            isOpen={terminalOpen} 
            setIsOpen={setTerminalOpen} 
            messages={messages} 
            setMessages={setMessages} 
            />
          </div>
        )}
      </main>

      <Footer onToggleTerminal={() => setTerminalOpen(!terminalOpen)} />
    </div>
  );
}

export default App;
