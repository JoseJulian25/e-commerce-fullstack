import React from "react";
import banner from "../../assets/img/banner.jpg";

const BannerSection = () => {
  return (
    <div
      className="relative flex items-center bg-cover flex-start bg-center w-full text-left h-svh"
      style={{
        background: `url(${banner})`,
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative w-full h-svh">
        <main className="px-10 lg:px-24 z-10 absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center pl-10 pr-5">
          <p
            className="text-white font-bold sm:max-w-xl text-4xl sm:text-6xl tracking-wide leading-relaxed"
            style={{ fontFamily: "Rock Salt, cursive" }}
          >
            LLEVA TU PASION, EXPRESATE
          </p>

          <button className="mt-10 bg-white w-44 h-12 text-black hover:bg-black hover:text-white rounded cursor-pointer">
            Compra ahora
          </button>
        </main>
      </div>
    </div>
  );
};

export default BannerSection;
