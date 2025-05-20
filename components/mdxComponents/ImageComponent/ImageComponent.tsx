import { HTMLProps } from "react";
import Image from 'next/image';

const ImageComponent = ({ src, alt, width, height }: HTMLProps<HTMLImageElement>) => (
  <figure className="img-wrapper">
    {src && alt && width && height
      ? <Image src={src} alt={alt} height={+height} width={+width} className="rounded" />
      // eslint-disable-next-line @next/next/no-img-element
      : <img src={src} alt={alt} width={width} height={height} className="rounded" />}
    {alt && <figcaption className="pt-2 text-body2 text-text-primary/70">{alt}</figcaption>}
  </figure>
);
export default ImageComponent;
