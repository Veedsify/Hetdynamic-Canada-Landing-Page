import AutoSlider from "../../components/common/auto-slider";
import BreadCrumb from "../../components/common/Breadcrumb";
import Faq from "../../components/home/home-five/faq";
import About from "../../components/service-page/about";
import Services from "../../components/service-page/services";

function ServicePage() {
	return (
		<>
			<BreadCrumb title="Service" />
			<Services />
			<AutoSlider />
			<About />
			<Faq />
		</>
	);
}

export default ServicePage;
