export function EventCard({event}) {
   return( <div key={event.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              {/* Ajouter une alternative */}
              <img
                src={event.image}
                alt={`Image de l’événement ${event.title}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">

                <p className="mb-2">{event.title}</p>
                {/* Améliorer le contraste du texte */}

                <p className="text-[#6a6a6a] mb-4">{event.date}</p>

                <button className="inline-block px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg cursor-pointer hover:shadow-md transition-shadow focus:outline-2 focus:outline-black">
                  Voir
                </button>
              </div>
            </div>)
}