import Heading from "../components/Heading";
import React from "react";

const Sleep = () => {
    return (
        <div>
        <Heading
            title='Passar la nit amb haimes'
            subtitle=''
            imageSrc={undefined}
        />
            <div className="font-yanone text-green-800 text-xl font-medium rounded-lg py-4 mx-auto w-full lg:w-1/2">
                <div className="flex flex-col space-y-4">
                    <div className="space-x-4">
                        <span>· Quan ja no pogueu ballar més, tingueu la panxa plena i volgueu anar a dormir, ho podreu fer a unes còmodes haimes al terreny de la casa.</span>
                    </div>
                    <div className="space-x-4">
                        <span>· Qui hi estigui interresat heu de contactar amb Zenith experience, la empressa que s’encarrega de la gestió i instal·lació. Aquesta possibilitat va a càrrec de cadescú.</span>
                    </div>
                    <div className="space-x-4">
                        <span>· Us deixem el PDF informatiu del tipus d’allotjament que ofereixen.</span>
                    </div>
                    <div className="space-x-4">
                        <span>· Si escolliu quedar-vos, heu d’enviar un mail a la següent adreça amb assupmte MartaiSergi23.9.23 indicant:</span>
                    </div>
                    <div className="space-x-4 px-3">
                        <span>- Nom</span>
                    </div>
                    <div className="space-x-4 px-3">
                        <span>- Número de persones a dormir a la haima</span>
                    </div>
                    <div className="space-x-4 px-3">
                        <span>- Si trieu l’opción d’allotjament  bàsic o premium</span>
                    </div>
                    <div className="space-x-4">
                        <span>· Un cop feta aquesta pressa de contacte Zenith experience s’encarragarà de tot i us guiarà en el procés.</span>
                    </div>
                    <div className="space-x-4">
                        <span>· Les haimes per una o dues persones tenen suplement. Si és el vostre cas i voleu compartir haima indique-ho en el mail.</span>
                    </div>
                    <div className="bg-yellow-100 flex place-content-center">
                        <div className="mt-2">
                            <p>
                                El límit de reserva és l’11 de juliol
                            </p>
                        </div>
                    </div>
                    <div className="space-x-4">
                        <span>· També us deixem la llista d’allotjaments de la zona per qui busqui una altre alternativa.</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Sleep;
