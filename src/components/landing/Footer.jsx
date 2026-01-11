import{ Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 py-8 px-12">
            <div className="max-w-6xl mx-auto ">
                <div className="flex justify-between items-center mb-6 flex-col sm:flex-row gap-2">
                    <p className="text-[#3f3f3f] text-sm">© 2025 Entreprise. Tous droits réservés.</p>
                    <div className="flex gap-3">

                        {/* Remplacer une span par un link*/}
                        <Link href='#' className="text-[#3f3f3f]  text-xs cursor-pointer">Confidentialité</Link>
                        <Link href='#' className="text-[#3f3f3f]  text-xs cursor-pointer">Conditions</Link>
                        <Link href='#' className="text-[#3f3f3f]  text-xs cursor-pointer">Cookies</Link>
                    </div>
                </div>

                <div className="flex justify-center gap-4">
                    <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer" aria-label="Facebook">
                        <Facebook className="w-4 h-4 text-slate-400" aria-hidden="true" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer" aria-label="Twitter">
                        <Twitter className="w-4 h-4 text-slate-400" aria-hidden="true" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer" aria-label="Instagram">
                        <Instagram className="w-4 h-4 text-slate-400" aria-hidden="true" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer" aria-label="LinkedIn">
                        <Linkedin className="w-4 h-4 text-slate-400" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </footer>
    )
}