import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayouts = ({children}) => {
    return (
        <div>
            <div className="antialiased bg-blue-50">
                <div>
                    <div>
                        <div className="max-w-l px-2 mx-auto">
                            <Navbar />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 p-8 sm:mt-0 sm:py-12">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default MainLayouts;