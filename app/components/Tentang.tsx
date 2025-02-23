import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <h1 className="font-bold text-2xl">Tentang Kami</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
        provident minima vero necessitatibus dolore unde perferendis ullam
        cumque natus autem, fugiat accusamus libero possimus ipsa quidem esse id
        eveniet obcaecati nesciunt dolor hic iure soluta! Omnis facere dolorem
        nesciunt saepe sunt sapiente. Iusto hic voluptatem voluptates architecto
        dolorum nobis, corrupti quod suscipit sed? Incidunt vero dicta sapiente
        facere, iure voluptate maxime impedit a tempore illo quis esse officiis
        amet aperiam ab commodi neque rerum omnis rem non laboriosam eum
        temporibus numquam! Voluptates totam repellendus rem animi quod ipsum
        perferendis possimus tempore illum eligendi accusamus, veritatis quos
        iure nesciunt consequatur quia!
      </p>
      <h1 className="font-bold text-2xl">Team</h1>
      <div className="flex flex-row flex-wrap gap-4 justify-center ">
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="flex flex-col gap-2 items-center"
        >
          <div className="w-[200px] h-[200px] overflow-hidden cursor-pointer rounded-lg">
            <img
              src="/images/6.jpg"
              alt="Gedung"
              className="h-full w-full object-cover rounded-lg transition-transform duration-300 hover:scale-125"
            />
          </div>
          <h1 className="font-semibold text-lg">Claudyo Pasqal</h1>
          <p className="text-xs">Website Developer</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-col gap-2 items-center"
        >
          <div className="w-[200px] h-[200px] overflow-hidden cursor-pointer rounded-lg">
            <img
              src="/images/6.jpg"
              alt="Gedung"
              className="h-full w-full object-cover rounded-lg transition-transform duration-300 hover:scale-125"
            />
          </div>
          <h1 className="font-semibold text-lg">Devino Rizky</h1>
          <p className="text-xs">3D Modelling</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-col gap-2 items-center"
        >
          <div className="w-[200px] h-[200px] overflow-hidden cursor-pointer rounded-lg">
            <img
              src="/images/6.jpg"
              alt="Gedung"
              className="h-full w-full object-cover rounded-lg transition-transform duration-300 hover:scale-125"
            />
          </div>
          <h1 className="font-semibold text-lg">Fawwaz Zakhwan</h1>
          <p className="text-xs">3D Modelling</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col gap-2 items-center"
        >
          <div className="w-[200px] h-[200px] overflow-hidden cursor-pointer rounded-lg">
            <img
              src="/images/6.jpg"
              alt="Gedung"
              className="h-full w-full object-cover rounded-lg transition-transform duration-300 hover:scale-125"
            />
          </div>
          <h1 className="font-semibold text-lg">Fadlan Ahmad</h1>
          <p className="text-xs">Landscaping</p>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
