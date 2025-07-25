import { Link } from "react-router-dom";
import IconCheck from "../../../../assets/images/v6/icon5v6.png";
import Thumb from "../../../../assets/images/v8/image3v8.png";
import FadeInRight from "../../../animation/FadeInRight";
import FadeInUp from "../../../animation/FadeInUp";
function AboutTwo() {
  return (
    <section className="sofax-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-2">
            <FadeInRight className="sofax-content-thumbv8 ml-70">
              <img src={Thumb} alt="Thumb" />
            </FadeInRight>
          </div>
          <div className="col-lg-6">
            <div className="sofax-default-content tac contentv8">
              <div className="tg-heading-subheading animation-style3">
                <h2>Easy solutions to for your IT problems</h2>
              </div>
              <p>
                Here are some comprehensive IT business solutions tailored to
                enhance efficiency to the security and to productivity in your
                organization.
              </p>
              <div className="sofax-list-icon-wrap extra-mt">
                <div className="sofax-list-icon-icon contentv8">
                  <ul>
                    <li>
                      <img src={IconCheck} alt="check icon" />
                      Cybersecurity solutions
                    </li>
                    <li>
                      <img src={IconCheck} alt="check icon" />
                      Protect sensitive data
                    </li>
                  </ul>
                </div>
                <div className="sofax-list-icon-icon contentv8">
                  <ul>
                    <li>
                      <img src={IconCheck} alt="check icon" />
                      Overheating Issues
                    </li>
                    <li>
                      <img src={IconCheck} alt="check icon" />
                      Software crashes
                    </li>
                  </ul>
                </div>
              </div>
              <FadeInUp className="sofax-title-btn extra-mt">
                <Link
                  className="sofax-default-btn pill"
                  data-text="Explore More"
                  to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs"
                >
                  <span className="button-wraper">Explore More</span>
                </Link>
              </FadeInUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTwo;
