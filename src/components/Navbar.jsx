import { Outlet } from "react-router";
import TextBanner from "./TextBanner";
import Footer from "./Footer";

const Navbar = () => {
  return (
    <>
      <TextBanner
        text={["🔥 BIG SALE — UP TO 50% OFF — LIMITED TIME ONLY 🔥"]}
      />
      <div className="navbar flex justify-between items-center py-4 px-8 bg-primary">
        <div className="nav-start">
          <ul className="flex items-center gap-6">
            <li className="text-sm font-medium">Apparel</li>
            <li className="text-sm font-medium">New</li>
            <li className="text-sm font-medium relative text-red-600 saleTag">
              Sale{" "}
              <span className="absolute py-1 px-2 bg-red-600 text-white left-10 text-nowrap rounded-md top-1/2 -translate-y-1/2">
                15% Off
              </span>
            </li>
          </ul>
        </div>
        <div className="nav-center">
          <p className="logo text-4xl font-bold hover:tracking-[1rem] transition-all transform ease-linear duration-300 cursor-none">
            KAIZEN
          </p>
        </div>
        <div className="nav-end flex items-center gap-6">
          <ul className="flex items-center gap-6">
            <li className="text-sm font-medium">About</li>
            <li className="text-sm font-medium">Theme Feature</li>
          </ul>
          <div className="nav-cta flex items-center gap-6">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
