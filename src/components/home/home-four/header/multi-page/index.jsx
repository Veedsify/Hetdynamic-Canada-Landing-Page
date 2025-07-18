import DesktopMenu from "../../../../common/navigation/desktop-nav";
import MobileNavbar from "../../../../common/navigation/mobile-nav/MobileNavbar";
import { menuItemsData } from "../../../../common/navigation/mobile-nav/menuItemsData";
import HeaderButton from "../HeaderButton";
import HeaderLogo from "../HeaderLogo";
function Header() {
	return (
		<header className="site-header sofax-header-section site-header--menu-center bg-white" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopMenu />
					</div>
					<HeaderButton />
					<MobileNavbar menuItemsData={menuItemsData} title="Sofax" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
