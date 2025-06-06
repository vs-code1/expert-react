export default function Button3({ image, text }) {
  return (
    <div className="w-full sm:w-fit rounded-[20px] bg-[#ffffff] text-black px-6 flex flex-row items-center justify-center gap-3 h-[60px]">
      <img src={image} alt="" />
      <div className="font-bold">{text}</div>
    </div>
  );
}
