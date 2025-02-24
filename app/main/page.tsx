import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <>
      {" "}
      <div className="w-full h-screen relative" id="beranda">
        <video
          src="/videos/cinematic_2.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover absolute"
        />

        <div className="relative w-full h-full flex flex-col gap-8 bg-black/40 items-center justify-center">
          <h1 className="text-white text-2xl text-center font-semibold max-w-[500px] p-2">
            🌐 Jelajahi Metaverse, Langsung dari Browsermu! 🚀 Tanpa perlu
            download atau instalasi—cukup buka website dan masuk ke dunia
            metaverse dalam hitungan detik! 🎮✨ Coming Soon!!!
          </h1>

          <button
            disabled
            className="cursor-not-allowed opacity-60 p-2 px-10 bg-[#75C5F0] text-white rounded-md hover:brightness-110 transition-all"
          >
            Mainkan
          </button>
        </div>
      </div>
      {/* <div className="w-full bg-[#070025] text-white flex flex-col gap-10 items-center">
        <Image
          src={"/images/pp.png"}
          alt="backgroud"
          width={1000}
          height={1000}
          className="w-full h-full absolute object-cover"
        />
        <div className="w-full h-full absolute bg-black opacity-40"></div>
        <div className="w-full h-full absolute text-black p-4 md:py-20 py-10 md:px-[160px] md:p-20 flex flex-col gap-10 justify-center items-center z-10">
          <h1 className="font-bold text-4xl text-white">Pengerjaan</h1>
        </div>
      </div> */}
    </>
  );
};

export default Main;
