import Image from "next/image";

const ProjectSection = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 h-[1719px] sm:h-[712px] w-full">
      <div className="flex flex-col gap-2 w-full h-full">
        <div className="flex justify-center bg-gray1000 flex-1 relative group transition-all duration-300 cursor-pointer">
          <Image
            src={"/images/project/remoteReps.svg"}
            layout="fill"
            alt="remoteReps"
            className="!h-[54px] !w-[361px] m-auto"
          />
          <div className="absolute inset-0 bg-[#C4B5FD] bg-opacity-0 group-hover:bg-opacity-10 backdrop-blur-0 group-hover:backdrop-blur-[30px] transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-white medium1">RemoteReps</span>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-1 w-full h-full relative">
          <div className=" flex justify-center bg-gray1000 flex-1 h-full relative group transition-all duration-300 cursor-pointer">
            <Image
              src={"/images/project/ava.svg"}
              layout="fill"
              alt="ava"
              className="!h-[122px] !w-[148px] m-auto"
            />
            <div className="absolute inset-0 bg-[#C4B5FD] bg-opacity-0 group-hover:bg-opacity-10 backdrop-blur-0 group-hover:backdrop-blur-[30px] transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-white medium1">AVA</span>
            </div>
          </div>
          <div className=" flex justify-center bg-gray1000 flex-1 h-full relative group transition-all duration-300 cursor-pointer">
            <Image
              src={"/images/project/get-hired.svg"}
              layout="fill"
              alt="get hired"
              className="!h-[58px] !w-[186px] m-auto"
            />
            <div className="absolute inset-0 bg-[#C4B5FD] bg-opacity-0 group-hover:bg-opacity-10 backdrop-blur-0 group-hover:backdrop-blur-[30px] transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-white medium1">Get hired</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full h-full  ">
        <div className=" flex justify-center bg-gray1000 flex-1 relative group transition-all duration-300 cursor-pointer">
          <Image
            src={"/images/project/pons.svg"}
            layout="fill"
            alt="pons"
            className="!h-[260px] !w-[290px] m-auto"
          />
          <div className="absolute inset-0 bg-[#C4B5FD] bg-opacity-0 group-hover:bg-opacity-10 backdrop-blur-0 group-hover:backdrop-blur-[30px] transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-white medium1">Pons</span>
          </div>
        </div>
        <div className=" flex justify-center bg-gray1000 flex-1 relative group transition-all duration-300 cursor-pointer">
          <Image
            src={"/images/project/tire.svg"}
            layout="fill"
            alt="tire"
            className="!h-[130px] !w-[130px] m-auto"
          />
          <div className="absolute inset-0 bg-[#C4B5FD] bg-opacity-0 group-hover:bg-opacity-10 backdrop-blur-0 group-hover:backdrop-blur-[30px] transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-white medium1">Haltec</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full h-full relative">
        <div className=" flex justify-center bg-gray1000 flex-1 relative group transition-all duration-300 cursor-pointer">
          <Image
            src={"/images/project/car.svg"}
            layout="fill"
            alt="car"
            className="!h-[128px] !w-[305px] m-auto"
          />
          <div className="absolute inset-0 bg-[#C4B5FD] bg-opacity-0 group-hover:bg-opacity-10 backdrop-blur-0 group-hover:backdrop-blur-[30px] transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-white medium1">Speedhot</span>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-1">
          <div className=" flex justify-center bg-gray1000 flex-1 h-full relative group transition-all duration-300 cursor-pointer">
            <Image
              src={"/images/project/fama.svg"}
              layout="fill"
              alt="fama"
              className="!h-[192px] !w-[172px] m-auto"
            />
            <div className="absolute inset-0 bg-[#C4B5FD] bg-opacity-0 group-hover:bg-opacity-10 backdrop-blur-0 group-hover:backdrop-blur-[30px] transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-white medium1">Fama</span>
            </div>
          </div>
          <div className="flex flex-col gap-2  flex-1 h-full  ">
            <div className=" flex justify-center bg-gray1000 flex-1 relative group transition-all duration-300 cursor-pointer">
              <Image
                src={"/images/project/Taldojo.svg"}
                layout="fill"
                alt="Taldojo"
                className="!h-[87px] !w-[88px] m-auto"
              />
              <div className="absolute inset-0 bg-[#C4B5FD] bg-opacity-0 group-hover:bg-opacity-10 backdrop-blur-0 group-hover:backdrop-blur-[30px] transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white medium1">Taldojo</span>
              </div>
            </div>
            <div className=" flex justify-center bg-gray1000 flex-1 relative group transition-all duration-300 cursor-pointer">
              <Image
                src={"/images/project/ready-minds.svg"}
                layout="fill"
                alt="ready minds"
                className="!h-[102px] !w-[126px] m-auto"
              />
              <div className="absolute inset-0 bg-[#C4B5FD] bg-opacity-0 group-hover:bg-opacity-10 backdrop-blur-0 group-hover:backdrop-blur-[30px] transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white medium1">Ready minds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectSection;
