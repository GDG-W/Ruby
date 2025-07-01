import Image from "next/image";

interface LogoProps {
  className?: string;
  src?: string;
}

export default function Logo({ className = "", src = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={src}
        alt="DevFest"
        width={0}
        height={0}
        sizes="(max-width: 768px) 80px, 100px"
        className="h-auto w-32 object-contain sm:w-36 md:w-40 lg:w-28"
        priority
      />
    </div>
  );
}
