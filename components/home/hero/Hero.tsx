import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center max-w-[1440px] m-auto py-20 px-[160px] gap-8">
      <span className="border-b border-white text-white title pb-[10px]">
        Hi <br />
        I’m Saeed
      </span>
      <p className="text-white regular1">
        I would like to extend an invitation to you to view the items that I
        have designed throughout the course of my more than four years in the
        field. There are several products across a range of industries,
        including recruitment, micro-mobility, e-commerce and etc.
      </p>
      <div className="flex items-center gap-4  ">
        <button className="flex items-center justify-center bg-white text-black medium5 rounded-[32px] h-[56px] min-w-[256px] ">
          Say hi
          <Image
            src="/icons/arrow-right.svg"
            alt="arrow-right"
            width={24}
            height={24}
          />
        </button>
        <button className="border border-white medium5 text-white rounded-[32px] h-[56px] py-4 px-8">
          About me
        </button>
      </div>
    </div>
  );
};
export default Hero;
