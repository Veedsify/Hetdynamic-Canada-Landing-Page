import { Link } from "react-router-dom";
import FadeInStagger from "../../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";
const servicesData = [
	{
		id: 1,
		title: "Profile Qualification & Due Diligence",
		description:
			"Comprehensive assessment and verification of your business profile, credentials, and background to ensure compliance and readiness for market entry.",
		link: "single-service.html",
	},
	{
		id: 2,
		title: "Business Prototyping & Validation",
		description:
			"Strategic development and testing of business models, concepts, and prototypes to validate market viability and optimize your business approach.",
		link: "single-service.html",
	},
	{
		id: 3,
		title: "Company Incorporation & Shareholding Setup",
		description:
			"Complete legal establishment of your business entity, including corporate structure design, registration processes, and shareholding arrangements.",
		link: "single-service.html",
	},
	{
		id: 4,
		title: "SEO, Marketing, & Commercialization Support",
		description:
			"Comprehensive digital marketing strategies, search engine optimization, and commercialization planning to maximize your market presence and growth.",
		link: "single-service.html",
	},
	{
		id: 5,
		title: "Intellectual Property Assistance",
		description:
			"Professional guidance on protecting and managing your intellectual property rights, including patents, trademarks, and proprietary technologies.",
		link: "single-service.html",
	},
	{
		id: 6,
		title: "Full Immigration Legal Support",
		description:
			"Complete immigration services and legal assistance for business owners, including visa applications, work permits, and residency requirements.",
		link: "single-service.html",
	},
];
function Services() {
	return (
    <div className="section sofax-section-padding" id="service">
      <div className="container">
        <div className="sofax-section-title">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              <div className="tg-heading-subheading animation-style3">
                <h2>What We Handle</h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4 d-flex justify-content-end align-items-center">
              <div className="sofax-title-btn wow fadeInUpX">
                <Link
                  className="sofax-default-btn pill"
                  data-text="View All Services"
                  to="https://www.hetdynamic.com/services"
                >
                  <span className="button-wraper">View All Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {servicesData.map((service, index) => (
            <FadeInStagger key={service.id} index={index} className="col-lg-6">
              <ServiceCard service={service} />
            </FadeInStagger>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
