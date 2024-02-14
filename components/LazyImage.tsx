"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useMemo, useState, useCallback, useEffect } from "react";
import { thumbToImageSrc, loadImage } from "@/utils/generateImageThumb";
import classNames from "classnames";

type LazyImageProps = {
  src: string;
  thumbHash: string;
} & React.ComponentPropsWithoutRef<"img">;

export const LazyImage: React.FC<LazyImageProps> = ({
  src: originalImageSrc,
  thumbHash,
  style,
  className,
  ...props
}) => {
  const { src: thumb, aspectRatio } = useMemo(
    () => (thumbHash ? thumbToImageSrc(thumbHash) : {
      src: '',
      aspectRatio: undefined
    }),
    [thumbHash]
  );
  const [imgSrc, setImgSrc] = useState(thumb ? thumb : originalImageSrc);
  const [loading, setLoading] = useState(false);

  const loadOriginalImage = useCallback(async () => {
    setLoading(true);
    await loadImage(originalImageSrc);
    setImgSrc(originalImageSrc);
    setLoading(false);
  }, [originalImageSrc]);

  useEffect(() => {
    if (thumbHash) {
      loadOriginalImage();
    }
  }, [loadOriginalImage, thumbHash]);

  return (
    <>
      <button
        onClick={async () => {
          setLoading(true);
          setImgSrc(thumb);
          await new Promise((res) => setTimeout(res, 2000));
          loadOriginalImage();
        }}
      >
        Simulate slow internet
      </button>
      <br />
      <div
        style={{
          background: loading ? `url(${thumb})` : "",
          backgroundSize: "100%",
          display: loading ? "inline-flex" : "none",
        }}
      >
        <img
          src={imgSrc}
          loading="lazy"
          className={classNames(className, "lazy-image", {
            loading,
          })}
          style={{
            aspectRatio: aspectRatio,
            ...style,
          }}
          {...props}
        />
      </div>
      <br />
    </>
  );
};
