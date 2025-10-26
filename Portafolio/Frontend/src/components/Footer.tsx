import Contact from "./Contact";

interface FooterProps {
  onToggleTerminal?: () => void;
}

export default function Footer({ onToggleTerminal }: FooterProps) {
  return (
    <footer
      className="bg-black border-t-2 border-red-600
                 shadow-[0_-4px_12px_rgba(255,0,0,0.8),0_-4px_24px_rgba(255,0,0,0.6)]
                 transition-all hover:shadow-[0_-4px_16px_rgba(255,0,0,1),0_-4px_28px_rgba(255,0,0,0.8)]
                 z-40 p-1 mt-auto"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-1 text-sm text-red-500">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-4 w-full">
          
          <p className="text-center whitespace-pre-wrap break-words font-mono text-xs sm:text-sm md:text-base lg:text-lg
               text-red-600 drop-shadow-[0_0_10px_rgba(255,0,0,0.9)]">
            © {new Date().getFullYear()} Oscar Dev - Todos los derechos reservados.
          </p>

          <div className="flex justify-center gap-4 mt-2 md:mt-0 w-full md:w-auto">
            <Contact onToggleTerminal={onToggleTerminal} />
          </div>

        </div>
      </div>
    </footer>
  );
}
