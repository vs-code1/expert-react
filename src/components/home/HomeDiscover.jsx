import Button2 from "../Button2";

import userImg from "../../assets/home/nftUser.png";
import nftImage from "../../assets/home/space.png";
import eye from "../../assets/home/eye.png";

const nfts = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  title: "Distant Galaxy",
  user: "MoonDancer",
  nftImage,
  userImg,
  price: "231",
  hBid: "212",
}));

export default function HomeDiscover({ heading, des }) {
  return (
    <section className="max-w-[1050px] mx-auto p-4 my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
        <div className="order-1 sm:order-none">
          <h2 className="text-5xl">{heading}</h2>
          <p>{des}</p>
        </div>
        <div className="order-2 sm:col-span-2 grid grid-cols-1 items-center gap-x-8 gap-y-4 my-8 sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
          {nfts.map((item) => (
            <div
              key={item.id}
              className="sm:last:hidden md:last:block rounded-[20px]"
            >
              <div className="w-full">
                <img
                  className="w-full object-cover"
                  src={item.nftImage}
                  alt=""
                />
              </div>
              <div className="bg-[#3B3B3B] rounded-b-[20px] py-4 px-6">
                <p className="font-bold">{item.title}</p>
                <div className="flex flex-row items-center gap-4 mt-2 mb-4">
                  <img className="w-6" src={item.userImg} alt="" />
                  <p className="text-sm">{item.user}</p>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <p className="text-xs">Price</p>
                    <p>{item.price}$</p>
                  </div>
                  <div>
                    <p className="text-xs">Higest Bit</p>
                    <p>{item.hBid}$</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="order-3 sm:order-none sm:justify-self-end sm:w-fit">
          <Button2 text="See All" image={eye} />
        </div>
      </div>
    </section>
  );
}
