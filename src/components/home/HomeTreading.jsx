import userImg from "../../assets/home/avatar-placeholder.png";
import colImg from "../../assets/home/collection-1.png";
import colImg1 from "../../assets/home/collection-s-1.png";
import colImg2 from "../../assets/home/collection-s-2.png";

const collection = [
  {
    title: "DSGN Animals",
    name: "Mrfox",
    userImg: userImg,
    colImg,
    colImg1,
    colImg2,
    score: 123,
  },
  {
    title: "DSGN Animals",
    name: "Mrfox",
    userImg: userImg,
    colImg,
    colImg1,
    colImg2,
    score: 123,
  },
  {
    title: "DSGN Animals",
    name: "Mrfox",
    userImg: userImg,
    colImg,
    colImg1,
    colImg2,
    score: 123,
  },
];

export default function HomeTreading({ des, heading }) {
  return (
    <section className="max-w-[1050px] mx-auto p-4">
      <div className="mb-12 px-4">
        <h2 className="text-5xl font-semibold my-2">{heading}</h2>
        <p className="mx-0.5 my-1">{des}</p>
      </div>
      <div className="p-4 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
        {collection.map((item) => (
          <div className="nth-[2]:hidden nth-[3]:hidden sm:nth-[2]:block md:nth-[3]:block">
            <div>
              <img className="w-full rounded-[20px]" src={item.colImg} alt="" />
            </div>
            <div className="grid grid-cols-3 gap-4 my-4">
              <img
                className="rounded-[20px] w-full"
                src={item.colImg1}
                alt=""
              />
              <img
                className="rounded-[20px] w-full"
                src={item.colImg2}
                alt=""
              />
              <button
                className="rounded-[20px] font-bold"
                style={{ background: "#A259FF" }}
              >
                {item.score}+
              </button>
            </div>
            <div>
              <p className="font-semibold ">{item.title}</p>
              <div className="my-4 flex flex-row items-center gap-3">
                <img
                  className="w-[25px] rounded-full"
                  src={item.userImg}
                  alt=""
                />
                <p className="text-[0.8rem]">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
