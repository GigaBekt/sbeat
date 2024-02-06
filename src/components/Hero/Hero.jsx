import hero from "../../assets/SBEAT.png";
import heroMob from "../../assets/SBEAT1.png";

const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <img src={hero} className="desk" alt="" />
        <img src={heroMob} className="mob" alt="" />
        <div>
          <h1>
            AIRDROP IS <br /> <span>NOW LIVE</span>
          </h1>
          <p>10x your investment by joining the $sBEAT Airdrop </p>
          <button>
            <p>How to Participate</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
