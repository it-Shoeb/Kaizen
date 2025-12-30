import Marquee from "react-fast-marquee";

const TextBanner = ({ text, direction }) => {
  const newDir = direction ? direction : "right";
  return (
    <>
      <Marquee pauseOnHover autoFill direction={newDir} className="bg-primary">
        {text.map((text) => (
          <p className="mx-8">{text}</p>
        ))}
      </Marquee>
      {/* <div className="sale-container">
        <div className="sale-track animate-marquee">
          <span className="mx-10 tracking-[.2em]">
            🔥 BIG SALE — UP TO 50% OFF — LIMITED TIME ONLY 🔥
          </span>
          <span className="mx-10 tracking-[.2em]">
            🔥 BIG SALE — UP TO 50% OFF — LIMITED TIME ONLY 🔥
          </span>
          <span className="mx-10 tracking-[.2em]">
            🔥 BIG SALE — UP TO 50% OFF — LIMITED TIME ONLY 🔥
          </span>
        </div>
      </div> */}
    </>
  );
};

export default TextBanner;
