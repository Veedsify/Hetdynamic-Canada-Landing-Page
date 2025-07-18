import AppleStore from "../../../../assets/images/v2/app-store.png";
import PlayStore from "../../../../assets/images/v2/play-store.png";
import Shape1 from "../../../../assets/images/v2/shape1.png";
import Shape2 from "../../../../assets/images/v2/shape2.png";
import Thumb1 from "../../../../assets/images/v2/thumb1.png";
import FadeInUp from "../../../animation/FadeInUp";

function Hero() {
	return (
		<div className=" section sofax-section-padding4" id="hero">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="sofax-hero-content">
							<h1
								className="slider-custom-anim-left"
								data-ani="slider-custom-anim-left"
								data-ani-delay="0.3s"
							>
								The next-gen crypto trading platform
							</h1>
							<p>
								Building a next crypto wallet and trading platform requires a comprehensive
								understanding of the evolving to a crypto landscape and the needs of users.
							</p>
							<div className="extra-mt">
								<div className="sofax-app-wrap position-relatiove">
									<a target="_blank" href="https://www.apple.com/app-store/">
										<img src={AppleStore} alt="Apple Store" />
									</a>

									<a target="_blank" href="https://playstore.com/">
										<img src={PlayStore} alt="Play Store" />
									</a>
									<div className="hero2-shape">
										<img src={Shape1} alt="Shape" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<FadeInUp className="sofax-hero-thumb2">
							<img src={Thumb1} alt="Thumb" />
							<div className="sofax-hero-shape-v2">
								<img src={Shape2} alt="Shape2" />
							</div>
						</FadeInUp>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
