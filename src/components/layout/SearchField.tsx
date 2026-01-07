import { Search, Moon, Sun } from "lucide-react"

interface SearchFieldProps {
     searchTerm: string;
     setSearchTerm: (term: string) => void;
     isDarkMode: boolean;
     setIsDarkMode: (value: boolean) => void;
}

function SearchField({ searchTerm, setSearchTerm, isDarkMode, setIsDarkMode }: SearchFieldProps) {

     return (
          <div className="poppins flex justify-between items-center my-6 px-4 max-w-7xl mx-auto w-full">
               <div className="w-12"></div>

               <div className="
                    flex items-center gap-2 w-full max-w-xl 
                    border rounded-2xl shadow-lg
                    p-2 focus-within:ring-2 focus-within:ring-violet-500 border-gray-300 transition">

                    <input
                         type="text"
                         placeholder="Pesquise o nome da foto..."
                         aria-label="Campo de busca"
                         className={`flex-1 bg-transparent outline-none max-w-full
                              ${isDarkMode ? 'text-white placeholder-gray-400' : 'text-black placeholder-gray-500'}`}
                         value={searchTerm}
                         onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <button className="bg-[#8B5CF6] hover:bg-violet-600 transition rounded-2xl p-1.5">
                         <Search color="#ffff" size={20} />
                    </button>
               </div>

               <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`rounded-full p-3 transition-all shadow-lg hover:scale-110
                    ${isDarkMode 
                         ? 'bg-white hover:bg-gray-100 text-gray-800' 
                         : 'bg-gray-800 hover:bg-gray-700 text-white'
                    }`}
                    aria-label="Alternar tema"
                    title={isDarkMode ? "Modo Claro" : "Modo Escuro"}
               >
                    {isDarkMode ? (
                         <Sun size={20} />
                    ) : (
                         <Moon size={20} />
                    )}
               </button>
          </div>
     )
}

export default SearchField