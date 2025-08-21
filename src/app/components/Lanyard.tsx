export default function Lanyard({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[2] h-dvh bg-[length:12.95rem] sm:bg-[length:35%] ${className}`}
      style={{
        backgroundImage: "url('/lanyard-2.webp')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    ></div>
  );
}
