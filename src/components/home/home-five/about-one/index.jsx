import { Link } from "react-router-dom";
import Thumb from "../../../../assets/images/v5/aboutthumb.png";
import Shape from "../../../../assets/images/v5/shape2.png";
import FadeInLeft from "../../../animation/FadeInLeft";
import FadeInUp from "../../../animation/FadeInUp";
import AboutCounter from "./Counter";
function AboutOne() {
  return (
    <section className="section sofax-section-padding2 position-ralatiove">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <FadeInLeft className="about-thumbv5 mr-80 ">
              <img src={Thumb} alt="Thumb" />
            </FadeInLeft>
          </div>
          <div className="col-lg-6">
            <div className="sofax-default-content tac">
              <div className="tg-heading-subheading animation-style3">
                <h2>We are loyal to innovative brands</h2>
              </div>
              <p>
                We are a one-stop digital agency, taking care of everything from
                custom web design to meticulous planning with strategies that
                increase your reach, drive traffic and engagement.
              </p>

              <AboutCounter />

              <FadeInUp className="extra-mt tac3">
                <Link
                  className="sofax-default-btn pill"
                  data-text="Explore More"
                  to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs"
                >
                  <span className="button-wraper">Explore More</span>
                </Link>
              </FadeInUp>
              <div className="sofax-about-shapev5">
                <img src={Shape} alt="Shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutOne;
