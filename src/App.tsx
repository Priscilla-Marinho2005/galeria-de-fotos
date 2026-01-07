import { Analytics } from '@vercel/analytics/react';
import { useState } from 'react';
import Header from "./components/layout/Header";
import Galery from "./components/layout/Galery";
import SearchField from "./components/layout/SearchField";
import Footer from "./components/layout/Footer";
function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 
      ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}
      `}>
      <Header />

      <SearchField
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <Galery searchTerm={searchTerm} />

      <Footer />
      <Analytics />
    </div>
  )
}

export default App
