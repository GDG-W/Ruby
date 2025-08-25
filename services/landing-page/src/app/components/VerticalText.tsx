interface VerticalTextProps {
  text?: string;
  className?: string;
  writingMode?: "vertical-lr" | "vertical-rl";
}

export default function VerticalText({
  text,
  className = "",
  writingMode = "vertical-lr",
}: VerticalTextProps) {
  return (
    <h1
      className={className}
      style={{
        writingMode: writingMode,
        textOrientation: "mixed",
      }}
    >
      {text}
    </h1>
  );
}
