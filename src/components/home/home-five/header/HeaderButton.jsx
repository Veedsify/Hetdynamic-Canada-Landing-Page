import { Link } from "react-router-dom";
function HeaderButton() {
  return (
    <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
      <Link
        className="sofax-default-btn pill sofax-header-btn"
        data-text="Contact Us"
        to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs"
      >
        <span className="button-wraper">Contact Us</span>
      </Link>
    </div>
  );
}

export default HeaderButton;
