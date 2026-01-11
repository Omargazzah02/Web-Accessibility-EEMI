"use client"
import { useState, useEffect, useRef } from "react";
import { Plus, X } from "lucide-react";
import events from "@/data/events.json"
import Header from "@/components/dashbord/Header";
import Sidebar from "@/components/dashbord/Sidebar";
import { EventCard } from "@/components/dashbord/EventCard";
export default function Page() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const modalRef = useRef(null);



  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
        openButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isModalOpen]);



  useEffect(() => {
    if (!isModalOpen) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    function handleTab(e) {
      if (e.key !== "Tab") return;

      if (e.shiftKey) { // Shift + Tab
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else { // Tab
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [isModalOpen]);


  return (
    <div className="relative w-full h-screen bg-[#FAFAFA] overflow-hidden">
      <Header />


      <Sidebar />




      {/* Main Content */}
      <main className="absolute top-[70px] sm:left-[70px]   right-0 bottom-0 p-8 overflow-auto flex flex-col max-sm:w-full ">

        {/* Changer h3 en h1 */}
        <h1 className="mb-6">Mes évènements</h1>

        {/* Event Cards Grid */}
        <div className="sm:grid sm:grid-cols-3 sm:gap-6 flex flex-col gap-4">
          {events.map((event) => (

            <EventCard event={event} />

          ))}
        </div>
      </main>

      {/*Modifier le div en bouton et ajouter aria-label et ajouter la logique d'ouverture*/}
      <button className="absolute bottom-3 right-3 sm:bottom-8 sm:right-8 w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex items-center justify-center text-white"
        aria-label="Ajouter un evenement"
        onClick={() => setIsModalOpen(true)}
        ref={openButtonRef}

      >


        <Plus className="w-6 h-6" />
      </button>
      {/* Modale */}
      {/*Ajouter les attrbiuts des roles aria */}
      {isModalOpen && <div className="absolute inset-0 bg-black/20 flex sm:items-center items-end justify-center" role="dialog" aria-modal="true" aria-labelledby="modal-title" ref={modalRef}>
        <div className="bg-white rounded-2xl shadow-2xl w-[480px] p-8 relative">
          {/*Modifier le div en h2 */}
          <h2 className="mb-6" id="modal-title" >Ajouter un évènement</h2>

          {/*Bouton fermer */}
          <button className="absolute top-6 right-6 w-6 h-6 flex items-center justify-center text-[#D5D5D5] cursor-pointer focus:outline focus:outline-2 focus:outline-purple-500"
            aria-label="Fermer une fenêtre"
            onClick={() => {
              setIsModalOpen(false);
              openButtonRef.current?.focus();
            }}
            ref={closeButtonRef}>

            <X className="w-4 h-4" />
          </button>


          <div className="space-y-4 mb-6">
            {/*Ajouter une label */}
            <label >Nom de l'évènement</label>

            <input
              type="text"
              placeholder="Nom de l'évènement"
              className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200 "
            />

            {/*Ajouter une label et modifier le type d'input text->date */}

            <label >Date</label>

            <input
              type="date"
              placeholder="JJ/MM/AAAA"
              className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200"
            />
          </div>



          <button className="w-full h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg cursor-pointer hover:shadow-md transition-shadow flex items-center justify-center">
            Créer
          </button>
        </div>
      </div>}
    </div>
  );
}
