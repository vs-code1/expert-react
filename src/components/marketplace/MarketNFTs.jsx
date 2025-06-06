import { useEffect, useState } from "react";

import userImg from "../../assets/marketplace/user.png";
import nftImg from "../../assets/marketplace/robot.png";

const nfts = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: "Desert Walk",
  userName: "Catch 22",
  userImg,
  nftImg,
  price: "232",
  hBid: "211",
}));

export default function MarketNFTs() {
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 767) {
        setVisibleCount(12);
      } else if (width >= 640) {
        setVisibleCount(8);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  return (
    <section className="bg-[#3B3B3B] border-b-3 border-[#222]">
      <div className="max-w-[1050px] mx-auto px-4 py-8 ">
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 mb-10">
          {nfts.slice(0, visibleCount).map((item) => (
            <div key={item.id} className=" rounded-[20px] ">
              <div className="w-full">
                <img className="w-full object-cover" src={item.nftImg} alt="" />
              </div>
              <div className="bg-[#2B2B2B] rounded-b-[20px] py-4 px-6">
                <h2 className="font-bold text-3xl">{item.title}</h2>
                <div className="flex flex-row items-center gap-4 mt-2 mb-4">
                  <img className="w-6" src={item.userImg} alt="" />
                  <p className="text-sm">{item.userName}</p>
                </div>
                <div className="flex flex-row items-center justify-between mb-4">
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
      </div>
    </section>
  );
}
