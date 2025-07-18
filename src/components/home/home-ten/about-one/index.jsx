import { Link } from "react-router-dom";
import Icon1 from "../../../../assets/images/v10/icon4v10.png";
import Icon2 from "../../../../assets/images/v10/icon5v10.png";
import Thumb from "../../../../assets/images/v10/thumb2v10.png";
import FadeInUp from "../../../animation/FadeInUp";
function AboutOne() {
  return (
    <div className="sofax-section-padding2 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <FadeInUp className="sofax-content-thumb-v10">
              <img src={Thumb} alt="thumb" />
            </FadeInUp>
          </div>
          <div className="col-lg-7">
            <div className="sofax-default-content tac ml-80">
              <div className="tg-heading-subheading animation-style3">
                <h2>We are provide web hosting to solutions</h2>
              </div>
              <p>
                Web hosting industry involves focusing on several key areas
                ensure that your business can grow efficiently while maintaining
                high-quality service.
              </p>
            </div>
            <div className="extra-mt ml-70">
              <div className="sofax-about-wrapperv10">
                <div className="sofax-about-wrapv10">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <Link
                        data-bs-toggle="tab"
                        className="nav-link "
                        to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs"
                      >
                        <img src={Icon1} alt="Icon" />
                        <h4>Domain Services</h4>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        data-bs-toggle="tab"
                        className="nav-link"
                        to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs"
                      >
                        <img src={Icon2} alt="Icon" />
                        <h4>Web Hosting Services</h4>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sofax-about-datav10">
                <div className="tab-content">
                  <div id="about1v10" className="tab-pane fade ab">
                    <p>
                      Service that manages the DNS records for a domain (e.g., A
                      records, MX records, CNAME records). Companies that offer
                      DNS hosting services (e.g., Cloudflare, Google Cloud DNS).
                    </p>
                  </div>
                  <div id="about2v10" className="tab-pane fade ab">
                    <p>
                      Service that manages the DNS records for a domain (e.g., A
                      records, MX records, CNAME records). Companies that offer
                      DNS hosting services (e.g., Cloudflare, Google Cloud DNS).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOne;
