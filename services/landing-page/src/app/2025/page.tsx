"use client";

import Aside from "../components/Aside";
import GridLayout from "../components/GridLayout";
import Header from "../components/Header";
import Lanyard from "../components/Lanyard";
import MobileAside from "../components/MobileAside";
import MobileGridLayout from "../components/MobileGridLayout";
import MobileHeader from "../components/MobileHeader";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Lanyard image - only shows on homepage */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="Lanyard"
        width={300}
        src="/lanyard-0.webp"
        className="absolute bottom-[10vh] left-1/2 hidden -translate-x-1/2 lg:flex"
        style={{ zIndex: 10 }}
      />
      {/* Desktop */}
      <div className="hidden min-h-screen lg:flex">
        <GridLayout>
          <Header />
          <Aside />
        </GridLayout>
      </div>

      {/* Mobile */}
      <div className="flex h-dvh flex-col lg:hidden">
        <MobileGridLayout>
          <MobileHeader />
          <Lanyard />
          <MobileAside />
        </MobileGridLayout>
      </div>
    </div>
  );
}
