import "./App.css";
import stroke from "./icons/Stroke.svg";
import logo from "./icons/CTA.svg";

function App() {
  return (
    <div className="bg-customGray max-w-[1440px] relative  custom-bg-lines z-10">
      <header className="w-full h-[79px] flex items-center border border-red-500">
        <div className="container mx-auto flex justify-between items-center py-4 h-[47px]">
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
      <main className=" relative  custom-bg-cars">
        <section className="container h-[825px] mx-auto border border-red-500">
          <div className="pt-[120px] pl-[120px] pr-[120px]">
            <div className=" mb-12">
              <h2 className=" font-bebasNeue text-[4.77rem] mb-8 leading-[1.1]">
                Sprzedajemy samochody <br /> z europy
              </h2>
              <p className=" text-base">
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
        <section className="container mx-auto h-[207p] pt-20 ">
          <div>
            <h2>Prezentacja firmy</h2>
            <p>Zobacz naszą Galerię zdjęć</p>
          </div>
          <div>
            <p>Samochody osobowe</p>
            <p>Samochody dostawcze</p>
          </div>
        </section>
        <section></section>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
