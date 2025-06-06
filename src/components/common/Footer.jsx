import Button4 from "../Button4";

import navIcon from "../../assets/nav/Storefront.png";
import instaLogo from "../../assets/footer/instagramlogo.png";
import discordLogo from "../../assets/footer/discordlogo.png";
import youtubeLogo from "../../assets/footer/youtubelogo.png";
import twitterLogo from "../../assets/footer/twitterlogo.png";

import mailImg from "../../assets/home/envelope.png";

const logos = [instaLogo, discordLogo, youtubeLogo, twitterLogo];

export default function Footer() {
  return (
    <section className="bg-[#3B3B3B]">
      <div className="max-w-[1050px] mx-auto">
        <div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 pt-8 px-10 ">
            <div className="lg:col-span-4">
              <div className="flex flex-row items-center gap-3 mb-4">
                <div>
                  <img className="w-full" src={navIcon} alt="" />
                </div>
                <div>
                  <h1 className="text-2xl ">NFT Marketplace</h1>
                </div>
              </div>
              <div>
                <p className="text-sm text-[#b4b1b4] my-4">
                  {"NFT marketplace UI created with Anima for Figma"}
                </p>
                <p className="text-sm text-[#b4b1b4] my-4">
                  Join Our community{" "}
                </p>
              </div>
              <div className="flex flex-row gap-2">
                {logos.map((logo, index) => (
                  <div key={index}>
                    <img className="w-[30px]" src={logo} alt="" />
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <h1 className="text-2xl mb-4">Explore</h1>
              {["Marketplace", "Rankings", "Connect & wallet"].map((item) => (
                <p key={item} className="text-sm text-[#b4b1b4] my-4">
                  {item}
                </p>
              ))}
            </div>
            <div className="lg:col-span-5">
              <div>
                <h2 className="text-2xl mb-4">Join Our Weekly Digest </h2>
                <p className="text-sm text-[#b4b1b4] mt-2 mb-4">
                  Get Exclusive Promotions & Updates Straight To Your Inbox.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row ">
                <input
                  type="text"
                  name="text"
                  id=""
                  placeholder="Enter your email here"
                  className="w-full text-black bg-white px-4 py-4 lg:px-6 lg:py-2 rounded-[20px] lg:rounded-none lg:rounded-l-[20px]"
                />

                <div className="ml-0 lg:ml-[-1.2rem] w-full mt-2 lg:mt-0 ">
                  <Button4 text="Suscribe" image={mailImg} mid={true} />
                </div>
              </div>
            </div>
          </div>
          <div className="h-0.5 w-full my-4 bg-[#7b7b7b]"></div>
          <p className="text-[#b4b1b4] text-sm pb-4">
            Ⓒ NFT Market. Use this template freely.
          </p>
        </div>
      </div>
    </section>
  );
}
