import Link from "next/link"
export default function HeroSection () {
    return(
           <section id="acceuil" className="relative sm:h-[500px] p-8 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1737868131532-0efce8062b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbGFwdG9wfGVufDF8fHx8MTc2NDU2MjAxNHww&ixlib=rb-4.1.0&q=80&w=1080)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
        
                <div className="relative z-10 text-center max-w-3xl px-8">
                  {/* Utiliser un h1 pour le titre principal de la page */}
        
                  <h1 className="mb-4">Transformez votre façon de travailler</h1>
                  {/* Améliorer le contraste du texte */}
                  <p className="text-[#3f3f3f] mb-8 sm:text-xl text-sm">
                    Découvrez une plateforme innovante qui révolutionne la gestion de vos projets et optimise votre productivité
                  </p>
        
                  <div className="flex gap-4 justify-center items-center sm:flex-row flex-col">
                    {/* Remplacer une div cliquable par un bouton accessible clavier */}
        
                    <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-shadow cursor-pointer">
                      Commencer
                    </button>
                    {/* Améliorer le contraste du texte */}
                    {/* Remplacer une div cliquable par un lien */}
        
                    <Link className="text-[#3f3f3f]  cursor-pointer text-sm underline" href="#">
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </section>
    )
}