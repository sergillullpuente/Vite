import Heading from "../components/Heading";
import React, { useEffect, useState } from "react";
import { getDownloadURL, getMetadata, getStorage, list, ref, uploadBytes } from "firebase/storage";
import { toast, Toaster } from "react-hot-toast";
import { Image, ImageSrc } from "../domain/image";
import { app } from "../domain/firebase.config";

const storage = getStorage(app);
const listRef = ref(storage, 'images');

function createNewImage(file: File, downloadURL: string) {
    return {
        id: Date.now().toString(),
        name: file.name,
        href: "#",
        imageSrc: downloadURL,
        imageAlt: file.name,
        createdAt: Date.now()
    };
}

const Photos = () => {
    const [imageURLs, setImageURLs] = useState<Image[]>([]);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const [uploading, setUploading] = useState(false);
    const [lastImage, setLastImage] = useState('');
    const handleImageClick = (imageSrc: ImageSrc) => {
        setSelectedImage(imageSrc);
    };
    const resetSelectedImage = () => {
        setSelectedImage('');
    };
    const handleUpload = async () => {
        if (!selectedFiles) return;
        setUploading(true);
        const newImages = [];
        for await (const file of selectedFiles) {
            const storageRef = ref(storage, `images/${file.name}`);
            const metadata = {
                customMetadata: {
                    createdAt: Date.now().toString(),
                },
            };
            const snapshot = await uploadBytes(storageRef, file, metadata);
            const downloadURL = await getDownloadURL(snapshot.ref);
            newImages.push(createNewImage(file, downloadURL));
        }
        setImageURLs([...imageURLs, ...newImages].sort((a, b) => b.createdAt - a.createdAt));
        setSelectedFiles(null);
        setUploading(false);
        toast(selectedFiles.length > 1 ? 'Les imatges s\'han penjat correctament' : 'La imatge s\'ha penjat correctament', { icon: "📸️"});
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

            const sortedImages = [...imageURLs, ...newImages].sort((a, b) => b.createdAt - a.createdAt);

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
                title="fotografies convidats"
                subtitle="Aquí podreu trobar les fotografies del casament un cop passat l'esdeveniment. També us deixem l'enllaç per si us animeu a compartir les vostres fotografies. De moment us deixem alguns moments de la preparació."
                imageSrc={undefined}
            />
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{duration: 3000}}
            />
            <section className="flex justify-center">
                <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
                    <div className="m-4">
                        <label className="inline-block mb-2 text-gray-500">{selectedFiles?.length ? selectedFiles.length : 0} imatges seleccionades</label>
                        <div className="flex items-center justify-center w-full">
                            <label
                                className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                <div className="flex flex-col items-center justify-center pt-7">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                                    </svg>
                                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                        Tria les imatges
                                    </p>
                                </div>
                                <input type="file" className="opacity-0" accept="image/*" multiple onChange={(e) => setSelectedFiles(e.target.files)}/>
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <button className="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl flex justify-center items-center" onClick={handleUpload}>
                            {uploading ? (
                                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l1-2.647z"></path>
                                </svg>
                            ) : "Penjar"}
                        </button>
                    </div>
                </div>
            </section>

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

export default Photos;
