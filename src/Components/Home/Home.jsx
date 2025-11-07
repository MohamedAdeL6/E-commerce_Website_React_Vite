import SwiperBanner from "./SwiperHome/SwiperBanner/SwiperBanner";
import Section2 from "./SwiperHome/Section2/Section2";
import Section3 from "./SwiperHome/Section3/Section3";
import Section4 from './SwiperHome/Section4/Section4';
import SwiperMobile from "./SwiperHome/SwiperMobile/SwiperMobile";
import Section6 from './SwiperHome/Section6/Section6';
import SwiperLaptop from "./SwiperHome/SwiperLaptop/SwiperLaptop";
import SwiperMarka from "./SwiperHome/SwiperMarka/SwiperMarka";
import BestOffers from "./SwiperHome/BestOffer/BestOffers";
import Section9 from "./SwiperHome/Section9/Section9";



const Home = () => {
  return (
    <div className="home-page pt-3 d-flex flex-wrap gap-4">
      <SwiperBanner />
      <Section2 />
      <Section3 />
      <Section4 />
      <SwiperMobile />
      <Section6 />
      <SwiperLaptop />
      <Section9 />
      <BestOffers/>
      <SwiperMarka />
    </div>
  );
}

export default Home;



/*


 <Section2 />
      <Section3 />
      <Section4 />
      <SwiperMobile />
      <Section8/>
      <SwiperLaptop />
      <Section6 />
 <SwiperMarka />

*/
