"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { Suspense } from "react";

function Handler() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const fullUrl = `${pathname}?${searchParams.toString()}`;
  if (pathname === "/claim") {
    location.href = `https://tickets.devfestlagos.com${fullUrl}`;
  }
  return null;
}

export default function NotFound() {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <Handler />
    </Suspense>
  );
}
