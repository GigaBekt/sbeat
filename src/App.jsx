import { Header, Hero, Tires, Calculator, Footer, Faq } from "./components";
import arrow from "./assets/arrow.svg";
import "./main.scss";
const App = () => {
  return (
    <>
      <Header />
      <div className="body">
        <Hero />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img className="arrow" src={arrow} alt="arrow" />
        </div>
        <Tires />
        <Calculator />
        <Faq />
      </div>
      <Footer />
    </>
  );
};

export default App;
