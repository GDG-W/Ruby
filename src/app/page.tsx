"use client";

import Aside from "./components/Aside";
import GridLayout from "./components/GridLayout";
import Header from "./components/Header";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="hidden lg:flex">
        <GridLayout>
          <Header />
          <Aside />
        </GridLayout>
      </div>

      <div className="flex lg:hidden">
        <p className="font-akira w-full p-4 text-center">Mobile view coming soon</p>
      </div>
    </div>
  );
}
