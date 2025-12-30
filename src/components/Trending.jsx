import { Link } from "react-router";
import { useEffect, useState } from "react";

const Trending = ({ content }) => {
  const { name, brief, price, tag, images, colors } = { ...content };

  return (
    <>
      <Link
        to={`/${name}`}
        className="trending-card snap-center cursor-pointer group/addToCart"
      >
        <div className="image-contaier h-106 w-76 overflow-hidden rounded-2xl relative">
          <div className="icon absolute bottom-5 right-5 hidden group-hover/addToCart:block"></div>
          {tag && (
            <p className="absolute top-2 left-2 rounded-md text-xs bg-white opacity-85 px-4 py-1 uppercase">
              {tag}
            </p>
          )}
          <img className="h-full w-full object-cover" src={images[0]} alt="" />
        </div>
        <div className="trending-card-container flex flex-col gap-1">
          <h3 className="trending-name text-xl font-bold mt-2">{name}</h3>
          <p className="trending-brief text-sm">{brief}</p>
          <p className="trending-price font-bold">${price}</p>
          {/* <div className="trending-color-pallet flex gap-2 my-2">
            {CurrentColors.map((color) => (
              <div className={`py-1 px-4 rounded-full relative group border bg-[${color}]`}>
                <p className="absolute left-1/2 -bottom-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-1/2 text-xs text-white bg-pink-600 px-3 uppercase rounded-full border transition-all duration-700">
                  {color}
                </p>
              </div>
            ))}
          </div> */}
        </div>
      </Link>
    </>
  );
};

export default Trending;
