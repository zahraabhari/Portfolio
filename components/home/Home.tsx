import Consultations from "./consultations/Consultations";
import Hero from "./hero/Hero";
import ProjectSection from "./projectSection/ProjectSection";
import RemoteReps from "./remoteReps/RemoteReps";

const Home = () => {
  return (
    <div className="flex flex-col bg-black w-full text-white">
      <Hero />
      <ProjectSection />
      <RemoteReps />
      <Consultations />
    </div>
  );
};
export default Home;
