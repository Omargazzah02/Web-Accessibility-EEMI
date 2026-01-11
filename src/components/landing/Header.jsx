import Link from "next/link"
export default function Header() {
    return(
      <header className="sticky top-0 z-50 bg-white shadow-sm  h-[70px] flex items-center justify-between px-12">
        <Link className="flex items-center gap-3" href='#'>
          <div className="w-10 h-10 rounded-lg bg-[#D5D5D5]"></div>
          <span className="text-[#3f3f3f]">Logo</span>
        </Link>


        {/* Remplacer des div cliquables par une navigation sémantique */}
        <nav className="sm:flex gap-8 hidden">
          <Link href="#acceuil" className="text-[#3f3f3f]  text-sm" >Accueil</Link>
          <Link href="#features" className="text-[#3f3f3f]  text-sm">Fonctionnalités</Link>
          <Link href="#contact" className="text-[#3f3f3f]  text-sm">Contact</Link>
        </nav>
      </header>
)
}