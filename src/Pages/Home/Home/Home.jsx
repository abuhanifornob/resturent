import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRate from "../ChefRate/ChefRate";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import PapularMenu from "../PopularMenu/PapularMenu";
import Recomments from "../Recomments/Recomments";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PapularMenu />
      <ChefRate />
      <Contact />
      <Recomments />

      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
