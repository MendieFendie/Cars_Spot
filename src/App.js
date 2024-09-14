import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SimpleSlider from "./slider/slider";
import stroke from "./icons/Stroke.svg";
import logo from "./icons/CTA.svg";
import { useState } from "react";

function App() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const toggleText1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const toggleText2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  return (
    <div className="bg-customGray max-w-[1440px] relative custom-bg-lines z-10">
      <header className="w-full lg:h-[79px] mb:h-[70px] tb:h-[70px] tb:px-2 flex items-center mb:px-2 ">
        <div className="w-full lg:container mx-auto flex justify-between lg:items-center mb:items-center lg:py-4">
          <a href="/">
            <div className="flex items-center  lg:w-[153px] lg:h-[47px]">
              <img className="mb:w-[25px] mb:h-[25px]  "  src={stroke} alt="" />
              <img className="mb:w-[75px] mb:h-[30px] " src={logo} alt="" />
            </div>
          </a>
          <div className="flex mb:flex-col mb:justify-between mb:text-center ">
            <a href="/">
              <p className="font-robotoFlex lg:text-base  lg:mr-[24px] mb:text-sm tb:mr-[10px]">
                Galeria zdjęć
              </p>
            </a>
            <a href="/">
              {" "}
              <p className="font-robotoFlex text-base mb:text-sm">FaQ</p>
            </a>
          </div>
          <button className="lg:w-[157px] lg:h-[47px] mb:w-[95px] mb:h-[30px] tb:w-[155px] tb:h-[40px]  bg-customBlue rounded-lg">
            <p className="font-robotoFlex lg:text-base mb:text-xs">Zadzwoń do nas</p>
          </button>
        </div>
      </header>
      <main className="relative custom-bg-cars">
        <section className="w-full lg:container mx-auto">
          <div className="lg:pt-[120px]  lg:pb-[362px] mb:pt-[30px] mb:pb-[30px]">
            <div className="mb:w-full lg:container mb-12 mb:px-4 tb:pt-4 tb:px-2">
              <h2 className=" font-bebasNeue lg:text-[4.77rem] mb:text-[2rem] mb:mb-[8rem]  mb-8 leading-[1.1] tracking-tight tb:text-[4rem]   ">
                Sprzedajemy samochody <br /> z europy
              </h2>
              <p className=" text-base leading-normal mb:text-center tb:pt-[70px]">
                Kup komfortowy pojazd, aby każda podróż <br /> była wyjątkowym
                przeżyciem.
              </p>
            </div>
            <div className="mb:flex mb:justify-center tb:px-2 ">
              <button className="w-[157px] h-[47px] bg-customBlue rounded-lg mr-6 mb:w-[95px] mb:h-[30px]">
                <p className="font-robotoFlex text-base mb:text-xs">Zobacz zdjęcia</p>
              </button>
              <button className="w-[157px] h-[47px] border border-customBlue rounded-lg mb:w-[95px] mb:h-[30px]">
                <p className="font-robotoFlex text-base mb:text-xs">Zadzwoń do nas</p>
              </button>
            </div>
          </div>
        </section>
        <section className="lg:w-[1264px] mx-auto lg:pt-20 tb:py-[20px]">
          <div className=" mb-6 tb:px-2">
            <h2 className="font-robotoCondensed font-light lg:text-[21.5px] mb:text-[30px] mb:text-center mb:mb-[10px] tb:text-[30px]  text-customBlue ">
              Prezentacja firmy
            </h2>
            <p className=" font-bebasNeue lg:text-[40px] mb:text-[20px] mb:text-center leading-tight tb:text-base">
              Zobacz naszą Galerię zdjęć
            </p>
          </div>
          <div className="flex mb:text-center mb:mb-[10px] mb:px-2 tb:px-2 ">
            <p className=" text-customBlue font-robotoFlex font-semibold text-base mr-12">
              Samochody osobowe
            </p>
            <p className="font-robotoFlex text-base">Samochody dostawcze</p>
          </div>
        </section>
        <section className="lg:w-full mx-auto lg:pl-[88px] lg:pr-4 lg:pt-20 lg:pb-[152px] mb:mb-[25px]">
          <SimpleSlider />
        </section>
        <section className="bg-customDark text-white border-b-2 border-b-white">
          <div className="lg:mx-auto mb:mx-auto tb:flex-col  container flex mb:flex-col mb:text-center tb:px-2 mb:pt-4">
            <div className="lg:mr-12 ">
              <h2 className="font-bebasNeue tracking-tight text-[25px] mb-1">
                Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
                nulla commodo.
              </h2>
              <div className="relative">
                <p
                  className={`${
                    isExpanded1
                      ? "max-h-[500px]"
                      : " max-h-[45px] overflow-hidden line-clamp-2"
                  } transition-all duration-300 mb-6`}
                >
                  Mauris varius ipsum mauris, rutrum lobortis magna efficitur a.
                  Donec egestas, nisl vehicula feugiat ornare, diam turpis
                  efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et
                  lacus sit amet erat vestibulum malesuada. Curabitur lobortis
                  augue at sapien placerat, vitae varius sapien scelerisque.
                  Aliquam erat volutpat. Donec sit amet sapien at odio
                  ullamcorper vulputate. In in ligula id lectus posuere
                  vestibulum.
                </p>

                <button
                  onClick={toggleText1}
                  className="font-robotoCondensed mb-2 font-semibold underline underline-offset-8"
                >
                  {isExpanded1 ? "Zwiń↑" : "Rozwiń↓"}
                </button>
              </div>
            </div>

            <div className="lg:mb-[88px] mb:mb-[20px]">
              <h2 className="font-bebasNeue tracking-tight text-[25px] mb-1">
                Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
                nulla commodo.
              </h2>
              <div className="relative">
                <p
                  className={`${
                    isExpanded2
                      ? "max-h-[500px]"
                      : "max-h-[45px] overflow-hidden line-clamp-2"
                  } transition-all duration-300 mb-6`}
                >
                  Mauris varius ipsum mauris, rutrum lobortis magna efficitur a.
                  Donec egestas, nisl vehicula feugiat ornare, diam turpis
                  efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et
                  lacus sit amet erat vestibulum malesuada. Curabitur lobortis
                  augue at sapien placerat, vitae varius sapien scelerisque.
                  Aliquam erat volutpat. Donec sit amet sapien at odio
                  ullamcorper vulputate. In in ligula id lectus posuere
                  vestibulum.
                </p>

                <button
                  onClick={toggleText2}
                  className="font-robotoCondensed mb-2 font-semibold underline underline-offset-8"
                >
                  {isExpanded2 ? "Zwiń↑" : "Rozwiń↓"}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-customDark ">
        <div className="container flex justify-between mx-auto lg:py-6 mb:py-4 mb:justify-between mb:px-4 tb:justify-around tb:h-[40px] tb:items-center">
          <a href="/">
            <p className=" font-robotoCondensed text-white font-bold">
              Cars Spot
            </p>
          </a>
          <a href="/">
            <p className="font-robotoCondensed text-white underline underline-offset-1">
              Polityka prywatności
            </p>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
