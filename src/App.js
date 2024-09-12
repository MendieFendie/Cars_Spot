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
      <header className="w-full h-[79px] flex items-center ">
        <div className="container mx-auto flex justify-between items-center py-4 h-[47px]">
          <a href="/">
            <div className="flex items-center">
              <img className="w-26 h-7" src={stroke} alt="" />
              <img className="w-115 h-7.1" src={logo} alt="" />
            </div>
          </a>
          <div className="flex">
            <a href="/">
              {" "}
              <p className="font-robotoFlex text-base mr-[24px]">
                Galeria zdjęć
              </p>
            </a>
            <a href="/">
              {" "}
              <p className="font-robotoFlex text-base">FaQ</p>
            </a>
          </div>
          <button className="w-[157px] h-[47px] bg-customBlue rounded-lg">
            <p className="font-robotoFlex text-base">Zadzwoń do nas</p>
          </button>
        </div>
      </header>
      <main className="relative custom-bg-cars">
        <section className="container mx-auto ">
          <div className="pt-[120px]  pb-[362px]">
            <div className=" mb-12">
              <h2 className=" font-bebasNeue text-[4.77rem] mb-8 leading-[1.1] tracking-tight">
                Sprzedajemy samochody <br /> z europy
              </h2>
              <p className=" text-base leading-normal">
                Kup komfortowy pojazd, aby każda podróż <br /> była wyjątkowym
                przeżyciem.
              </p>
            </div>
            <div>
              <button className="w-[157px] h-[47px] bg-customBlue rounded-lg mr-6">
                <p className="font-robotoFlex text-base">Zobacz zdjęcia</p>
              </button>
              <button className="w-[157px] h-[47px] border border-customBlue rounded-lg ">
                <p className="font-robotoFlex text-base ">Zadzwoń do nas</p>
              </button>
            </div>
          </div>
        </section>
        <section className="w-[1264px] mx-auto pt-20 ">
          <div className=" mb-6">
            <h2 className="font-robotoCondensed font-light text-[21.5px] text-customBlue ">
              Prezentacja firmy
            </h2>
            <p className=" font-bebasNeue text-[40px] leading-tight">
              Zobacz naszą Galerię zdjęć
            </p>
          </div>
          <div className="flex ">
            <p className=" text-customBlue font-robotoFlex font-semibold text-base mr-12">
              Samochody osobowe
            </p>
            <p className="font-robotoFlex text-base">Samochody dostawcze</p>
          </div>
        </section>
        <section className="w-full mx-auto pl-[88px] pr-4 pt-20 pb-[152px]">
          <SimpleSlider />
        </section>
        <section className="bg-customDark text-white border-b-2 border-b-white">
          <div className="mx-auto container flex">
            <div className="mr-12">
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

            <div className="mb-[88px]">
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
        <div className="container flex justify-between mx-auto py-6">
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
