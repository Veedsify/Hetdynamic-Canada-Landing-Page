import { Link } from "react-router-dom";
import LogoDark from "../../../../assets/images/logo/logo-dark.svg";
function Footer() {
  return (
    <footer className="sofax-footer-section">
      <div className="container">
        <div className="sofax-footer-top">
          <div className="row">
            <div className="col-md-3">
              <div className="sofax-footer-menu">
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
                    <Link to="/terms-condition">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sofax-footer-menu ml-50">
                <h5>Utility Pages</h5>
                <ul>
                  <li>
                    <Link to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs">
                      Instructions
                    </Link>
                  </li>
                  <li>
                    <Link to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs">
                      Style Guide
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
            <div className="col-md-3">
              <div className="sofax-footer-menu ml-90">
                <h5>Product</h5>
                <ul>
                  <li>
                    <Link to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs">
                      Integration
                    </Link>
                  </li>
                  <li>
                    <Link to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs">
                      Customers
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs">
                      Help Center
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sofax-footer-menu sofax-footer-active">
                <h5>Resource</h5>
                <ul>
                  <li>
                    <Link to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs">
                      Releases
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/career">Careers</Link>
                  </li>
                  <li>
                    <Link to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs">
                      Contact Sales
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sofax-footer3-wrap">
          <div className="sofax-footer3-logo">
            <Link to="/muti-page/home-three">
              <img src={LogoDark} alt="logo" />
            </Link>
          </div>
          <div className="sofax-footer3-text">
            <p>© 2025 Hetdynamic All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
