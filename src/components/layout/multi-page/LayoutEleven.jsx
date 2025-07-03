import { Outlet } from "react-router-dom";
import Header from "../../common/header";
import Footer from "../../home/home-five/footer";
import { Toaster } from "sonner";
function LayoutEleven() {
	return (
		<>
			<Toaster position="top-center" richColors />
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default LayoutEleven;
