import Image from "next/image";

export default function StockImage({
  src,
  alt,
  className = "",
  priority = false
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className={className}
      quality={80}
      priority={priority}
    />
  );
}

