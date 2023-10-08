function Home() {
    return (
      <main className='max-w-7xl mx-auto'>
        <section id='days' className='flex flex-col items-center text-center align-middle font-yanone tracking-widest text-3xl font-normal text-green-900 pt-5 gap-5'>
            <div>JA ENS HEM CASAT!</div>
            <video src="/video_mute.mp4" preload="metadata" className="blur-in-expand rounded-lg w-full h-full object-cover" autoPlay loop muted playsInline>
            </video>
        </section>
      </main>
    )
}

export default Home
