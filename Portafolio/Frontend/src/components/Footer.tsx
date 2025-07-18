import Contact from "./Contact";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-zinc-100 py-2 border-t border-zinc-300 z-40">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-2 text-sm text-zinc-600 px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-4 w-full">
          <p className="text-center md:text-left w-full md:w-auto">
            © {new Date().getFullYear()} Oscar Dev Jr. Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-4 mt-2 md:mt-0 w-full md:w-auto">
            <Contact />
          </div>
        </div>
      </div>
    </footer>
  );
}

