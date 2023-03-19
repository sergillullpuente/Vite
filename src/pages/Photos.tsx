import Heading from "../components/Heading";
import {useState} from "react";

const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
]

const Photos = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const resetSelectedImage = () => {
        setSelectedImage(null);
    };

    return (
        <div className="bg-white">
            <Heading
                title="Les fotos"
                subtitle="Aquí podreu trobar les fotografies del casament un cop passat l'esdeveniment. També us deixem el link per si voleu compartir les vostres fotografies."
                imageSrc={undefined}
            />
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center" onClick={resetSelectedImage}>
                        <img src={selectedImage} alt="Selected product" className="max-h-screen max-w-full object-contain" />
                    </div>
                )}

                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75 cursor-pointer"
                                    onClick={() => handleImageClick(product.imageSrc)}
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Photos;
