import Tech from './Tech'

export default function Header() { 
  return (
    <header
      className="bg-black sticky top-0 z-50 border-b-2 border-red-600
                 shadow-[0_4px_10px_rgba(255,0,0,0.8),0_4px_20px_rgba(255,0,0,0.6)]
                 transition-all hover:shadow-[0_4px_12px_rgba(255,0,0,1),0_4px_24px_rgba(255,0,0,0.8)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        
      <h1 className="neon-title text-5xl sm:text-6xl lg:text-7xl font-light font-poppins leading-tight whitespace-nowrap
                    bg-gradient-to-r from-red-600 via-red-700 to-red-800
                    bg-clip-text text-transparent">
        Oscar Dev
      </h1>

        <div className="w-full sm:w-auto flex-1 flex items-center overflow-hidden">
          <Tech noOffset />
        </div>

      </div>
    </header>
  );
}
