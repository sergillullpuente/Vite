function Assistance() {
    return (
        <section className="flex flex-col items-center">
            <p className="font-bold text-center">Confirmeu la vostra assistència</p>
            <p className="text-center">
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
