import { useEffect, useState } from "react";

import HomeBrowser from "../components/home/HomeBrowse";
import HomeHero from "../components/home/HomeHero";
import HomeTopCtor from "../components/home/HomeTopCtor";
import HomeTreading from "../components/home/HomeTreading";

import {
  homeHeroContent,
  trending,
  top,
  browse,
  discover,
  how,
} from "../components/home/homeContent";
import HomeDiscover from "../components/home/HomeDiscover";
import HomeNftShowCase from "../components/home/HomeNftShowCase";
import HomeHow from "../components/home/HomeHow";
import HomeNewsLetter from "../components/home/HomeNewsLetter";

export default function HomePage() {
  return (
    <div className="">
      <HomeHero {...homeHeroContent} />
      <HomeTreading {...trending} />
      <HomeTopCtor {...top} />
      <HomeBrowser {...browse} />
      <HomeDiscover {...discover} />
      <HomeNftShowCase user="Shroomie" nftName="Magic Mashrooms" />
      <HomeHow {...how} />
      <HomeNewsLetter />
    </div>
  );
}

const CardGrid = () => {
  const cards = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Card ${i + 1}`,
  }));

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 max-w-6xl mx-auto">
      {cards.slice(0, visibleCount).map((card) => (
        <div
          key={card.id}
          className="bg-white shadow-md rounded-lg p-6 text-center border"
        >
          {card.title}
        </div>
      ))}
    </div>
  );
};
