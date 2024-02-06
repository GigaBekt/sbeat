import logo from "../../assets/logo.svg";

const Header = () => {
  return (
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
      </div>
    </header>
  );
};
export default Header;
