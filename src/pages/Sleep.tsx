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
            <div className="font-yanone text-green-800 text-xl font-medium rounded-lg py-4 mx-auto w-full lg:max-w-4xl tracking-widest">
                <div className="flex flex-col space-y-4">
                    <div className="space-x-4">
                        <span>· Quan ja no pogueu ballar més, tingueu la panxa plena i volgueu anar a dormir, ho podreu fer a unes còmodes haimes al terreny de la casa.</span>
                    </div>
                    <div className="space-x-4">
                        <span>· Els que hi estigueu interessats heu de contactar amb Zenith experience, l'empresa que s’encarrega de la gestió i instal·lació. Aquesta possibilitat va a càrrec de cadascú.</span>
                    </div>
                    <div className="space-x-4">
                        <span>· Us deixem el <a className='text-orange-800' href='../../public/Glamping%20Zenith%20Experience.pdf' download>PDF</a> informatiu del tipus d’allotjament que ofereixen.</span>
                    </div>
                    <div className="space-x-4">
                        <span>· Si escolliu quedar-vos, heu d’enviar un mail a la següent adreça <a className='text-orange-800' href='mailto:judith@zenithexperience.es'>judith@zenithexperience.es</a> amb assumpte MartaiSergi23.9.23 indicant:</span>
                    </div>
                    <div className="space-x-4 px-3">
                        <span>- Nom i DNI (només el DNI d'una persona)</span>
                    </div>
                    <div className="space-x-4 px-3">
                        <span>- Número de persones a dormir a la haima i com voleu el llit (matrimoni, individual)</span>
                    </div>
                    <div className="space-x-4 px-3">
                        <span>- Si hi ha nens a la haima i quina edat tenen</span>
                    </div>
                    <div className="space-x-4 px-3">
                        <span>- Si trieu l’opció d’allotjament bàsic o prèmium</span>
                    </div>
                    <div className="space-x-4">
                        <span>· Un cop feta aquesta pressa de contacte Zenith experience s’encarregarà de tot i us guiarà en el procés.</span>
                    </div>
                    <div className="space-x-4">
                        <span>· Les haimes per una o dues persones tenen suplement. Si és el vostre cas i voleu compartir la haima cal indicar-ho en el mail.</span>
                    </div>
                    <div className="underline space-x-4">
                        <span>· El límit de reserva és l’11 de juliol.</span>
                    </div>
                    <div className="space-x-4">
                        <span>· També us deixem la llista <a className='text-orange-800' href='../../public/allotjaments.pdf' download>d’allotjaments </a> de la zona per qui busqui una alternativa.</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Sleep;
