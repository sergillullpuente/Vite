const DAY = 1000 * 60 * 60 * 24;
const daysUntil = (date: Date, otherDate: Date) =>
    Math.ceil(Math.abs(date.valueOf() - otherDate.valueOf()) / DAY);

function Home() {
    return (
      <main className='max-w-7xl mx-auto'>
        <section id='days' className='flex flex-col items-center text-center align-middle font-yanone tracking-widest text-3xl font-normal text-green-900 pt-5 gap-5'>
            <div>ENS CASEM!</div>
            <div>FALTEN {daysUntil(new Date(), new Date('2023-09-23'))} DIES </div>
            <video src="/video_mute.mp4" preload="metadata" className="blur-in-expand rounded-lg w-full h-full object-cover" autoPlay loop muted playsInline>
            </video>
        </section>
      </main>
    )
}

export default Home
