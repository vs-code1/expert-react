import walletImg from "../../assets/home/wallet.png";

const items = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  walletImg,
  title: "Setup Your Wallet",
  des: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner. ",
}));

export default function HomeHow({ heading, des }) {
  return (
    <section className="max-w-[1050px] mx-auto p-4">
      <div>
        <div>
          <h2 className="text-5xl">{heading}</h2>
          <p>{des}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-6 my-10">
          {items.map((item) => (
            <div key={item.id} className="bg-[#3B3B3B] px-4 py-6 rounded-3xl">
              <div className="text-center px-6">
                <img
                  className="w-full mx-auto mb-4"
                  src={item.walletImg}
                  alt=""
                />
                <h3 className="text-2xl my-2">{item.title}</h3>
                <p className="text-sm">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
