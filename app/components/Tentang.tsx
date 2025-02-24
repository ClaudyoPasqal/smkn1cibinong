import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DATA = [
  {
    image: "/images/devino.jpeg",
    name: "Devino Rizky",
    role: "3D Modelling",
  },
  {
    image: "/images/pawas.jpeg",
    name: "Fawwaz Zakhwan",
    role: "3D Modelling",
  },
  {
    image: "/images/fadlan.jpeg",
    name: "Fadlan Ahmad",
    role: "Landscaping",
  },
  {
    image: "/images/claudyo.jpeg",
    name: "Claudyo",
    role: "Website Developer",
  },
];

const Tentang = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      id="tentangKami"
      className="w-full bg-[#070025]  text-white p-4 md:py-20 py-10 md:px-[160px] md:p-20 flex flex-col gap-10 items-center"
    >
      <h1 className="font-bold text-2xl text-white">Tentang Kami</h1>
      <p className="text-center">
        Kami adalah tim pengembang metaverse dari SMKN 1 Cibinong yang
        berkomitmen untuk menciptakan dunia digital interaktif yang inovatif.
        Dengan semangat kreativitas dan keahlian teknologi, kami membangun
        ekosistem metaverse yang mendukung pembelajaran, kolaborasi, dan
        eksplorasi tanpa batas. Sebagai bagian dari revolusi digital, kami
        percaya bahwa metaverse bukan sekadar tren, tetapi juga masa depan dalam
        berbagai bidang, mulai dari pendidikan, bisnis, hingga hiburan. Oleh
        karena itu, kami terus berinovasi dalam mengembangkan lingkungan digital
        yang immersif, interaktif, dan bermanfaat bagi banyak orang.
      </p>
      <h1 className="font-bold text-2xl">Team</h1>
      <div className="flex flex-row flex-wrap gap-4 justify-center ">
        {DATA.map((item, i) => (
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            className="flex flex-col gap-2 items-center"
            key={i}
          >
            <div className="w-[200px] h-[200px] overflow-hidden cursor-pointer rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover rounded-lg transition-transform duration-300 hover:scale-125"
              />
            </div>
            <h1 className="font-semibold text-lg">{item.name}</h1>
            <p className="text-xs">{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tentang;
