import { useState } from "react";
import img from "../../assets/img.png";
import img2 from "../../assets/img2.png";

const Calculator = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="container">
      <div className="calculator">
        <h2>RETURNS CALCULATOR</h2>
        <div className="mainBox">
          <img src={img} alt="" />
          <div className="insideBox">
            <p className="mainText">
              Connect your <span>Solana Wallet</span> in order to track your
              airdrop value in $ as well as in tokens.
            </p>
            <div className="input">
              <p>$sBEAT:</p>
              <input type="text" placeholder="0" />
            </div>

            <div className="usd">
              <p>USD:</p>
              <p>$0.00</p>
            </div>
            <p className="note">
              Note: Higher <span>Tiers </span>
              have higher returns
            </p>

            <div className="slider desktop">
              <p>Current Price: $$$</p>
              <div className="customSlider">
                <input
                  type="range"
                  min="1"
                  max="100"
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                />
              </div>
              <p style={{ marginLeft: "18px", width: "30px" }}>${value}</p>
            </div>

            <ul className="list">
              <li style={{ width: "100px" }}>
                <p>Tier</p>
              </li>
              <li>
                <p>1</p>
              </li>
              <li>
                <p>2</p>
              </li>
              <li>
                <p>3</p>
              </li>
              <li>
                <p>4</p>
              </li>
            </ul>
          </div>
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Calculator;
