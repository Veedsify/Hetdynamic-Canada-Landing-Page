import Cta from "../../components/home/home-one/cta";
import HeroSection from "../../components/home/home-one/hero";
import Integrations from "../../components/home/home-one/integrations";
import LogoSlider from "../../components/home/home-one/logo-slider";
import PricePlan from "../../components/home/home-one/price-plan";
import Services from "../../components/home/home-one/services";
import HomeFiveServices from "../../components/home/home-five/services";
import HomeNineServices from "../../components/home/home-nine/services";
import Testimonial from "../../components/home/home-one/testimonial";
import WhyChooseUs from "../../components/home/home-one/why-choose-us";

function HomeOne() {
	return (
    <>
      <HeroSection />
      <LogoSlider />
      <Services />
      <WhyChooseUs />
			<HomeFiveServices />
			<HomeNineServices />
      <PricePlan />
      {/* <Integrations /> */}
      <Testimonial />
      <Cta />
    </>
  );
}

export default HomeOne;
