import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import Image1 from "../../../../assets/images/v9/thumb1v9.png";
import PlayBtn from "../../../../assets/images/v9/videoplay2.png";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../../animation/FadeInStaggerTwo";
import FadeInUp from "../../../animation/FadeInUp";
import HeroContent from "./HeroContent";
function Hero() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="sofax-section-padding6" id="hero">
      <div className="container">
        <HeroContent />

        <ModalVideo
          channel="youtube"
          youtube={{ autoplay: 0 }}
          isOpen={isOpen}
          videoId="6mttwIBcig0"
          onClose={() => setOpen(false)}
        />
        <FadeInStaggerTwo className="sofax-hero-btn-wrap extra-mt">
          <FadeInStaggerTwoChildren>
            <Link
              className="sofax-default-btn pill"
              data-text="Get Started"
              to="https://calendly.com/hetdynamic/get-the-canada-residency-permit-for-entrepreneurs"
            >
              <span className="button-wraper">Get Started</span>
            </Link>
          </FadeInStaggerTwoChildren>
          <FadeInStaggerTwoChildren>
            <button
              className="sofax-default-btn outline-btn pill sofax-popup-video videov9 video-init"
              onClick={() => setOpen(true)}
            >
              <img src={PlayBtn} alt="Play btn" />
              Watch A Demo
            </button>
          </FadeInStaggerTwoChildren>
        </FadeInStaggerTwo>
        <FadeInUp className="hero9-thumb">
          <img src={Image1} alt="Thumb" />
        </FadeInUp>
      </div>
    </div>
  );
}

export default Hero;
