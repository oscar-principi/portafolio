export default function Header() {
  return (
    <header className="bg-zinc-200 shadow sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-start items-center">
        <div className="text-left">
          <h1 className="text-zinc-800 text-4xl font-bold leading-tight">
            Oscar Dev{" "}
            <span className="text-zinc-600 text-sm font-sans align-middle">
              Fullstack.
            </span>
          </h1>
        </div>
      </div>
    </header>
  );
}
