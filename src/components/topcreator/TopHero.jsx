import avtar from "../../assets/marketplace/user.png";

const users = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  avtar,
  name: "Vishant",
  change: "2.4%",
  sold: "390",
  volume: "321",
}));

export default function TopHero({ head, des }) {
  return (
    <section className="max-w-[1050px] mx-auto">
      <div className="px-4">
        <div className="py-14 ">
          <div>
            <h1 className="text-4xl sm:text-6xl mb-2">{head}</h1>
            <p className="text-sm sm:text-[1rem]">{des}</p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-evenly gap-2">
          {["Today", "This Week", "This Month", "All Time"].map((item) => (
            <h2
              className="truncate py-4 w-full text-center text-2xl hover:border-b-2 border-[#cbcbcb]"
              key={item}
            >
              {item}
            </h2>
          ))}
        </div>

        <div className="mx-auto mt-4 mb-10 text-center grid gap-4">
          <div className="border border-[#a3a4a3] py-3 px-4 rounded-3xl grid grid-cols-6 items-center justify-between gap-2 text-left sm:grid-cols-8 md:grid-cols-10">
            <div className="text-center col-span-1">#</div>
            <div className="col-span-3">Artist</div>
            <div className="text-center hidden sm:block sm:col-span-2">
              Change
            </div>
            <div className="text-center hidden md:block md:col-span-2">
              NFTs Sold
            </div>
            <div className="text-center col-span-2">Volume</div>
          </div>
          {users.map((item) => (
            <div
              className=" bg-[#3B3B3B] rounded-2xl py-4 px-4 grid grid-cols-6 items-center justify-between gap-2 sm:grid-cols-8 md:grid-cols-10"
              key={item.id}
            >
              <div className="text-center col-span-1">{item.id}</div>
              <div className="text-center col-span-3 flex flex-row items-center">
                <img className="w-[25px]" src={item.avtar} alt="" />{" "}
                <p className=" ml-3">{item.name}</p>
              </div>
              <div className="text-center text-sm text-green-500 hidden sm:block sm:col-span-2">
                +{item.change}
              </div>
              <div className="text-center text-sm hidden md:block md:col-span-2">
                {item.sold}
              </div>
              <div className="text-center text-sm col-span-2">
                {item.volume}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
