"use client";
import Hero from "./components/Beranda";
import Gedung from "./components/Gedung";
import Tentang from "./components/Tentang";

export default function Home() {
  return (
    <div className="h-screen pt-[90px]">
      {/* Hero */}
      <Hero />
      {/* Gedung */}
      <Gedung />
      {/* Tentang Kami */}
      <Tentang />
    </div>
  );
}
