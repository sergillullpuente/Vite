export type ImageSrc = string;
type ImageId = string;
type ImageName = string;
type ImageHref = string;
type ImageImageAlt = string;
type ImageCreatedAt = number;

export type Image = {
    id: ImageId,
    name: ImageName,
    href: ImageHref,
    imageSrc: ImageSrc,
    imageAlt: ImageImageAlt,
    createdAt: ImageCreatedAt,
}
