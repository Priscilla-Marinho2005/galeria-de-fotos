import { Search } from "lucide-react"

function SearchField() {

     return (
          <div className="flex justify-center my-6 px-4">
               <div className="
               flex items-center gap-2 w-full max-w-xl 
               border border-gray-300 rounded-2xl 
               p-2 focus-within:ring-2 focus-within:ring-violet-500 transition">

                    <input
                         type="text"
                         placeholder="Pesquise o nome da foto..."
                         aria-label="Campo de busca"
                         className="flex-1 bg-transparent outline-none max-w-full"
                    />

                    <button className="bg-[#8B5CF6] hover:bg-violet-600 transition rounded-2xl p-1.5">
                         <Search color="#ffff" size={20} />
                    </button>
               </div>
          </div>
     )
}

export default SearchField