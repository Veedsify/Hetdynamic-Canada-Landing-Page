import { Link } from "react-router-dom";
import Icon10 from "../../../../assets/images/v1/icon10.png";
import FadeInUp from "../../../animation/FadeInUp";

function Integrations() {
  return (
    <section className="sofax-section-padding2 dark-bg" id="integration">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <FadeInUp className="integration-social-icon">
              <img src={Icon10} alt="Icon" />
            </FadeInUp>
          </div>
          <div className="col-lg-6">
            <div className="sofax-default-content tac light-color">
              <div className="tg-heading-subheading animation-style3">
                <h2>Integrate your tech stack & many tools</h2>
              </div>
              <p>
                Integrating with the apps that drive your business. Seamlessly
                connect with your favorite or new tools with tailored
                recommendations.
              </p>
              <FadeInUp className="extra-mt">
                <Link
                  className="sofax-default-btn pill"
                  data-text="View all integrations"
                  to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs"
                >
                  <span className="button-wraper">View all integrations </span>
                </Link>
              </FadeInUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Integrations;
