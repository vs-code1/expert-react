import { useEffect, useState } from "react";

import Button2 from "../Button2";

import rocket from "../../assets/home/rocketLaunch.png";
import userImg from "../../assets/home/top-creator.png";

const users = [
  { creator: "Digilab", sales: "123.21$", userImg },
  { creator: "Digilab", sales: "123.21$", userImg },
  { creator: "Digilab", sales: "123.21$", userImg },
  { creator: "Digilab", sales: "123.21$", userImg },
  { creator: "Digilab", sales: "123.21$", userImg },
  { creator: "Digilab", sales: "123.21$", userImg },
  { creator: "Digilab", sales: "123.21$", userImg },
  { creator: "Digilab", sales: "123.21$", userImg },
  { creator: "Digilab", sales: "123.21$", userImg },
  { creator: "Digilab", sales: "123.21$", userImg },
  { creator: "Digilab", sales: "123.21$", userImg },
  { creator: "Digilab", sales: "123.21$", userImg },
];

export default function HomeTopCtor({ heading, des }) {
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 767) {
        setVisibleCount(12);
      } else if (width >= 640) {
        setVisibleCount(6);
      } else {
        setVisibleCount(5);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  return (
    <section className="max-w-[1050px] mx-auto p-4 my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
        <div className="order-1 sm:order-none">
          <h2 className="text-5xl">{heading}</h2>
          <p>{des}</p>
        </div>
        <div className="order-2 sm:col-span-2 grid grid-cols-1 items-center gap-x-8 gap-y-4 my-8 sm:grid-cols-2 md:grid-cols-4">
          {users.slice(0, visibleCount).map((item, index) => (
            <div
              key={index}
              className="relative bg-[#001b25] p-4 flex flex-row items-center gap-4 rounded-2xl md:flex-col"
            >
              <div>
                <span className="px-2 py-1 text-xs rounded-full absolute top-2 left-2 bg-[#2B2B2B]">
                  {index + 1}
                </span>
                <img
                  className="w-[50px] md:w-[100px] mx-auto"
                  src={item.userImg}
                  alt=""
                />
              </div>
              <div className="text-left md:text-center">
                <h2 className="text-2xl">{item.creator}</h2>
                <p className="text-xs">
                  <span className="text-[#858584]">Total Sales: </span>{" "}
                  {item.sales}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="order-3 sm:order-none sm:justify-self-end sm:w-fit">
          <Button2 text="View Ranking" image={rocket} />
        </div>
      </div>
    </section>
  );
}
