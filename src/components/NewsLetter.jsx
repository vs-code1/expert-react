import Button4 from "./Button4";

import mailImg from "../assets/home/envelope.png";

export default function NewsLetter() {
  return (
    <div className="flex flex-col lg:flex-row  my-4">
      <input
        type="text"
        name="text"
        id=""
        placeholder="Enter your email here"
        className="w-full text-black bg-white px-4 py-2 lg:px-6 lg:py-4 rounded-[20px] lg:rounded-none lg:rounded-l-[20px]"
      />

      <div className="ml-0 lg:ml-[-1.2rem] w-full mt-4 lg:mt-0 ">
        <Button4 text="Suscribe" image={mailImg} mid={true} />
      </div>
    </div>
  );
}
