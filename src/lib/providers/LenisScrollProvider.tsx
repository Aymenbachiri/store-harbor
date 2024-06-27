"use client";

import ReactLenis from "@studio-freight/react-lenis";

export default function LenisScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReactLenis root>{children}</ReactLenis>;
}
