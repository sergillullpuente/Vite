function Photos() {
    return(
        <main>
            <p className='flex flex-col items-center text-center align-middle font-yanone tracking-widest text-3xl font-normal text-green-900 pt-5 gap-5'>Aquí podreu trobar les fotografies del casament un cop passat l'esdeveniment. També us deixem el link per si voleu compartir les vostres fotografies. </p>
            <section id='photos'>
                <div className='flex flex-wrap justify-center max-w-7xl mx-auto px-5 py-4'>
                	<img className='h-48 w-72 md:w-64 sm:w-52 my-2 mx-2 border border-gray-300 shadow-md bg-gray-100 p-5 box-border' src='https://via.placeholder.com/300x200' alt='image1'/>
                	<img className='h-48 w-72 md:w-64 sm:w-52 my-2 mx-2 border border-gray-300 shadow-md bg-gray-100 p-5 box-border' src='https://via.placeholder.com/300x200' alt='image2'/>
                	<img className='h-48 w-72 md:w-64 sm:w-52 my-2 mx-2 border border-gray-300 shadow-md bg-gray-100 p-5 box-border' src='https://via.placeholder.com/300x200' alt='image3'/>
                	<img className='h-48 w-72 md:w-64 sm:w-52 my-2 mx-2 border border-gray-300 shadow-md bg-gray-100 p-5 box-border' src='https://via.placeholder.com/300x200' alt='image8'/>
                </div>
			</section>
        </main>
    )
}

export default Photos
