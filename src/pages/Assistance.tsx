function Assistance() {
    return (
        <section className="flex flex-col items-center">
            <p className="leading-1.5 font-antialiased pointer-events-auto box-border border-0 border-solid border-gray-300 mt-24 text-center font-serif tracking-widest text-green-800 text-2xl font-medium uppercase font-bold">Confirmeu la vostra assistència</p>
            <p className="font-antialiased pointer-events-auto box-border border-0 border-solid border-gray-300 p-0 max-w-md text-left leading-7 my-8 font-serif tracking-widest text-green-800 text-base font-normal">
                Ens encantaria saber si podeu assistir al nostre casament. Si us plau, ompliu el formulari
                per confirmar la vostra assistència. Gràcies!
            </p>
            <div className="my-4 w-full max-w-lg">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScDcUaTgGD72utHSf88ZAds036xP8grj51dLrydhuB5jEwR9Q/viewform?embedded=true"
                    width="100%"
                    height="800"
                >
                    S&#39;està carregant…
                </iframe>
            </div>
        </section>
    );
}

export default Assistance
