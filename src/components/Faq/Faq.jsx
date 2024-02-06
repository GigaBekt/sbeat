import { useState } from "react";

const Faq = () => {
  const [active, setActive] = useState("");

  return (
    <div className="faq">
      <h2>F.A.Q</h2>

      <div className="box">
        <div
          onClick={() => setActive(1)}
          className={`singleBox ${active === 1 ? "activeAcc" : ""}`}
        >
          <header>
            <p>How does Return Calculator work?</p>
          </header>
          <div className={`accordionBody`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            sapiente enim quis ab explicabo blanditiis corporis quos maiores,
            cupiditate dolore ut, eum rerum culpa eius? Repudiandae totam
            eveniet ipsa inventore?
          </div>
        </div>
        <div
          onClick={() => setActive(2)}
          className={`singleBox ${active === 2 ? "activeAcc" : ""}`}
        >
          <header>
            <p>What are Tiers?</p>
          </header>
          <div className={`accordionBody`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            sapiente enim quis ab explicabo blanditiis corporis quos maiores,
            cupiditate dolore ut, eum rerum culpa eius? Repudiandae totam
            eveniet ipsa inventore?
          </div>
        </div>

        <div
          onClick={() => setActive(3)}
          className={`singleBox ${active === 3 ? "activeAcc" : ""}`}
        >
          <header>
            <p>How to get an Airdrop?</p>
          </header>
          <div className={`accordionBody`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            sapiente enim quis ab explicabo blanditiis corporis quos maiores,
            cupiditate dolore ut, eum rerum culpa eius? Repudiandae totam
            eveniet ipsa inventore?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
