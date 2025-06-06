import Button4 from "../Button4";

// import mailImg from "../../assets/home/envelope.png";
import nImg from "../../assets/home/newsletter.png";
import NewsLetter from "../NewsLetter";

export default function HomeNewsLetter() {
  return (
    <section className="max-w-[1050px] mx-auto p-4 my-10">
      <div className="p-16 bg-[#3B3B3B] rounded-[20px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-center ">
          <div>
            <img className="w-full rounded-[20px]" src={nImg} alt="" />
          </div>
          <div className=" p-4">
            <div>
              <h2 className="text-4xl lg:text-6xl">Join Our Weekly Digest </h2>
              <p className="lg:text-[1.2rem] mt-2 mb-8">
                Get Exclusive Promotions & Updates Straight To Your Inbox.
              </p>
            </div>
            <div>
              <NewsLetter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
