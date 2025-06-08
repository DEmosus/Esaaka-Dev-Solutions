"use client";

import Image from "next/image";
import { FC } from "react";
import clsx from "clsx";

interface OptimizedImageProps {
  src: string;
  alt: string; 
  fill?: boolean;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/4" | "3/2";
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  title?: string;
  priority?: boolean;
  sizes?: string; 
}

const OptimizedImage: FC<OptimizedImageProps> = ({
  src,
  alt,
  fill = false,
  aspectRatio = "16/9",
  width,
  height,
  className,
  containerClassName,
  title,
  priority,
  sizes,
}) => {
  if (fill) {
    return (
      <div
        className={clsx(
          "relative overflow-hidden",
          aspectRatio && `aspect-[${aspectRatio}]`,
          "min-h-[200px]",
          containerClassName
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          title={title}
          sizes={sizes}
          priority={priority}
          className={clsx("object-cover", className)}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      title={title}
      priority={priority}
      sizes={sizes}
      className={clsx("object-cover", className)}
    />
  );
};

export default OptimizedImage;
