import { HTMLProps } from "react";

const ImageComponent = ({ src, alt, width, height }: HTMLProps<HTMLImageElement>) => (
  <figure className="img-wrapper">
    <img src={src} alt={alt} width={width} height={height} className="rounded" />
    {alt && <figcaption className="pt-2 text-body2 text-text-primary/70">{alt}</figcaption>}
  </figure>
);
export default ImageComponent;
