type HeadingProps = {
    title: string;
    subtitle: string;
    imageSrc?: string;
};

const Heading = ({ title, subtitle, imageSrc }: HeadingProps) => {
    return (
            <section className="font-yanone py-6 sm:py-6">
                <div className="mx-auto lg:max-w-4xl">
                    <figure>
                        <blockquote className="text-center leading-6 sm:text-2xl sm:leading-9">
                            <p className="font-antialiased pointer-events-auto box-border border-0 border-solid border-gray-300 tracking-widest text-green-800 text-2xl lg:text-3xl font-medium uppercase">
                                {title}
                            </p>
                        </blockquote>
                        {subtitle && (
                            <figcaption className="lg:py-5">
                                <div className="flex items-center justify-center space-x-3 text-base">
                                    <p className="font-antialiased pointer-events-auto box-border border-0 border-solid border-gray-300 leading-8 my-4 tracking-widest text-green-800 text-2xl font-normal">
                                        {subtitle}
                                    </p>
                                </div>
                                {imageSrc && (
                                    <img className="mx-auto h-fit rounded-md" src={imageSrc} alt="haymas"/>
                                )}
                            </figcaption>
                        )}
                    </figure>
                </div>
            </section>
    );
};

export default Heading;
