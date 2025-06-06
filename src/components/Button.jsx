export default function Button({ image, text }) {
  return (
    <div
      className={`w-full sm:w-fit rounded-[20px] bg-[#A259FF] px-6 flex flex-row items-center justify-center gap-3 h-[60px]`}
    >
      <img src={image} alt="" />
      <div>{text}</div>
    </div>
  );
}
