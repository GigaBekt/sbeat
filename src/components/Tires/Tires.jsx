import star from "../../assets/Star1.svg";

const Tires = () => {
  return (
    <div className="container">
      <div className="tires">
        <p className="heading">tires</p>
        <p className="desc">
          To participate in the airdrop, you must hold a specific amount of
          $sBEAT in your <br /> wallet. The tier system will be utilized to
          filter holders, with a total of 4 Tiers:{" "}
        </p>

        <div className="boxes">
          <div className="singleBox">
            <div className="topTier">
              <p>TIER 1</p>
            </div>
            <img src={star} alt="star" />
            <p>Enthusiast</p>
            <p>holding</p>
            <div className="bottom">
              <p>10$</p>
              <span>or more</span>
            </div>
          </div>

          <div className="singleBox">
            <div className="topTier">
              <p>TIER 2</p>
            </div>
            <div className="stars">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p>Enthusiast</p>
            <p>holding</p>
            <div className="bottom">
              <p>100$</p>
              <span>or more</span>
            </div>
          </div>

          <div className="singleBox">
            <div className="topTier">
              <p>TIER 3</p>
            </div>
            <div className="stars">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p>Enthusiast</p>
            <p>holding</p>
            <div className="bottom">
              <p>500$</p>
              <span>or more</span>
            </div>
          </div>

          <div className="singleBox">
            <div className="topTier">
              <p>TIER 4</p>
            </div>
            <div className="stars">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p>Enthusiast</p>
            <p>holding</p>
            <div className="bottom">
              <p>1000$</p>
              <span>or more</span>
            </div>
          </div>
        </div>

        <p
          style={{ margin: "80px auto", marginTop: "80px", width: "65%" }}
          className="desc"
        >
          Each tier comes with its own rewards. For instance, by purchasing 100$
          worth of $sBEAT, user becomes ''Visionary'', In order to calculate
          what the airdrop amount at current price will be, Returns Calculator
          is the go to. By using Re-Calculator, holders can track their profits.
        </p>
        <p style={{ margin: "auto", width: "65%" }} className="desc">
          The returns might seem astronomical, however, we are willing to
          distribute additional tokens to our holders, in order to increase our
          community and expand our reach across Solana.
        </p>
      </div>
    </div>
  );
};
export default Tires;
