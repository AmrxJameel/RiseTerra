import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

// Pages
import HomePage from './pages/HomePage'
import ContractingPage from './pages/ContractingPage'
import TransportPage from './pages/TransportPage'

type Lang = 'en' | 'ar'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [lang, setLang] = useState<Lang>('en')

  return (
    <main className="app-root">
      <ScrollToTop />
      <Navbar lang={lang} onLangChange={setLang} />
      
      <Routes>
        <Route path="/" element={<HomePage lang={lang} />} />
        <Route path="/contracting" element={<ContractingPage lang={lang} />} />
        <Route path="/transport" element={<TransportPage lang={lang} />} />
      </Routes>
      
      <Footer lang={lang} />
    </main>
  )
}

export default App
