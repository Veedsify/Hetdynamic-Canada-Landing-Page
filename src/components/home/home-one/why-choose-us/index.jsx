import { Link } from "react-router-dom";
import Card from "../../../../assets/images/v1/card.png";
import CheckCircle from "../../../../assets/images/v1/check-circle.png";
import Contentimg2 from "../../../../assets/images/v1/contentimg2.png";
import ContentThumb from "../../../../assets/images/v1/contentthumb1.png";
import Icon4 from "../../../../assets/images/v1/icon4.png";
import Icon9 from "../../../../assets/images/v1/icon9.png";
import Shape3 from "../../../../assets/images/v1/shape3.png";
import FadeInLeft from "../../../animation/FadeInLeft";
import FadeInRight from "../../../animation/FadeInRight";
import FadeInUp from "../../../animation/FadeInUp";
function WhyChooseUs() {
  return (
    <div className="sofax-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <FadeInLeft className="sofax-content-img box-shadow mb-130">
              <img
                style={{ borderRadius: "10px" }}
                src={
                  "https://images.unsplash.com/photo-1588733103629-b77afe0425ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2FuYWRhfGVufDB8fDB8fHww"
                }
                alt="ContentThumb"
              />
              <div className="sofax-card-shape">
                {/* <img src={Card} alt="Card" /> */}
              </div>
            </FadeInLeft>
          </div>
          <div className="col-lg-7">
            <div className="sofax-default-content tac ml-50 mb-130 animation-title animation-style3">
              <div className="tg-heading-subheading animation-style3">
                <h2>Why the Canada Startup Visa Program?</h2>
              </div>
              <p>
                The Canada Startup Visa Program is a unique opportunity for
                entrepreneurs to establish their businesses in Canada. It offers
                a streamlined process for obtaining permanent residency through
                innovation and job creation. The program is designed to attract
                high-potential startups and provide them with the support they
                need to succeed in the Canadian market.
              </p>
              <div className="extra-mt">
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <img src={CheckCircle} alt="check" />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4>No business trip required before PR</h4>
                  </div>
                </div>
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <img src={CheckCircle} alt="check" />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4>No management experience necessary</h4>
                  </div>
                </div>
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <img src={CheckCircle} alt="check" />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4>No net worth verification or financial burden</h4>
                  </div>
                </div>
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <img src={CheckCircle} alt="check" />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4>Work permit in 6-7 months</h4>
                  </div>
                </div>
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <img src={CheckCircle} alt="check" />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4>Permanent residency in 1-2 years</h4>
                  </div>
                </div>
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <img src={CheckCircle} alt="check" />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4>Entire team gets open work permits</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <FadeInRight className="sofax-content-img2 position-ralatiove ml-31">
              <img src={"/do-you-qualify.png"} alt="Thumbs" />
              <div className="sofax-content-shape-v1">
                <img src={Shape3} alt="shape" />
              </div>
            </FadeInRight>
          </div>
          <div className="col-lg-7">
            <div className="sofax-default-content mr-80 tac fs-19">
              <div className="tg-heading-subheading animation-style3">
                <h2>Do You Qualify?</h2>
              </div>
              <p>
                If you are an entrepreneur with a viable business idea and the
                ability to create jobs in Canada, you may qualify for the canada
                Startup Visa Program.
              </p>
              <div className="extra-mt">
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <img src={Icon9} alt="icon" />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4>CLB 5 in English or French (IELTS 5, Reading 4)</h4>
                    <p>You must demonstrate proficiency in English or French</p>
                  </div>
                </div>
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <img src={Icon4} alt="icon" />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4>Innovative business idea</h4>
                    <p>
                      Your business idea must be innovative and have the
                      potential to create jobs in Canada.
                    </p>
                  </div>
                </div>
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <img src={Icon4} alt="icon" />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4>Letter of Support from a designated organization</h4>
                    <p>
                      You must obtain a Letter of Support from a designated
                      organization, such as a venture capital fund, angel
                      investor group, or business incubator.
                    </p>
                  </div>
                </div>
              </div>
              <FadeInUp className="extra-mt">
                <Link
                  className="sofax-default-btn pill"
                  data-text="Get started"
                  hrtoef="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs"
                >
                  <span className="button-wraper">Check Eligibility</span>
                </Link>
              </FadeInUp>
              <div className="sofax-content-shape-v1">
                <img src={Shape3} alt="shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
