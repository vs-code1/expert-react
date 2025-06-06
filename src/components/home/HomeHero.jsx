import Button from "../Button";

import avtarImage from "../../assets/home/avatar-placeholder.png";

export default function HomeHero({
  heroHeading,
  heroText,
  button,
  data,
  heroImage,
}) {
  return (
    <section className="max-w-[1050px] mx-auto mt-8 mb-6">
      <div className=" px-6 grid grid-cols-1  place-content-start gap-12 sm:grid-cols-2">
        <div className="my-8 sm:order-1">
          <h1 className="text-[1.8rem] lg:leading-22 sm:text-5xl font-[monofiy]  lg:text-7xl font-semibold my-2">
            {heroHeading}
          </h1>
          <p className="text-[1.2rem] leading-10 font-sans">{heroText}</p>
        </div>
        <div className="my-16 sm:row-start-1 sm:row-end-3 sm:order-3">
          <div className="rounded-3xl bg-[#3B3B3B] ">
            <img className="w-full" src={heroImage} alt="" />
            <div className="px-8 pb-4 ">
              <p className="pt-4  text-[1.2rem] font-semibold">
                {"Space Walking"}
              </p>
              <div className="my-4 flex flex-row gap-4 items-center">
                <img className="rounded-full w-10" src={avtarImage} alt="" />
                <p>Animakid</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:order-2 mt-[-4rem]">
          <Button image={button.btnIcon} text={button.text} />
          <ul className="my-8 flex flex-row items-center justify-between gap-4">
            {data.map((item) => (
              <li className="text-[1.2rem] font-bold">
                <p className="mb-1">{item.numb}K+</p>
                <p>{item.type}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
