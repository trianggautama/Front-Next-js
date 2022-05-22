import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayouts = ({children}) => {
    return (
        <div>
            <div className="antialiased bg-blue-50">
                <div>
                    <div>
                        <div className="max-w-xl px-8 mx-auto">
                            <Navbar />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 sm:mt-0 sm:py-12">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default MainLayouts;