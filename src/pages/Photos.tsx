import Heading from "../components/Heading";
import {useEffect, useState} from "react";
import {ref, listAll, getStorage, getDownloadURL, uploadBytes} from "firebase/storage";
import {initializeApp} from "firebase/app";

type ImageSrc = string;
type Image = {
    id: string,
    name: string,
    href: string,
    imageSrc: ImageSrc,
    imageAlt: string,
}

const app = initializeApp(JSON.parse(process.env.FIREBASE_CONFIG ?? ''));
const storage = getStorage(app);
const listRef = ref(storage, 'images');

const Photos = () => {
    const [imageURLs, setImageURLs] = useState<Image[]>([]);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const handleImageClick = (imageSrc: ImageSrc) => {
        setSelectedImage(imageSrc);
    };
    const resetSelectedImage = () => {
        setSelectedImage('');
    };
    const handleUpload = async () => {
        if (!selectedFiles) return;
        const newImages = [];
        for await (const file of selectedFiles) {
            const storageRef = ref(storage, `images/${file.name}`);
            const snapshot = await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(snapshot.ref);
            const newImage = {
                id: Date.now().toString(),
                name: file.name,
                href: "#",
                imageSrc: downloadURL,
                imageAlt: file.name,
            };
            newImages.push(newImage);
        }
        setImageURLs([...imageURLs, ...newImages]);
        setSelectedFiles(null);
    };
    useEffect(() => {
        listAll(listRef)
            .then(async ({ items }) => {
                const urls: Image[] = await Promise.all(
                    items.map(async (item, index) => {
                        return {
                            id: ""+index,
                            name: item.name,
                            href: "#",
                            imageSrc: await getDownloadURL(item),
                            imageAlt: item.name,
                        };
                    })
                );
                setImageURLs(urls);
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
            <section className="mx-auto max-w-2xl lg:max-w-4xl text-center">
                <input type="file" accept="image/png, image/jpeg" multiple onChange={(e) => setSelectedFiles(e.target.files)} />
                <button className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15" onClick={handleUpload}>Upload</button>
            </section>
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center" onClick={resetSelectedImage}>
                        <img src={selectedImage} alt="Selected product" className="max-h-screen max-w-full object-contain" />
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
                            <h3 className="text-center mt-4 text-sm text-gray-700">Autor: <em>{product.name}</em></h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Photos;
