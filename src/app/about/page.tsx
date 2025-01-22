import About from "../../../components/about/About";
import Footer from "../../../components/layout/footer/Footer";
import Header from "../../../components/layout/header/Header";

const AboutPage = () => {
  return (
    <div className="w-full bg-black text-white">
      <Header />
      <About />
      <Footer />
    </div>
  );
};
export default AboutPage;
