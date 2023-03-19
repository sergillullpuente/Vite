type HeadingProps = {
    title: string;
    subtitle: string;
    imageSrc?: string;
};

const Heading = ({ title, subtitle, imageSrc }: HeadingProps) => {
    return (
            <section className="py-14 px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <figure className="mt-10">
                        <blockquote className="text-center leading-6 sm:text-2xl sm:leading-9">
                            <p className="font-antialiased pointer-events-auto box-border border-0 border-solid border-gray-300 font-serif tracking-widest text-green-800 text-2xl font-medium uppercase font-bold">
                                {title}
                            </p>
                        </blockquote>
                        <figcaption className="mt-10">
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <p className="font-antialiased pointer-events-auto box-border border-0 border-solid border-gray-300 leading-7 my-8 font-serif tracking-widest text-green-800 text-base font-normal">
                                    {subtitle}
                                </p>
                            </div>
                            {imageSrc && (
                                <img className="mx-auto h-fit rounded-md" src={imageSrc} alt="haymas"/>
                            )}
                        </figcaption>
                    </figure>
                </div>
            </section>
    );
};

export default Heading;
