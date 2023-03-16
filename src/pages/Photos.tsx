// const Photos = () => {
//     return (
//             <section id='photos'>
//                 <p className='flex flex-col items-center text-center align-middle font-yanone tracking-widest text-3xl font-normal text-green-900 pt-5 gap-5'>Aquí podreu trobar les fotografies del casament un cop passat l'esdeveniment. També us deixem el link per si voleu compartir les vostres fotografies. </p>
//                 <div className='flex flex-wrap justify-center max-w-7xl mx-auto px-5 py-4'>
//                 	<img className='h-48 w-72 md:w-64 sm:w-52 my-2 mx-2 border border-gray-300 shadow-md bg-gray-100 p-5 box-border' src='https://via.placeholder.com/300x200' alt='image1'/>
//                 	<img className='h-48 w-72 md:w-64 sm:w-52 my-2 mx-2 border border-gray-300 shadow-md bg-gray-100 p-5 box-border' src='https://via.placeholder.com/300x200' alt='image2'/>
//                 	<img className='h-48 w-72 md:w-64 sm:w-52 my-2 mx-2 border border-gray-300 shadow-md bg-gray-100 p-5 box-border' src='https://via.placeholder.com/300x200' alt='image3'/>
//                 	<img className='h-48 w-72 md:w-64 sm:w-52 my-2 mx-2 border border-gray-300 shadow-md bg-gray-100 p-5 box-border' src='https://via.placeholder.com/300x200' alt='image8'/>
//                 </div>
//         	</section>
//     )
// };
//
// export default Photos

import React, { useState } from "react";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Photos = () => {
    const [images, setImages] = useState([
        {
            original: 'https://via.placeholder.com/300x200',
            thumbnail: 'https://via.placeholder.com/300x200',
            originalAlt: 'Foto del casament 1',
            thumbnailAlt: 'Foto del casament 1'
        },
        {
            original: 'https://via.placeholder.com/300x200',
            thumbnail: 'https://via.placeholder.com/300x200',
            originalAlt: 'Foto del casament 2',
            thumbnailAlt: 'Foto del casament 2'
        },
        {
            original: 'https://via.placeholder.com/300x200',
            thumbnail: 'https://via.placeholder.com/300x200',
            originalAlt: 'Foto del casament 3',
            thumbnailAlt: 'Foto del casament 3'
        },
        {
            original: 'https://via.placeholder.com/300x200',
            thumbnail: 'https://via.placeholder.com/300x200',
            originalAlt: 'Foto del casament 4',
            thumbnailAlt: 'Foto del casament 4'
        },
        {
            original: 'https://via.placeholder.com/300x200',
            thumbnail: 'https://via.placeholder.com/300x200',
            originalAlt: 'Foto del casament 5',
            thumbnailAlt: 'Foto del casament 5'
        },
        {
            original: 'https://via.placeholder.com/300x200',
            thumbnail: 'https://via.placeholder.com/300x200',
            originalAlt: 'Foto del casament 6',
            thumbnailAlt: 'Foto del casament 6'
        }
    ]);

    return (
        <section className="flex flex-col items-center">
            <p className="font-bold text-center">Compartiu les vostres fotos del casament!</p>
            <p className="text-center">
                Ens encantaria veure les fotos que heu fet durant el nostre casament! Si us plau, compartiu-les amb nosaltres aquí i les afegirem a la nostra col·lecció de fotos. Gràcies per compartir aquest dia tan especial amb nosaltres!
            </p>
            <ImageGallery items={images} showPlayButton={false} />
        </section>
    );
};

export default Photos;
