import TextBanner from "./components/TextBanner";
import Hero from "./components/Hero.jsx";
import Trending from "./components/Trending.jsx";

import { TrendingContent } from "./utils/TrendingContent.jsx";

import {
  categories,
  saleAndOffer,
  spotlight,
  trending,
} from "./utils/images.jsx";

function App() {
  console.log(TrendingContent[0]);

  return (
    <>
      <main className="bg-primary">
        <div className="loading-layer absolute top-0 bottom-0 w-full h-full z-10 animate-[blurAnimation_2s_ease-in-out_forwards]"></div>
        <Hero />

        <div className="category-section flex flex-col items-center p-16">
          <div className="heading text-center mb-8 animate-[headingFadeIn_1s] [animation-timeline:view()]">
            <p className="">The Essentials</p>
            <h1 className="heading-text">Shop by Category</h1>
          </div>

          <div className="categories-container flex justify-between items-center gap-4">
            <div className="category-card relative group overflow-hidden rounded-xl h-136 cursor-pointer">
              <img
                className="group-hover:scale-105 w-full object-cover object-center transition-all ease-in-out duration-1000 h-full"
                src={categories[0]}
                alt=""
              />
              <div className="category-card-content absolute bottom-10 left-5 text-white">
                <p className="brief text-slate-200">Just Added</p>
                <h3 className="name text-2xl font-bold">New</h3>
                <p className="description text-slate-200">Shop the Latest</p>
              </div>
            </div>
            <div className="category-card relative group overflow-hidden rounded-xl h-136 cursor-pointer animate-[expand_1s_linear_both] [animation-timeline:view()]">
              <img
                className="group-hover:scale-105 w-full object-cover object-center transition-all ease-in-out duration-1000 h-full"
                src={categories[1]}
                alt=""
              />
              <div className="category-card-content absolute bottom-10 left-5 text-white">
                <p className="brief text-slate-200">Layers to Love</p>
                <h3 className="name text-2xl my-1 font-bold">Fall/ Winter</h3>
                <p className="description text-slate-200">Bundle up in style</p>
              </div>
            </div>
            <div className="category-card relative group overflow-hidden rounded-xl h-136 cursor-pointer">
              <img
                className="group-hover:scale-105 w-full object-cover object-center transition-all ease-in-out duration-1000 h-full"
                src={categories[2]}
                alt=""
              />
              <div className="category-card-content absolute bottom-10 left-5 text-white">
                <p className="brief text-slate-200">Sleek Style</p>
                <h3 className="name text-2xl my-1 font-bold">Dress</h3>
                <p className="description text-slate-200">For Every Occasion</p>
              </div>
            </div>
            <div className="category-card relative group overflow-hidden rounded-xl h-136 cursor-pointer animate-[expand_1s_linear_both] [animation-timeline:view()]">
              <img
                className="group-hover:scale-105 w-full object-cover object-center transition-all ease-in-out duration-1000 h-full"
                src={categories[3]}
                alt=""
              />
              <div className="category-card-content absolute bottom-10 left-5 text-white">
                <p className="brief text-slate-200">Most Wanted</p>
                <h3 className="name text-2xl my-1 font-bold">Best Selling</h3>
                <p className="description text-slate-200">Your Favourites</p>
              </div>
            </div>
          </div>
        </div>

        <section className="saleAndOffers p-4">
          <TextBanner text={["step into style", "Empower you style"]} />

          <div className="sales-card-container flex justify-center gap-4 p-8 h-full">
            <div className="flex-3 flex flex-col justify-center relative h-114 group overflow-hidden rounded-2xl">
              <img
                className="absolute w-full h-full left-0 top-0 object-cover object-center group-hover:scale-105 transition-all duration-1000"
                src={saleAndOffer[1]}
                alt=""
              />
              <div className="sales-card-content text-center text-white p-12 z-1">
                <p>
                  In Store and Online
                  <p className="flex items-center justify-center text-center gap-1 my-4 font-bold">
                    <p className="text-5xl">30</p>
                    <div className="">
                      <p>%</p>
                      <p>OFF</p>
                    </div>
                  </p>
                  Save Extra for a Limited Stock
                </p>
                <button className="secondary-btn my-4">
                  Shop Our Sales Collection
                </button>
                <p>Run Until 11:58 AM IST </p>
              </div>
            </div>

            <div className="flex-1 text-center justify-center flex flex-col relative h-114 group overflow-hidden rounded-2xl">
              <img
                className="absolute w-full h-full left-0 top-0 object-cover object-center group-hover:scale-105 transition-all duration-1000"
                src={saleAndOffer[0]}
                alt=""
              />
              <div className="sales-card-content text-white p-12 z-1">
                <p>
                  For A Limited Time <br />
                  <p className="text-5xl my-4">Free TOTE</p>
                  With Every Purchase Over $99
                </p>
              </div>
            </div>
          </div>

          <TextBanner
            text={["Empower you style", "step into style"]}
            direction={"left"}
          />
        </section>

        <section className="trending-this-season p-16">
          <div className="heading flex items-center justify-between mb-4">
            <h1 className="heading-text animate-[headingFadeInLeft_1s] [animation-timeline:view()]">
              Trending This Season
            </h1>
            <button className="primary-btn">Shop All Trending</button>
          </div>

          <div className="trending-container flex space-x-4 overflow-x-auto snap-x snap-mandatory scroll-smooth animate-[scaleUp_1s] [animation-timeline:view()] [animation-range:entry_0_cover_35%] origin-top-left">
            {TrendingContent.map((trend) => (
              <Trending content={trend} />
            ))}
          </div>
        </section>

        <div className="quickPick bg-black">
          <div className="quikPick-videop p-6 flex gap-6 h-screen">
            <div className="flex-1 border overflow-hidden">
              <video
                className="w-full h-full object-cover"
                loop
                autoPlay
                muted
                src="https://www.pexels.com/download/video/6626483/"
              ></video>
            </div>
            <div className="flex-1 border overflow-hidden">
              <video
                className="w-full h-full object-cover"
                loop
                autoPlay
                muted
                src="https://www.pexels.com/download/video/9853506/"
              ></video>
            </div>
          </div>

          <div className="relative h-screen p-6 flex justify-center">
            <div className="flex-1 flex items-center relative bg-black">
              <p className="text-[14rem] tracking-[1rem] absolute left-1/2 top-1/2 -translate-1/2 text-white leading-0 m-0 p-0 -rotate-90 animate-[headingFadeInLeft_1s_both] [animation-timeline:view()] opacity-0 [animation-range-end:50%]">
                QUICK
              </p>
            </div>
            <img
              className="flex-2 h-full w-1/2  object-cover object-top animate-[headingPopUp_1s] [animation-timeline:view()] [animation-range-end:50%]"
              src={trending[0]}
              alt=""
            />
            <div className="flex-1 flex items-center relative bg-black">
              <p className="text-[14rem] tracking-[1rem] absolute left-1/2 top-1/2 -translate-1/2 text-white leading-0 m-0 p-0 -rotate-90 animate-[headingFadeInRight_1s_both] [animation-timeline:view()] opacity-0 [animation-range-end:50%]">
                PICK
              </p>
            </div>

            <div className="quickPickItem absolute left-[40%] top-[40%] bg-black p-1 rounded-full group">
              <div className="top-1/2 left-1/2 w-76 h-56 -translate-1/2 bg-white absolute card opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs flex p-2 rounded-2xl">
                <div className="flex-1 rounded-2xl overflow-hidden">
                  <img
                    className="w-full h-full object-top object-cover z-10"
                    src={trending[2][0]}
                    alt=""
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between p-2">
                  <div className="content space-y-1">
                    <h3 className="text-xl">Tshirt</h3>
                    <p className="text-sm">$ 220.00</p>
                  </div>
                  <div className="primary-btn">Quick Buy</div>
                </div>
              </div>
            </div>

            <div className="quickPickItem absolute left-[60%] top-[60%] p-1 rounded-full group">
              <div className="top-1/2 left-1/2 w-76 h-56 -translate-1/2 bg-white absolute card opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs flex p-2 rounded-2xl">
                <div className="flex-1 rounded-2xl overflow-hidden">
                  <img
                    className="w-full h-full object-top object-cover z-10"
                    src={trending[1][0]}
                    alt=""
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between p-2">
                  <div className="content space-y-1">
                    <h3 className="text-xl">Tshirt</h3>
                    <p className="text-sm">$ 220.00</p>
                  </div>
                  <div className="primary-btn">Quick Buy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="essential-container flex p-16 h-screen bg-primary">
          <div className="m-6 flex-1 relative">
            <img
              className="apper-left absolute left-0 top-0 object-cover h-106 w-96 rounded-xl"
              src={categories[0]}
              alt=""
            />
            <img
              className="apper-right absolute right-0 bottom-0 object-cover h-106 w-96 rounded-xl"
              src={saleAndOffer[0]}
              alt=""
            />
          </div>
          <div className="flex-1 my-auto mx-6 animate-[headingFadeInRight_1s] [animation-timeline:view()] [animation-range-end:50%]">
            <p className="">Everyday essentials</p>
            <h1 className="heading-text my-4">
              Sustainable trends you'll love forever.
            </h1>
            <ul className="space-y-6 text-xl">
              <li>
                ✦ We believe that fashion should be stylish, affordable and
                accessible to everyone.
              </li>
              <li>
                ✦ Body positivity and inclusivity are values that are at the
                heart of our brand.
              </li>
              <li>
                ✦ We want everyone to look and feel good, while also doing our
                part to help the environment.
              </li>
            </ul>
          </div>
        </div>

        <div className="spotlight relative overflow-hidden flex h-screen">
          <div className="flex-1 z-2 peer/spotlight flex justify-center flex-col text-center p-4 text-black hover:text-white">
            <p>Product spotlight</p>
            <h3 className="text-2xl font-bold  my-1 uppercase">
              Top summer trends
            </h3>
            <p className="underline">Shop now</p>
          </div>

          <div className="flex-1 z-2 peer/introducing flex justify-center flex-col text-center p-4 text-black hover:text-white">
            <p>Seaside Looks</p>
            <h3 className="text-2xl font-bold  my-1 uppercase">
              Introducing Kids
            </h3>
            <p className="underline">Shop the collection</p>
          </div>

          <div className="flex-1 z-2 peer/lookbook flex justify-center flex-col text-center p-4 text-black hover:text-white">
            <p>Style preview</p>
            <h3 className="text-2xl font-bold  my-1 uppercase">Our lookbook</h3>
            <p className="underline">Read More</p>
          </div>

          <img
            className="w-full z-0 absolute left-1/2 top-1/2 -translate-1/2 object-center opacity-100 peer-hover/spotlight:opacity-100 peer-hover/spotlight:scale-105 transition-all duration-400"
            src={spotlight[0]}
            alt=""
          />
          <img
            className="w-full z-0 absolute left-1/2 top-1/2 -translate-1/2 object-center opacity-0 peer-hover/spotlight:opacity-100 peer-hover/spotlight:scale-105 transition-all duration-400"
            src={spotlight[0]}
            alt=""
          />
          <img
            className="w-full z-0 absolute left-1/2 top-1/2 -translate-1/2 object-center opacity-0 peer-hover/introducing:opacity-100 peer-hover/introducing:scale-105 transition-all duration-400"
            src={spotlight[1]}
            alt=""
          />
          <img
            className="w-full z-0 absolute left-1/2 top-1/2 -translate-1/2 object-center opacity-0 peer-hover/lookbook:opacity-100 peer-hover/lookbook:scale-105 transition-all duration-400"
            src={spotlight[2]}
            alt=""
          />
        </div>

        <div className="QandA flex p-16 bg-primary border-b">
          <div className="flex-1 p-4 animate-[headingFadeInLeft_1s] [animation-timeline:view()] [animation-range-end:50%]">
            <h1 className="heading-text mb-2">Find your luxury — everyday.</h1>
            <p className="text-xl leading-10">
              Questions about our client services? Don't worry about a thing!
              We've got you via email or text. Order before 4pm for same day
              delivery in zen. <span className="underline">Find out more</span>
            </p>
          </div>

          <div className="flex-1 p-4 accordion animate-[headingFadeInRight_1s] [animation-timeline:view()] [animation-range-end:50%]">
            <div className="accordions space-y-6">
              <div className="accordion overflow-y-hidden border-b max-h-10 hover:max-h-96 transition-all duration-1000 cursor-pointer">
                <p className="font-bold text-xl mb-4">
                  How long does it take to get my products?
                </p>
                <ul className="text-cs ml-2 leading-10">
                  <li>✦ Domestic shipping can take up to 5 business days.</li>
                  <li>✦ Foreign shipping could take up to 14 business days.</li>
                  <li>
                    ✦ Due to global supply chain challenges, shipping times
                    could be longer than usual.
                  </li>
                </ul>
              </div>

              <div className="accordion overflow-y-hidden border-b max-h-10 hover:max-h-96 transition-all duration-1000 cursor-pointer">
                <p className="font-bold text-xl mb-4">
                  Do you offer warranty for your products?
                </p>
                <ul className="text-cs ml-2 leading-10">
                  <li>✦ All our products are subject to quality control.</li>
                  <li>
                    ✦ Our warranty provides a guarantee against manufacturer
                    defects.
                  </li>
                  <li>
                    ✦ The guarantee covers any manufacturing, design, or
                    material defect. Please notify us within 2 months of
                    noticing any defects.
                  </li>
                  <li>
                    ✦ It does not cover blows, improper use, or other issues
                    that are not attributable to a manufacturer defects.
                  </li>
                </ul>
              </div>

              <div className="accordion overflow-y-hidden border-b max-h-10 hover:max-h-96 transition-all duration-1000 cursor-pointer">
                <p className="font-bold text-xl mb-4">Do you offer refunds?</p>
                <ul className="text-cs ml-2 leading-10">
                  <li>✦ Yes, we offer full and partial refunds.</li>
                  <li>
                    ✦ Please enquire for more information about our Refund
                    policy.
                  </li>
                </ul>
              </div>

              <div className="accordion overflow-y-hidden border-b max-h-10 hover:max-h-96 transition-all duration-1000 cursor-pointer">
                <p className="font-bold text-xl mb-4">
                  What shipping methods do you offer?
                </p>
                <ul className="text-cs ml-2 leading-10">
                  <li>
                    ✦ We use all major carriers, and local courier partners. Use
                    the shipping estimator in the cart to check your shipping
                    rates.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

// const TrendingContent = [
//   {
//     name: "Classic Oxford Shirt",
//     brief: "Tailored slim-fit cotton oxford shirt with button",
//     price: "00",
//     tag: "best seller",
//   },
//   {
//     name: "Casual Crewneck T-Shirt",
//     brief: "Soft breathable cotton tee ideal for",
//     price: "00",
//     tag: "Back in stock",
//   },
//   {
//     name: "Denim Trucker Jacket",
//     brief: "Vintage-wash denim jacket with a relaxed",
//     price: "00",
//     tag: "Staff Pick",
//   },
//   {
//     name: "Wool Blend Overcoat",
//     brief: "Minimalist long overcoat crafted from a warm",
//     price: "00",
//   },
//   {
//     name: "Athletic Jogger Pants",
//     brief: "Tapered joggers with elastic waistband and",
//     price: "00",
//   },
//   {
//     name: "Leather Chelsea Boots",
//     brief: "Premium leather boots with elastic side panels and",
//     price: "00",
//   },
// ];
