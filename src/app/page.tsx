"use client";

import Aside from "./components/Aside";
import GridLayout from "./components/GridLayout";
import Header from "./components/Header";
import MobileGridLayout from "./components/MobileGridLayout";
import MobileHeader from "./components/MobileHeader";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <div className="hidden min-h-screen lg:flex">
        <GridLayout>
          <Header />
          <Aside />
        </GridLayout>
      </div>

      <div className="flex flex-col lg:hidden">
        <MobileGridLayout>
          <MobileHeader />
        </MobileGridLayout>
      </div>
    </div>
  );
}
