import {toast, Toaster} from "react-hot-toast";
import Heading from "../components/Heading";
import React from "react";

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
            <div className="font-yanone text-green-800 text-xl font-medium rounded-lg py-4 mx-auto w-full lg:max-w-4xl">
                <div className="flex flex-col space-y-4 tracking-widest">
                        <div className="space-x-4">
                            <span>· Data: Dissabte, 23 de Setembre de 2023</span>
                        </div>
                        <div className="space-x-4">
                            <span>· Lloc: Finca La Baumeta, La Quar, Berguedà</span>
                        </div>
                        <div className="space-x-4">
                            <span>· Hora de convocatòria: 12:30</span>
                        </div>
                        <div className="space-x-4">
                            <span>· Si teniu previst dormir en una haima veniu amb temps d'antelació per instal·lar-vos.</span>
                        </div>
                        <div className="space-x-4">
                            <span>· Com arribar-hi i aparcament: aquí us deixem l'enllaç de <a className='text-orange-800' target='_blank' href='https://goo.gl/maps/gHmWrP5KDvHqCy2q7?coh=178571&entry=tt'>Google Maps</a>. Hi ha aparcament disponible a la finca.</span>
                        </div>
                        <div className="space-x-4">
                            <span>· Si algú vol participar en la cerimònia que es posi en contacte amb el nostre amic/oficiant Jordi <a className='text-orange-800' href="tel:662338323">662338323</a>.</span>
                        </div>
                        <div className="space-x-4">
                            <span>· El casament té lloc en un entorn natural amb un risc d'incendis elevat a les èpoques d'estiu, així que aneu amb compte amb les burilles de cigarret. També s'ha d'evitar l'ús de confeti artificial, purpurina, etc.</span>
                        </div>
                        <div className="space-x-4">
                            <span>· Els mòbils estan permesos, però en tot moment hi haurà professionals enregistrant l'esdeveniment. Procureu no interferir en la seva feina.</span>
                        </div>
                        <div className="space-x-4">
                            <span>· Qui vulgui fer una aportació econòmica al casament us deixem el nostre número del compte. El millor regal serà la vostra presència.
                                <a className="text-orange-800 hover:bg-gray-100 transition cursor-copy"
                                   onClick={() => {
                                       navigator.clipboard.writeText('ESXX XXXX XXXX XXXX XXXX XXXX');
                                       toast("IBAN copiat en el porta-retalls", { icon: "✂️" });
                                   }}> ES38 0186 1001 9205 2394 5192
                                </a>
                            </span>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Info
