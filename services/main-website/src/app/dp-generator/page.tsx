import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DP Generator",
  description: "DevFest Lagos 2025 DP Generator",
};

export default function DPGeneratorPage() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        loading="eager"
        title="DP Generator"
        src="https://dflagos25-dp.netlify.app/"
        style={{ height: "100%", width: "100%", border: 0 }}
      />
    </div>
  );
}
