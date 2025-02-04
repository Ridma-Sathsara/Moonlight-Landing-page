import Banner from "../components/Banner";
import Categories from "../components/Categories";
import SampleItems from "../components/SampleItems";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
// import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Banner />
      <Testimonials />
      <SampleItems />
      <Contact />
      <Categories />
      {/* <Footer /> */}
    </div>
  );
}
export default Home;
