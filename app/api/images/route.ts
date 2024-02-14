import { createCanvas, loadImage } from "canvas";
import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";
import { rgbaToThumbHash, thumbHashToDataURL, thumbHashToApproximateAspectRatio } from 'thumbhash';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

async function loadImageAndConvertToHashWithCanvas(
  buffer: Buffer
) {
  const maxSize = 100;
  const image = await loadImage(buffer);
  const width = image.width;
  const height = image.height;

  const scale = Math.min(maxSize / width, maxSize / height);
  const resizedWidth = Math.floor(width * scale);
  const resizedHeight = Math.floor(height * scale);

  const canvas = createCanvas(resizedWidth, resizedHeight);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0, resizedWidth, resizedHeight);

  const imageData = ctx.getImageData(0, 0, resizedWidth, resizedHeight);
  const rgba = new Uint8Array(imageData.data.buffer);
  const hash = rgbaToThumbHash(resizedWidth, resizedHeight, rgba);

  const base64 = Buffer.from(hash).toString('base64');

  return base64;
}

const loadImageAndConvertToHashWithSharp = async (buffer: Buffer) => {
  const sharpImage = sharp(buffer);
  const imageMetadata = await sharpImage.metadata();

  const size = Math.max(imageMetadata.width || 0, imageMetadata.height || 0);
  const w = Math.round(100 * (imageMetadata.width || 0) / size);
  const h = Math.round(100 * (imageMetadata.height || 0) / size);

  const { data } = await sharpImage
    .resize({
      withoutEnlargement: true,
      width: w,
      height: h,
    })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const hash = rgbaToThumbHash(w, h, data);
  const base64 = Buffer.from(hash).toString('base64');

  return base64;
}

export async function POST(request: NextRequest) {
  if (request.method !== 'POST') {
    return
  }
  const formData = await request.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json({
      code: 'not found'
    }, {
      status: 404
    });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const hash = await loadImageAndConvertToHashWithSharp(buffer);
  // const { data, info } = await sharp(arrayBuffer)
  //   .resize({
  //     withoutEnlargement: true,
  //     width: w,
  //     height: h,
  //   })
  //   .ensureAlpha()
  //   .raw()
  //   .toBuffer({ resolveWithObject: true })

  // console.log({
  //   data,
  //   info
  // })

  // const hash = rgbaToThumbHash(w, h, data);

  // const base64 = Buffer.from(hash).toString('base64');

  return NextResponse.json({
    hash,
    base64: thumbHashToDataURL(Buffer.from(hash, 'base64')),
  })
}
