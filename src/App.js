import "./App.css";
import stroke from "./icons/Stroke.svg";
import logo from "./icons/CTA.svg";

function App() {
  return (
    <div className="bg-customGray max-w-[1440px] relative">
      <header className="w-full h-[79px] flex items-center border border-red-500">
        <div className="w-[1200px] mx-auto flex justify-between items-center py-4 h-[47px]">
          <div className="flex items-center">
            <img className="w-26 h-7" src={stroke} alt="" />
            <img className="w-115 h-7.1" src={logo} alt="" />
          </div>
          <div className="flex  ">
            <p className="font-robotoFlex text-base mr-[24px]">Galeria zdjęć</p>
            <p className="font-robotoFlex text-base">FaQ</p>
          </div>
          <button className="w-[157px] h-[47px] bg-customBlue rounded-lg">
            <p className=" font-robotoFlex text-base"> Zadzwoń do nas</p>
          </button>
        </div>
      </header>
      <main>
        <section className="w-[1200px] h-[825px] mx-auto border border-red-500 custom-bg">
          <div>
            <h2 className=" font-bebasNeue text-[4.77rem]">
              Sprzedajemy samochody z europy
            </h2>
            <p className=" text-base">
              Kup komfortowy pojazd, aby każda podróż była wyjątkowym
              przeżyciem.
            </p>
            <button className="w-[157px] h-[47px] bg-customBlue rounded-lg">
              <p className="font-robotoFlex text-base">Zobacz zdjęcia</p>
            </button>
            <button className="w-[157px] h-[47px] border border-customBlue rounded-lg ">
              <p className="font-robotoFlex text-base ">Zadzwoń do nas</p>
            </button>
          </div>
        </section>
        <section></section>
        <section></section>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
