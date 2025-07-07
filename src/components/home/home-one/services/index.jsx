import { Link } from "react-router-dom";
import Icon1 from "../../../../assets/images/v1/icon1.png";
import Icon2 from "../../../../assets/images/v1/icon2.png";
import Icon3 from "../../../../assets/images/v1/icon3.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import FadeInUp from "../../../animation/FadeInUp";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    id: crypto.randomUUID(),
    icon: "/sheild.svg",
    title: "Transparent, client-focused service",
    description:
      "Providing a comprehensive range of services to help individuals and businesses navigate the complexities",
  },
  {
    id: crypto.randomUUID(),
    icon: "/license.svg",
    title: "Licensed immigration lawyers",
    description:
      "Our team of licensed	& experienced lawyers and consultants are dedicated to providing personalized support.",
  },
  {
    id: crypto.randomUUID(),
    icon: "/partnership.svg",
    title: "Strong international partnerships",
    description:
      "We have established strong partnerships with international organizations, governments, and businesses to provide our clients with the best possible service.",
  },
];
function Services() {
  return (
    <div className="section sofax-section-padding bg-light" id="service">
      <div className="container">
        <div className="sofax-section-title max-width-770 ">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="tg-heading-subheading animation-style3 mb-4">
                <h2>Meet Hetdynamic</h2>
              </div>
              <p className="sofax-section-description">
                We’re a leading global immigration consultancy, founded by
                renowned immigration lawyer Henry Ezeribe (LLM, CMgr, CRA), with
                over a decade of experience.
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 d-flex justify-content-end align-items-center">
              <FadeInUp className="sofax-title-btn">
                <Link
                  className="sofax-default-btn pill"
                  data-text="View all services"
                  to="https://www.hetdynamic.com/"
                >
                  <span className="button-wraper">View all services</span>
                </Link>
              </FadeInUp>
            </div>
          </div>
        </div>

        <div className="row">
          {servicesData.map((item, index) => (
            <FadeInStagger
              key={item.id}
              index={index}
              className="col-xl-4 col-md-6"
            >
              <ServiceCard service={item} />
            </FadeInStagger>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
