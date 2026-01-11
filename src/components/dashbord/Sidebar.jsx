import Link from "next/link"
import {Home , Calendar , BarChart3 , Settings} from "lucide-react"
export default function Sidebar () {
    return(   <div className="absolute top-[70px] left-0 bottom-0 w-[70px] bg-[#F5F5F5] border-r border-slate-200 sm:block hidden">
        <nav className="flex flex-col gap-2 p-3 pt-6">
          {/*Modifier le div en link*/}

          <Link className="w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white cursor-pointer hover:shadow-md transition-shadow  focus:outline focus:outline-2 focus:outline-black" href="#" aria-label="Accueil">
            <Home className="w-5 h-5" />
          </Link>
          {/*Modifier le div en link*/}
          <Link className="w-11 h-11 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white cursor-pointer transition-colors focus:outline focus:outline-2  focus:outline focus:outline-2 focus:outline-black" href="#" aria-label="Calendrier" >
            <Calendar className="w-5 h-5" />
          </Link>
          {/*Modifier le div en link*/}
          <Link className="w-11 h-11 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white cursor-pointer transition-colors focus:outline  focus:outline focus:outline-2 focus:outline-black" href="#" aria-label="Statistique">
            <BarChart3 className="w-5 h-5" />
          </Link>
          {/*Modifier le div en link*/}
          <Link className="w-11 h-11 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white cursor-pointer transition-colors focus:outline  focus:outline focus:outline-2 focus:outline-black" href="#" aria-label="Paramètres">
            <Settings className="w-5 h-5" />
          </Link>
        </nav>
      </div>)
}