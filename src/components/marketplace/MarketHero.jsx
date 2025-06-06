import searchLogo from "../../assets/footer/magniglass.png";

export default function MarketHero({ head, des }) {
  return (
    <section className="max-w-[1050px] mx-auto">
      <div className="px-4">
        <div className="py-14 ">
          <div>
            <h1 className="text-4xl sm:text-6xl mb-2">{head}</h1>
            <p className="text-sm sm:text-[1rem]">{des}</p>
          </div>
          <div className="my-8 py-4 px-8 border-2 rounded-[20px] border-[#a9a8a8] flex flex-row items-center justify-between gap-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Your Favourite NFTs"
            />
            <img className="w-[25px]" src={searchLogo} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 items-center justify-center text-center">
          <div className="">
            <p className="py-4 hover:border-b-3 border-white pb-8">
              NFTs{" "}
              <span className="text-[0.7rem] rounded-[20px] mb-0.5 py-1 px-2 bg-[#444]">
                234
              </span>
            </p>
          </div>
          <div className="">
            <p className="py-4 hover:border-b-3 border-white pb-8">
              Collections{" "}
              <span className="text-[0.7rem] rounded-[20px] mb-0.5 py-1 px-2 bg-[#444]">
                23
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
