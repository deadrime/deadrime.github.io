"use client";

import React from "react";
import { useMemo, useState, useCallback, useEffect } from "react";
import { thumbToImageSrc, loadImage, generateImageThumb } from "@/utils/generateImageThumb";
import classNames from "classnames";
import exampleImage from './example.jpg';

type LazyImageProps = {
  src: string;
  thumbHash: string;
} & React.ComponentPropsWithoutRef<"img">;

const ProgressiveImageExample: React.FC<LazyImageProps> = () => {
  const [originalImageSrc, setOriginalImageSrc] = useState(exampleImage.src);
  const [thumbHash, setThumbHash] = useState('6WgKHQiFhXCIZ3eId4Z4eHdwiQh2');
  const { src: thumbSrc, aspectRatio } = useMemo(
    () => thumbToImageSrc(thumbHash),
    [thumbHash]
  );

  const [imgSrc, setImgSrc] = useState(thumbSrc);
  const [loading, setLoading] = useState(false);

  const runDemo = useCallback(async () => {
    const { src: base64 } = thumbToImageSrc(thumbHash);
    setImgSrc(base64);
    setLoading(true);
    const image = await loadImage(originalImageSrc);
    await new Promise((res) => setTimeout(res, 1500));
    setImgSrc(originalImageSrc);
    const thumb = await generateImageThumb(image);
    setThumbHash(thumb);
    setLoading(false);
  }, [originalImageSrc, thumbHash]);

  useEffect(() => {
    runDemo();
  }, [runDemo]);

  return (
    <>
      <button
        onClick={async () => {
          runDemo();
        }}
      >
        Simulate slow internet
      </button>
      <br />
      <img
        width={200}
        src={imgSrc}
        loading="lazy"
        style={{
          aspectRatio: aspectRatio,
        }}
      />
    </>
  );
};

export default ProgressiveImageExample;
