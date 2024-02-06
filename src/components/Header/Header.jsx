import logo from "../../assets/logo.svg";
import burger from "../../assets/burger.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="header">
            <img src={logo} alt="logo" />
            <nav>
              <ul>
                <li>
                  <p>TIERS</p>
                </li>
                <li>
                  <p>RE-CALCULATOR</p>
                </li>
                <li>
                  <p>SOCIALS</p>
                </li>
              </ul>
            </nav>

            <button>
              <p>Connect Wallet</p>
            </button>
          </div>

          <div className="mobileHeader">
            <img onClick={() => setIsOpen(!isOpen)} src={burger} alt="" />
            <img src={logo} alt="" />
          </div>
        </div>
      </header>
      {isOpen && (
        <ul id="nav">
          <li>
            <p>TIERS</p>
          </li>
          <li>
            <p>RE-CALCULATOR</p>
          </li>
          <li>
            <p>SOCIALS</p>
          </li>
          <li>
            <button>
              <p>Connect Wallet</p>
            </button>
          </li>
        </ul>
      )}
    </>
  );
};
export default Header;
