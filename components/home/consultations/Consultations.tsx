import Image from "next/image";

const Consultations = () => {
  return (
    <div className="flex flex-col justify-center max-w-[1440px] sm:m-auto py-20 px-4 sm:px-[160px] gap-8">
      <span className="medium1">Consultations</span>
      <p className="medium4">
        In addition to my primary position, I got the chance to serve as a
        product design consultant for two Iranian companies. I could support
        their teams and procedures.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-8 w-full mb-4">
        <div className="flex justify-center items-center w-full sm:w-[50%] h-[192px] bg-gray1000 rounded-[8px] relative group transition-all duration-300 cursor-pointer">
          <Image
            src="/images/consultations/shab.svg"
            alt="shab"
            width={102}
            height={70}
          />
          <div className="absolute inset-0 bg-[#C4B5FD] bg-opacity-0 group-hover:bg-opacity-10 backdrop-blur-0 group-hover:backdrop-blur-[30px] transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-white medium1">Shab</span>
          </div>
        </div>
        <div className="flex justify-center items-center w-full sm:w-[50%] h-[192px] bg-gray1000 rounded-[8px] relative group transition-all duration-300 cursor-pointer">
          <Image
            src="/images/consultations/zero.svg"
            alt="zero"
            width={54}
            height={72}
          />
          <div className="absolute inset-0 bg-[#C4B5FD] bg-opacity-0 group-hover:bg-opacity-10 backdrop-blur-0 group-hover:backdrop-blur-[30px] transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-white medium1">Zero</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Consultations;
