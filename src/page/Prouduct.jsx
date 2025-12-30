import { useParams } from "react-router";
import Footer from "../components/Footer";

import { TrendingContent } from "../utils/TrendingContent";
import Trending from "../components/Trending";
import { useState } from "react";

const Prouduct = () => {
  const { id } = useParams();

  const [Count, setCount] = useState(1);

  const [currentProduct] = TrendingContent.filter(
    (content) => content.name == id
  );

  const { name, brief, price, images, colors, sizes, tag } = {
    ...currentProduct,
  };

  const AddItemToCard = () => {
    
  }

  return (
    <>
      <div className="product-container flex gap-4 p-8">
        <div className="flex-5 grid grid-cols-2 gap-4 px-8 ">
          {images.map((image) => (
            <div className="rounded-xl overflow-hidden ">
              <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
          ))}
        </div>

        <div className="flex-3">
          <div className="product-content-heading sticky top-0">
            <div className="bg-slate-200 inline rounded-full text-center px-4 py-1">
              {tag}
            </div>
            <h1 className="text-4xl font-bold my-4">{name}</h1>
            <p>{brief}</p>
            <h3 className="sub-heading m-0! mt-4!">{`$${price}`}</h3>

            <hr className="my-4" />

            <div className="color">
              <p className="text-slate-500">Color</p>
              <div className="flex gap-1 my-2">
                {colors.map((color) => (
                  <div
                    className={`py-2 px-4 rounded-full relative group cursor-pointer border text-nowrap`}
                    style={{ backgroundColor: color }}
                  >
                    <p
                      // className="absolute left-1/2 -bottom-1/2 -translate-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-1/2 text-xs px-3 uppercase rounded-full transition-all duration-700 bg-slate-200 text-slate-00"
                      className="py-1 px-2 rounded-full bg-slate-200 text-slate-600 absolute text-[10px] opacity-0 left-1/2 -bottom-7 -translate-x-1/2 group-hover:opacity-100 transition-all duration-1000"
                    >
                      {color}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="size my-6">
              <p className="text-slate-500">Size</p>
              <div className="flex gap-1 my-2">
                {sizes.map((size) => (
                  <div
                    className={`py-1 px-2 rounded-md cursor-pointer border border-slate-300 hover:border-black`}
                  >
                    {size}
                  </div>
                ))}
              </div>

              <div className="cta flex flex-col gap-4 my-8">
                <div className="quantity border text-2xl flex justify-between items-center rounded-2xl overflow-hidden">
                  <span
                    className="px-16 hover:bg-slate-100 cursor-pointer transition-all duration-200 rounded-full"
                    onClick={(e) =>
                      setCount(Count == 1 ? (Count = 1) : Count - 1)
                    }
                  >
                    -
                  </span>
                  <p>{Count}</p>
                  <span
                    className="px-16 hover:bg-slate-100 cursor-pointer transition-all duration-200 rounded-full"
                    onClick={(e) =>
                      setCount(Count >= 10 ? (Count = 10) : Count + 1)
                    }
                  >
                    +
                  </span>
                </div>
                <button className="primary-btn" onClick={() => AddItemToCard()}>Add to Card - ${price}</button>
                <button className="secondary-btn">Buy It Now</button>
              </div>
            </div>
            <div className="fitType my-4">
              <p>Fit</p>
              <div className="div flex gap-1 my-2">
                <span className="h-1 flex-1 bg-gray-400 rounded-full"></span>
                <span className="h-1 flex-1 bg-gray-400 rounded-full"></span>
                <span className="h-1 flex-1 bg-gray-400 rounded-full"></span>
                <span className="h-1 flex-1 bg-gray-950 rounded-full"></span>
                <span className="h-1 flex-1 bg-gray-400 rounded-full"></span>
              </div>
              <div className="flex items-center justify-between">
                <p>Small</p>
                <p>True to Size</p>
                <p>Large</p>
              </div>
            </div>
            <div className="termAndConditions space-y-4">
              <p className="flex  gap-2">
                {" "}
                <span className="icon px-2"></span> Free shipping on orders over
                $100
              </p>
              <p className="flex  gap-2">
                {" "}
                <span className="icon px-2"></span> Free 30 day returns
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="you-may-also-like p-16">
        <div className="heading flex items-center justify-between mb-4">
          <h1 className="heading-text animate-[headingFadeInLeft_1s] [animation-timeline:view()]">
            You May Also Like
          </h1>
          {/* <button className="primary-btn">Shop All Trending</button> */}
        </div>

        <div className="trending-container flex space-x-8 overflow-x-auto snap-x snap-mandatory scroll-smooth animate-[scaleUp_1s] [animation-timeline:view()] [animation-range:entry_0_cover_35%] origin-top-left">
          {TrendingContent.map((trend) => (
            <Trending content={trend} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Prouduct;
