export default function Button4({ image, text }) {
  return (
    <div
      className={`w-full lg:w-fit rounded-[20px] bg-[#A259FF] px-4 lg:px-6 flex flex-row items-center justify-center gap-3 h-[50px] lg:h-[60px]`}
    >
      <img src={image} alt="" />
      <div>{text}</div>
    </div>
  );
}
