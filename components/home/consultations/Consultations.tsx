import Image from "next/image";

const Consultations = () => {
  return (
    <div className="flex flex-col justify-center max-w-[1440px] m-auto py-20 px-[160px] gap-8">
      <span className="medium1">Consultations</span>
      <p className="medium4">
        In addition to my primary position, I got the chance to serve as a
        product design consultant for two Iranian companies. I could support
        their teams and procedures.
      </p>
      <div className="flex items-center gap-8 w-full mb-4">
        <div className="flex justify-center items-center w-[50%] h-[192px] bg-gray1000 rounded-[8px]">
          <Image
            src="/images/consultations/shab.svg"
            alt="shab"
            width={102}
            height={70}
          />
        </div>
        <div className="flex justify-center items-center w-[50%] h-[192px] bg-gray1000 rounded-[8px]">
          <Image
            src="/images/consultations/zero.svg"
            alt="zero"
            width={54}
            height={72}
          />
        </div>
      </div>
    </div>
  );
};
export default Consultations;
