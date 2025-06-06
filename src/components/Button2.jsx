export default function Button2({ text, image }) {
  return (
    <div
      style={{ border: "2px solid #A259Ff" }}
      className="w-full sm:w-fit rounded-[20px] border-4 border-[#A259FF] px-6 flex flex-row items-center justify-center  gap-3 h-[60px]"
    >
      <img src={image} alt="" />
      <div className="">{text}</div>
    </div>
  );
}
