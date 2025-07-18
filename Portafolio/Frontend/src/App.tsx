import './index.css'
import './styles/CardProjectsFlip.css'

import Header from './components/Header'
import Tech from './components/Tech'
import Projects from './components/Projects'

import Footer from './components/Footer'
import SobreMi from './components/SobreMi'

function App() {
  return (
    <div className="font-sans bg-zinc-100 text-gray-200 min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow overflow-auto">
        <Tech />
        <Projects />
        <SobreMi />
      </main>

      <Footer />
    </div>
  );
}

export default App
