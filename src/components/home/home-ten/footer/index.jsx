import { Link } from "react-router-dom";
import Logo from "../../../../assets/images/logo/logo-white.svg";
import FooterBottom from "./FooterBottom";
function Footer() {
  return (
    <footer className="sofax-footer-section dark-bg light-color">
      <div className="container">
        <div className="sofax-footer-top">
          <div className="row">
            <div className="col-xl-4 col-md-12">
              <div className="sofax-footer-wrap mr15">
                <Link to="/multi-page/home-ten">
                  <img src={Logo} alt="Logo" />
                </Link>
                <p>
                  Chooses a web hosting service to you are renting space on
                  server where your websites files and data are stored.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="sofax-footer-menu ml-70 light-color">
                <h5>Company</h5>
                <ul>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs">
                      Contact US
                    </Link>
                  </li>
                  <li>
                    <Link to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms-and-condition">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="sofax-footer-menu ml-50 light-color">
                <h5>Utility pages</h5>
                <ul>
                  <li>
                    <Link to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs">
                      Instructions
                    </Link>
                  </li>
                  <li>
                    <Link to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs">
                      Style guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/404">404 Pages</Link>
                  </li>
                  <li>
                    <Link to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs">
                      Licenses
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="sofax-footer-menu sofax-footer-active light-color">
                <h5>Resources</h5>
                <ul>
                  <li>
                    <Link to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs">
                      Articles
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/career">Careers</Link>
                  </li>
                  <li>
                    <Link to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs">
                      Video guide
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
