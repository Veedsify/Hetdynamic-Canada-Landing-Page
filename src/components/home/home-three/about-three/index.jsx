import { Link } from "react-router-dom";
import Thumb from "../../../../assets/images/v3/thumb3.png";
import FadeInRight from "../../../animation/FadeInRight";
import FadeInUp from "../../../animation/FadeInUp";
function AboutThree() {
  return (
    <section className="sofax-section-padding3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-2">
            <FadeInRight className="sofax-content-img ml-70 box-shadow">
              <img src={Thumb} alt="Thumb" />
            </FadeInRight>
          </div>
          <div className="col-lg-6">
            <div className="sofax-default-content tac">
              <div className="tg-heading-subheading animation-style3">
                <h2>Error-free time tracking & billing</h2>
              </div>
              <p>
                We offer real-time reporting capabilities that allow team leads
                or administrators to monitor time usage instantly. This feature
                helps in identifying discrepancies early and ensures accurate
                invoicing.
              </p>
              <p>
                Ensures that all project-related expenses are accurately
                recorded & can be billed to clients or accounted for internally.
              </p>
            </div>
            <FadeInUp className="sofax-title-btn extra-mt">
              <Link
                className="sofax-default-btn pill"
                data-text="Learn More"
                to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs"
              >
                <span className="button-wraper">Learn More</span>
              </Link>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutThree;
