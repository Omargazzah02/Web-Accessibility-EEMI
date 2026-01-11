import { Menu , Search } from "lucide-react"
import Link from "next/link"
export default function Header () {
    return(
      <header className="absolute top-0 left-0 right-0 h-[70px] bg-white shadow-sm flex items-center px-6 sm:gap-6 gap-3">

        <button className="w-5 h-5 flex items-center justify-center cursor-pointer sm:hidden">
          <Menu className="w-full h-full text-slate-600" />
        </button>

        <Link href='#' aria-label="Logo" className="focus:outline-black">   <div className="w-10 h-10 rounded-lg bg-[#D5D5D5]" ></div>  </Link>




        <div>
          {/* Ajouter Label  caché visuellement mais lisible par lecteur d’écran.*/}

          <label htmlFor="search" className="sr-only">Rechercher</label>

          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
            
              type="text"
              placeholder="Rechercher…"
              className="w-full h-10 pl-10 pr-4 bg-slate-50 rounded-lg border border-slate-200 focus:outline-black"
            />
          </div>

        </div>



      </header>
)
}