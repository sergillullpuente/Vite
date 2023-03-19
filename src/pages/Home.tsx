const DAY = 1000 * 60 * 60 * 24;
const daysUntil = (date: Date, otherDate: Date) =>
    Math.ceil(Math.abs(date.valueOf() - otherDate.valueOf()) / DAY);

function Home() {
    const customStyle = {
        filter: "invert(1) hue-rotate(180deg)"
    };
    return (
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <section id='days' className='flex flex-col items-center text-center align-middle font-yanone tracking-widest text-3xl font-normal text-green-900 pt-5 gap-5'>
            <div>ENS CASEM!</div>
            <div>FALTEN {daysUntil(new Date(), new Date('2023-09-23'))} DIES</div>
            <div className='font-ebg text-xl'>Finca La Baumeta, La Quar, Berguedà</div>
            <a href='https://www.labaumeta.com' target='_blank'>
                <img style={customStyle} src="/logo-la-baumeta.png" alt="La Baumeta logo" className="max-w-sm h-auto block mx-auto"/>
            </a>
        </section>
      </main>
    )
}

export default Home
