import { useState } from 'react';
import Header from "./components/layout/Header";
import Galery from "./components/layout/Galery";
import SearchField from "./components/layout/SearchField";
import Footer from "./components/layout/Footer";
function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Header />

      <SearchField
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

        <Galery searchTerm={searchTerm} />
        
      <Footer />
    </div>
  )
}

export default App
