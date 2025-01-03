import Image from "next/image";

const Items = [
  {
    image: "/images/remotereps/rr.svg",
    title: "RR Website",
    description: "Recruitment website",
  },
  {
    image: "/images/remotereps/pons.svg",
    title: "PONS",
    description: "SaaS, Panel design",
  },
  {
    image: "/images/remotereps/office.svg",
    title: "Office app",
    description: "SaaS, Panel design",
  },
  {
    image: "/images/remotereps/taldojo.svg",
    title: "Taldojo",
    description: "Webflow project",
  },
  {
    image: "/images/remotereps/get-hired.svg",
    title: "Get hired",
    description: "Visual &logo design",
  },
  {
    image: "/images/remotereps/speedhot.svg",
    title: "Speedhot",
    description: "E-commerce, Panel",
  },
  {
    image: "/images/remotereps/haltec.svg",
    title: "Haltech",
    description: "iOS app",
  },
  {
    image: "/images/remotereps/fama.svg",
    title: "Fama",
    description: "SaaS, Panel design",
  },
  {
    image: "/images/remotereps/ready-minds.svg",
    title: "Ready minds",
    description: "SaaS App ",
  },
  {
    image: "/images/remotereps/globalsense.svg",
    title: "GlobalSense",
    description: "IOT Vehicle Security App",
  },
  {
    image: "/images/remotereps/temp.svg",
    title: "Temp Check",
    description: "SaaS",
  },
  {
    image: "/images/remotereps/care.svg",
    title: "Care Match",
    description: "Lorem Ipsum",
  },
];
const RemoteReps = () => {
  return (
    <div className="flex flex-col justify-center max-w-[1440px] m-auto py-20 px-[160px] gap-8">
      <span className="medium1">RemoteReps</span>
      <p className="medium4">
        During my four years at RemoteReps, we have designed a number of
        products for our clients in addition to our own internal products.
        Let&apos;s examine them now.
      </p>
      <div className="flex items-center flex-wrap justify-between">
        {Items.map((item, index) => (
          <div key={index} className="flex items-center gap-8 w-[33%] mb-4">
            <div className="flex justify-center items-center w-[128px] h-[80px] bg-gray1000 rounded-[8px]">
              <Image src={item.image} alt={item.title} width={48} height={48} />
            </div>
            <div className="flex flex-col">
              <span className="semi-bold">{item.title}</span>
              <span className="regular3 text-gray400">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RemoteReps;
