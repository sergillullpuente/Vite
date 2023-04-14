import Heading from "../components/Heading";

function Info() {
    return (
        <div className="bg-white">
            <Heading
                title="Informació de l'esdeveniment"
                subtitle=""
                imageSrc={undefined}
            />
            <div className="px-6 lg:px-8 flex text-center flex-col mb-8">
                <p className="font-antialiased pointer-events-auto box-border border-0 border-solid border-gray-300 font-serif tracking-widest text-green-800 text-2xl font-medium">
                    Data: 23-09-2023
                </p>
                <p className="font-antialiased pointer-events-auto box-border border-0 border-solid border-gray-300 font-serif tracking-widest text-green-800 text-2xl font-medium">
                    Lloc: Finca La Baumeta, La Quar, Berguedà
                </p>
            </div>
        </div>
    )
}
export default Info
