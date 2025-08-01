import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import logo1 from "../../../../assets/images/v9/logo1v9.png";
import logo2 from "../../../../assets/images/v9/logo2v9.png";
import logo3 from "../../../../assets/images/v9/logo3v9.png";
import logo4 from "../../../../assets/images/v9/logo4v9.png";
import logo5 from "../../../../assets/images/v9/logo5v9.png";
import logo6 from "../../../../assets/images/v9/logo6v9.png";

const sliderData = [
	{
		id: 1,
		logo: logo1,
	},
	{
		id: 2,
		logo: logo2,
	},
	{
		id: 3,
		logo: logo3,
	},
	{
		id: 4,
		logo: logo4,
	},
	{
		id: 5,
		logo: logo5,
	},
	{
		id: 6,
		logo: logo6,
	},
	{
		id: 1,
		logo: logo1,
	},
	{
		id: 2,
		logo: logo2,
	},
	{
		id: 3,
		logo: logo3,
	},
];

const swiperSettings = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 2,
	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
};

function LogoSlider() {
	return (
		<section className="sofax-slider-section">
			<div className="container">
				<div className="sofax-title-section">
					<h4>Trusted by the most innovative companies worldwide</h4>
				</div>
				<div className="sofax-brand-slider">
					{
						<Swiper {...swiperSettings}>
							{sliderData.map((item) => (
								<SwiperSlide key={item.id}>
									<div className="sofax-logo-icon-item">
										<img src={item.logo} alt={item.title} />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					}
				</div>
			</div>
		</section>
	);
}

export default LogoSlider;
