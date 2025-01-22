import Experiences from "./experiences/Experiences";
import Introduction from "./introduction/Introduction";
import Skills from "./skills/Skills";

const About = () => {
  return (
    <div className="flex flex-col justify-center max-w-[1440px] sm:m-auto py-20 px-4 sm:px-[160px] gap-[160px]">
      <Introduction />
      <Skills />
      <Experiences />
    </div>
  );
};
export default About;
