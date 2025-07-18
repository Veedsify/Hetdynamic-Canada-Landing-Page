import { Link } from "react-router-dom";
import Thumb from "../../../../assets/images/v4/aboutthumb.png";
import FadeInRight from "../../../animation/FadeInRight";
import FadeInUp from "../../../animation/FadeInUp";
function AboutOne() {
  return (
    <section className="sofax-section-padding2 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <FadeInRight className="sofax-content-thumb-v4 ">
              <img src={Thumb} alt="Thumbs" />
            </FadeInRight>
          </div>
          <div className="col-lg-7">
            <div className="sofax-default-content mr-90 fs-19 tac">
              <div className="tg-heading-subheading animation-style3">
                <h2>Connect with many people individually</h2>
              </div>
              <p>
                We ensure that your social media profile is complete,
                professional and includes relevant information about your
                business. Create content that resonates with your target
                audience.
              </p>
              <p>
                Tailor your posts to address their interests, pain points and
                preferences Use a mix of media, such as images, videos and
                infographics.
              </p>
              <FadeInUp className="extra-mt">
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
      </div>
    </section>
  );
}

export default AboutOne;
