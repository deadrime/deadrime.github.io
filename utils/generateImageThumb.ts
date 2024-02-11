import {
  rgbaToThumbHash,
  thumbHashToDataURL,
  thumbHashToApproximateAspectRatio,
} from "thumbhash";

export const loadImage = (imageUrl: string) => {
  return new Promise<HTMLImageElement>((resolve) => {
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      resolve(img);
    };
  });
};

export async function generateImageThumb(img: HTMLImageElement) {
  const size = Math.max(img.width, img.height);
  const w = (img.width = Math.round((100 * img.width) / size));
  const h = (img.height = Math.round((100 * img.height) / size));

  // Создаем из картинки миниатюру (100x100 maximum size)
  const canvas = document.createElement("canvas");
  const c = canvas.getContext("2d");
  canvas.width = w;
  canvas.height = h;
  if (!c) {
    throw new Error('Canvas error')
  }
  c.drawImage(img, 0, 0, w, h);
  // Достаем массив пикселей
  const pixels = c.getImageData(0, 0, w, h);
  // Получаем hash (Uint8Array)
  const hash = rgbaToThumbHash(w, h, pixels.data);
  const binString = String.fromCodePoint(...hash);
  return btoa(binString);
}

export const thumbToImageSrc = (thumb: string) => {
  const binString = atob(thumb);
  const data = Uint8Array.from(binString, (m) => m.codePointAt(0) as number);
  const aspectRatio = thumbHashToApproximateAspectRatio(data);
  const src = thumbHashToDataURL(data);

  return {
    aspectRatio,
    src,
  };
};
