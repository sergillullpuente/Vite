import Heading from "../components/Heading";
import {toast, Toaster} from "react-hot-toast";

function Info() {
    return (
        <div className="bg-white">
            <Heading
                title="ℹ️ Informació de l'esdeveniment"
                subtitle=""
                imageSrc={undefined}
            />
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{duration: 2000}}
            />
            <div className="px-6 lg:px-8 flex text-center flex-col mb-8">
                <p className="font-antialiased pointer-events-auto box-border border-0 border-solid border-gray-300 font-serif tracking-widest text-green-800 text-2xl font-medium">
                    Data: 23-09-2023
                </p>
                <p className="font-antialiased pointer-events-auto box-border border-0 border-solid border-gray-300 font-serif tracking-widest text-green-800 text-2xl font-medium">
                    Lloc: Finca La Baumeta, La Quar, Berguedà
                </p>
                <section className="p-10">
                    <h2 className="text-lg mb-5">Compte bancari</h2>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center border-gray-300 border rounded py-2 px-4 mb-2">
                            <div className="w-full whitespace-normal bg-white rounded-xl p-4 hover:bg-gray-100 transition cursor-copy max-w-full flex items-center justify-center"
                                onClick={() => {
                                    navigator.clipboard.writeText('ESXX XXXX XXXX XXXX XXXX XXXX');
                                    toast("IBAN copiat en el porta-retalls", { icon: "✂️" });
                                }}
                            >
                                ESXX XXXX XXXX XXXX XXXX XXXX
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Info
