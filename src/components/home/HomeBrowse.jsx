import image from "../../assets/home/paintBrush.png";
import bgImage from "../../assets/home/dolphin.png";

const cards = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: "Art",
  image,
}));

export default function HomeBrowser({ heading }) {
  return (
    <section className="max-w-[1050px] mx-auto p-4">
      <div>
        <div>
          <h2 className="text-5xl mb-8">{heading}</h2>
        </div>
        <div className="grid grid-cols-2 items-center justify-center gap-8 sm:grid-cols-4">
          {cards.map((item) => (
            <div
              key={item.id}
              className="relative w-full h-66 bg-gray-800 rounded-[20px] overflow-hidden flex flex-col"
            >
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-sm"
                style={{ backgroundImage: `url(${bgImage})` }}
              ></div>
              <div className="flex-1 flex items-center justify-center relative z-10">
                <img src={item.image} alt="" />
              </div>
              <div className="relative z-10 bg-[#3B3B3B] py-5">
                <span className="text-white px-8 font-bold">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
