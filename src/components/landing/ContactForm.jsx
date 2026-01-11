export default function ContactForm() {
    return (<section className="sm:py-16 sm:px-12 p-5 bg-gradient-to-br from-slate-50 to-slate-100" id="contact">
        <div className="max-w-2xl mx-auto">
            <h2 className="text-center mb-10 text-slate-800">Contactez-nous</h2>

            <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="space-y-4">
                    {/* Ajouter label caché visuellement mais lisible par lecteur d’écran. */}
                    <label htmlFor="name" className="sr-only">Nom</label>
                    <input
                        type="text"
                        placeholder="Nom"
                        className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200"
                    />
                    {/* Ajouter label caché visuellement mais lisible par lecteur d’écran. */}
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                        aria-describedby="emailHelp"

                        type="email"
                        placeholder="Email"
                        className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200"
                    />

                    <p id="emailHelp" className="text-sm text-gray-500">
                        Nous n’envoyons jamais de spam à votre adresse.
                    </p>

                    {/* Ajouter label caché visuellement mais lisible par lecteur d’écran. */}
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                        placeholder="Message"
                        rows={4}
                        className="w-full px-4 py-3 bg-slate-50 rounded-lg border border-slate-200 resize-none"
                    ></textarea>


                    {/* Remplacer une div par un bouton accessible clavier */}
                    <button className="w-full h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg cursor-pointer hover:shadow-md transition-shadow flex items-center justify-center">
                        Envoyer
                    </button>
                </div>
            </div>
        </div>
    </section>)
}