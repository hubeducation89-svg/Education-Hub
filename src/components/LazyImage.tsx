import { useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
}

export function LazyImage({ src, alt, className = "", placeholderClassName = "" }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {!isLoaded && !hasError && (
        <div className={`bg-gray-200 animate-pulse ${placeholderClassName || className}`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${!isLoaded ? "hidden" : ""}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
      {hasError && (
        <div className={`bg-gray-300 flex items-center justify-center text-gray-600 text-sm ${className}`}>
          Image failed to load
        </div>
      )}
    </>
  );
}