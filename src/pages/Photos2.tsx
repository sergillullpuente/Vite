import Heading from "../components/Heading";
import React, { useEffect, useState } from "react";
import { getDownloadURL, getMetadata, getStorage, list, ref } from "firebase/storage";
import { Toaster } from "react-hot-toast";
import { Image, ImageSrc } from "../domain/image";
import { app } from "../domain/firebase.config";

const storage = getStorage(app);
const listRef = ref(storage, 'photos');

const Photos2 = () => {
    const [imageURLs, setImageURLs] = useState<Image[]>([]);
    const [selectedImage, setSelectedImage] = useState('');
    const [lastImage, setLastImage] = useState('');
    const handleImageClick = (imageSrc: ImageSrc) => {
        setSelectedImage(imageSrc);
    };
    const resetSelectedImage = () => {
        setSelectedImage('');
    };
    const loadMoreImages = async () => {
        try {
            const listResult = await list(listRef, { maxResults: 20, pageToken: lastImage ? lastImage : undefined });
            setLastImage(listResult.nextPageToken ?? '');
            const newImages = await Promise.all(
                listResult.items.map(async (item) => {
                    const downloadURL = await getDownloadURL(item);
                    const metadata = await getMetadata(item);
                    const createdAt = metadata.customMetadata?.createdAt ?? '';
                    return {
                        id: item.name,
                        name: item.name,
                        href: "#",
                        imageSrc: downloadURL,
                        imageAlt: item.name,
                        createdAt: parseInt(createdAt, 10),
                    };
                })
            );

            const sortedImages = [...imageURLs, ...newImages].sort((a, b) => {
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            setImageURLs(sortedImages);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadMoreImages();
    }, []);
    return (
        <div>
            <Heading
                title="fotografies"
                subtitle=""
                imageSrc={undefined}
            />
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{duration: 3000}}
            />
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-7xl">
                <h2 className="sr-only">Wedding photos</h2>
                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center" onClick={resetSelectedImage}>
                        <img src={selectedImage} alt="wedding image" className="max-h-screen max-w-full object-contain" />
                    </div>
                )}
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {imageURLs.map((product: Image) => (
                        <div key={product.id}>
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75 cursor-pointer"
                                    onClick={() => handleImageClick(product.imageSrc)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center p-2">
                    <button className="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl flex justify-center items-center" onClick={loadMoreImages}>
                        Carregar més
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Photos2;
