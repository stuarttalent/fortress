import Image from "next/image";

export default function BrandLogo({
  className = "",
  size = 34
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={["inline-flex items-center justify-center", className].join(" ")}
      aria-label="Fotress Drone Solutions"
    >
      <Image
        src="https://res.cloudinary.com/dugcmzmw4/image/upload/v1775213826/Fortress_Logo_bo8eiu.png"
        alt="Fotress Drone Solutions logo"
        width={size}
        height={size}
        className="drop-shadow-sm"
        priority
      />
    </span>
  );
}

