import {toast, Toaster} from "react-hot-toast";
import Heading from "../components/Heading";
import React from "react";

const LIST_EVENTS = [
    '· Data: Dissabte, 23 de Setembre de 2023',
    '· Lloc: Finca La Baumeta, La Quar, Berguedà',
    '· Hora de convocatòria: 12:30',
    '· Si teniu previst dormir en una haima veniu amb temps d\'antelació per instal·lar-vos.',
    '· Com arribar-hi i aparcament: aquí us deixem l\'enllaç de Google Maps: [enllaç a Google Maps]. Hi ha aparcament disponible a la finca.',
    '· Si algú vol participar en la cerimònia que es posi en contacte amb el nostre amic/oficiant Jordi xxxxxxxxx.',
    '· El casament té lloc en un entorn natural amb un risc d\'incendis elevat a les èpoques d\'estiu, així que aneu amb compte amb les burilles de cigarret. També s\'ha d\'evitar l\'ús de confeti artificial, purpurina, etc.',
    '· Els mòbils estan permesos, però en tot moment hi haurà professionals enregistrant l\'esdeveniment. Procureu no interferir en la seva feina.',
    '· Qui vulgui fer una aportació econòmica al casament us deixem el nostre número del compte. El millor regal serà la vostra presència. [NÚMERO DE COMPTE]',
]

function Info() {
    return (
        <div>
            <Heading
                title="Informació"
                subtitle=''
                imageSrc={undefined}
            />
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{duration: 2000}}
            />
            <div className="font-yanone text-green-800 text-xl font-medium rounded-lg py-4 mx-auto w-full lg:w-1/2">
                <div className="flex flex-col space-y-4">
                    {LIST_EVENTS.map((event) => (
                        <div className="space-x-4">
                            <span>{event}</span>
                        </div>
                    ))}
                </div>
            </div>
            <section className="font-yanone flex flex-wrap justify-center items-center tracking-widest text-green-800 text-2xl font-medium p-10">
                <div className="flex flex-col items-center">
                    <div className="w-full whitespace-normal bg-white rounded-xl p-4 hover:bg-gray-100 transition cursor-copy max-w-full flex items-center justify-center"
                         onClick={() => {
                             navigator.clipboard.writeText('ESXX XXXX XXXX XXXX XXXX XXXX');
                             toast("IBAN copiat en el porta-retalls", { icon: "✂️" });
                         }}
                    >
                        ESXX XXXX XXXX XXXX XXXX XXXX
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Info
