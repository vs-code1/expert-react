import Button3 from "../Button3";

import mosh from "../../assets/home/mashroom.png";
import userImg from "../../assets/home/nftUser.png";
import eye from "../../assets/home/eye.png";
import CountDowntime from "../CountDownTime";

export default function HomeNftShowCase({ user, nftName }) {
  return (
    <section>
      <div
        className="w-full h-[90vh] my-8"
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(197, 210, 219, 0) 0%, rgba(162, 89, 255, 1) 100%), url(${mosh})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1050px] p-4 mx-auto h-full flex flex-col justify-end mb-8">
          <div className="w-full flex flex-col gap-4 sm:flex-row items-center justify-between mb-8">
            <div>
              <div className="w-fit rounded-3xl flex flex-row gap-2 items-center py-2 px-4 bg-[#2B2B2B]">
                <img className="w-6 " src={userImg} alt="" />
                <p className="text-sm">{user}</p>
              </div>
              <div>
                <h3 className="text-6xl mt-8 mb-6 text-white">{nftName}</h3>
              </div>
              <div>
                <Button3 text="See NFT" image={eye} />
              </div>
            </div>
            <div>
              <CountDowntime />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
