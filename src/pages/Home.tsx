import Navbar from "../components/navbar";
import MainLayout from "../layouts/MainLayout";
import HomeSection from "../components/home";
import Exp from "../components/exp";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/FooterLight";

export default function Home() {
    return (
        <div className="relative bg-black">
            <section className="relative z-30 bg-black min-h-screen md:h-screen md:overflow-hidden">
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                    <div className="custom-grain-layer"></div>
                </div>
                <MainLayout>
                    <div className="flex flex-col min-h-screen md:h-screen md:overflow-hidden">
                        <div className="h-auto md:h-[10vh]">
                            <Navbar />
                        </div>
                        <div className="h-auto md:h-[60vh] py-10 md:py-0 flex items-center">
                            <HomeSection />
                        </div>
                        <div className="h-auto md:h-[40vh] py-10 md:py-0">
                            <Exp />
                        </div>
                    </div>
                </MainLayout>
            </section>

            <section className="sticky top-0 z-20 min-h-screen bg-white w-full py-20 -mt-[100vh]">
                <div className="flex flex-col items-center">
                    <ProjectsSection />
                    <Footer />
                </div>
            </section>

            <div className="h-[200vh] bg-transparent pointer-events-none" />
        </div>
    );
}
