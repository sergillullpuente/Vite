import Heading from "../components/Heading";
import {toast, Toaster} from "react-hot-toast";

function Info() {
    return (
        <div className="bg-white">
            <Heading
                title="Informació de l'esdeveniment"
                subtitle=""
                imageSrc={undefined}
            />
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{duration: 2000}}
            />
            <div className="font-yanone text-green-800 text-2xl font-medium bg-white shadow-lg rounded-lg p-6 mx-auto my-4 w-full lg:w-1/2">
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-center space-x-4">
                        <span>Data: Dissabte, 23 de Setembre de 2023</span>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                        <span>Lloc: Finca La Baumeta, La Quar, Berguedà</span>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                        <span>Horari: 14:00 - 24:00</span>
                    </div>
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
