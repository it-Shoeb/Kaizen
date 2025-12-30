const Hero = () => {
  return (
    <>
      <div className="hero h-166">
        <div className="hero-image-container h-full overflow-hidden">
          <div className="hero-image h-full overflow-hidden relative">
            <img
              className="h-full w-full object-cover object-top"
              src="https://img.freepik.com/premium-photo/handsome-male-fashion-model-soft-sweater-with-cozy-knit-pattern-male-dress-portrait-featuring-lifestyle-mens-fashion-with-texture_171965-43902.jpg"
              alt=""
              loading="lazy"
            />
            <div className="text-overlay absolute bottom-10 right-20 text-right uppercase">
              <p className="text-zinc-400">wardrobe Referesh</p>
              <h1 className="text-7xl m-0 p-0 font-bold mb-2 text-white">
                New Style are here
              </h1>
              <p className="text-white">Shine with out latest must haves</p>
              <div className="flex justify-end gap-8 my-5">
                <button className="primary-btn">Shop Spring/ Summer</button>
                <button className="secondary-btn">Shop Sale</button>
              </div>
            </div>
          </div>

          <div className="hero-image h-full overflow-hidden relative border animate-[fadeOut_10s_infinite] [animation-delay:5s]">
            <img
              className="h-full w-full object-cover object-top"
              src="https://static.vecteezy.com/system/resources/previews/048/989/102/non_2x/male-fashion-model-in-a-cozy-knit-sweater-outfit-background-relaxed-lifestyle-portrait-stylish-maleswear-contemporary-fashion-free-photo.jpg"
              alt=""
              loading="lazy"
            />
            <div className="text-overlay absolute left-1/2 top-[75%] -translate-1/2 text-center uppercase flex flex-col items-center">
              <p className="text-zinc-400">wardrobe Referesh</p>
              <h1 className="text-7xl m-0 p-0 font-bold mb-2 text-white">
                Elevate Your Wardrobe
              </h1>
              <p className="text-white">The best of season, handpicked by us</p>
              <div className="flex justify-end gap-8 my-5">
                <button className="primary-btn">New Arrival</button>
                <button className="secondary-btn">Shop Sale</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
