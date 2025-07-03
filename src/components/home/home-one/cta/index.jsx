import { Link } from "react-router-dom";
import Shape4 from "../../../../assets/images/v1/shape4.png";
import FadeInUp from "../../../animation/FadeInUp";
function Cta() {
	return (
    <section className="sofax-section-padding2 bg-light">
      <div className="container">
        <div className="sofax-cta-content">
          <div className="tg-heading-subheading animation-style3">
            <h2>
              Ready For Canada PR? <br />
            </h2>
          </div>
          <p>
            Join thousands of successful entrepreneurs who have made Canada
            their home. Our team is here to guide you through every step of the
            process, ensuring a smooth transition and a bright future in Canada.
          </p>
          <FadeInUp className="extra-mt">
            <Link
              className="sofax-default-btn pill"
              data-text="Create a free account"
              to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs"
            >
              <span className="button-wraper">Book a free consultation</span>
            </Link>
            <span className="cta-bottom">
              Full access. No credit card needed.
            </span>
          </FadeInUp>
          <div className="sofax-cta-shape">
            <img src={Shape4} alt="Shape" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
