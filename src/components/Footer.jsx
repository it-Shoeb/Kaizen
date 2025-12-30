import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <>
      <div className="sub-footer flex p-4 bg-primary">
        <div className="flex-1 p-4 border-r text-center animate-[headingFadeInLeft_.5s] [animation-timeline:view()] [animation-range-end:40%]">
          <h3 className="sub-heading my-2!">New customers get 15% off</h3>
          <p>on your first purchase</p>
        </div>
        <div className="flex-1 p-4 text-center animate-[headingFadeIn_1s] [animation-timeline:view()] [animation-range-end:40%]">
          <h3 className="sub-heading my-2!">Free shipping</h3>
          <p>on orders over $100</p>
        </div>
        <div className="flex-1 p-4 border-l text-center animate-[headingFadeInRight_.5s] [animation-timeline:view()] [animation-range-end:40%]">
          <h3 className="sub-heading my-2!">ShopPay</h3>
          <p>Buy now, pay later</p>
        </div>
      </div>
      
      <footer className="flex flex-col bg-black text-white">
        <div className="footer-navigation flex justify-between pt-4 px-16">
          <div className="col1 flex-1">
            <h3 className="sub-heading my-8 font-bold text-2xl">Help</h3>
            <ul className="">
              <li className="hover:relative hover:left-1 cursor-pointer py-2">
                FAQ
              </li>
              <li className="hover:relative hover:left-1 cursor-pointer py-2">
                Contact
              </li>
              <li className="hover:relative hover:left-1 cursor-pointer py-2">
                Size Chart
              </li>
            </ul>
          </div>

          <div className="col2 flex-1">
            <h3 className="sub-heading my-8 font-bold text-2xl">Compnay</h3>
            <ul className="">
              <li className="hover:relative hover:left-1 cursor-pointer py-2">
                About
              </li>
              <li className="hover:relative hover:left-1 cursor-pointer py-2">
                Blog
              </li>
              <li className="hover:relative hover:left-1 cursor-pointer py-2">
                Theme & Features
              </li>
            </ul>
          </div>

          <div className="col3 flex-2 space-y-6">
            <h1 className="text-4xl my-8">
              Sign up for offers and get 10% off
            </h1>
            <p className="text-1xl">
              Join our newsletter to receive the latest updates and get 10% off
              your FIRST order.
            </p>

            <label
              htmlFor=""
              className="flex rounded-md items-center justify-center border relative"
            >
              <input
                className="p-4  w-full border"
                type="email"
                name=""
                id=""
                placeholder="You'r Email Address"
              />
              <input
                className="p-4 absolute right-0 hover:-right-1 focus:-right-1 focus:border-0 focus:outline-0 transition-all duration-300"
                type="submit"
                value=">"
              />
            </label>
          </div>
        </div>

        <Marquee autoFill className="overflow-hidden">
          <p className="text-outline flex items-center justify-center text-[15rem] mx-12 leading-none">
            Kaizen
          </p>
        </Marquee>
        <div className="termAndCondition flex items-center justify-between px-16 mb-4">
          <div
            className="
            flex items-center justify-between gap-4"
          >
            <div className="icon bg-white "></div>
            <div className="icon bg-white "></div>
            <div className="icon bg-white "></div>
          </div>
          <div className="">
            <p className="text-xs">
              © 2025, palo-alto-theme-main. Powered by Goga.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
