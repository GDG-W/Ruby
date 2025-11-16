"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function Component() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const fullUrl = pathname + "?" + searchParams.toString();

  if(pathname === "/claim"){
    location.href = "https://tickets.devfestlagos.com"+fullUrl
  }

  location.href = "/"
}