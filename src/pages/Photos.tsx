import Heading from "../components/Heading";
import React, {useEffect, useState} from "react";
import {getDownloadURL, getMetadata, getStorage, listAll, ref, uploadBytes} from "firebase/storage";
import {toast, Toaster} from "react-hot-toast";
import {Image, ImageSrc} from "../domain/image";
import {app} from "../domain/firebase.config";

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
    useEffect(() => {
        listAll(listRef)
            .then(async ({ items }) => {
                const urls: Image[] = await Promise.all(
                    items.map(async (item) => {
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
                setImageURLs(urls.sort((a, b) => b.createdAt - a.createdAt));
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <div className="bg-white">
            <Heading
                title="Les fotos"
                subtitle="Aquí podreu trobar les fotografies del casament un cop passat l'esdeveniment. També us deixem el link per si voleu compartir les vostres fotografies."
                imageSrc={undefined}
            />
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{duration: 3000}}
            />
            <section className="mx-auto max-w-2xl lg:max-w-4xl text-center">
                <input type="file" accept="image/png, image/jpeg" multiple onChange={(e) => setSelectedFiles(e.target.files)} />
                <button className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15" onClick={handleUpload}>
                    {uploading ? (
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l1-2.647z"></path>
                        </svg>
                    ) : "Penjar"}
                </button>

            </section>
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Wedding photos</h2>
                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center" onClick={resetSelectedImage}>
                        <img src={selectedImage} alt="wedding image" className="max-h-screen max-w-full object-contain" />
                    </div>
                )}
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {imageURLs.map((product: Image) => (
                        <div key={product.id} className="group relative">
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
            </div>
        </div>
    );
};

export default Photos;
