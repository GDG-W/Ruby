import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DP Generator",
  description: "DP Generator embedded app",
  robots: {
    index: false,
  },
};

export default function DPGeneratorPage() {
  return (
    <div className="h-dvh w-full">
      <iframe
        src="https://dflagos25-dp.netlify.app/"
        title="DP Generator"
        className="h-full w-full"
        style={{ border: 0 }}
        loading="eager"
      />
    </div>
  );
}


