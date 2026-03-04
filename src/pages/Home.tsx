import Navbar from "../components/navbar";
import MainLayout from "../layouts/MainLayout";
import HomeSection from "../components/home";
import Exp from "../components/exp";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/FooterLight";

export default function Home() {
    return (
        <div className="relative bg-black">
            <section className="relative z-30 bg-black h-screen overflow-hidden">
                <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
                    <div className="custom-grain-layer"></div>
                </div>
                <MainLayout>
                    <div className="flex flex-col h-screen overflow-hidden">
                        <div className="h-[10vh]">
                            <Navbar />
                        </div>
                        <div className="h-[60vh]">
                            <HomeSection />
                        </div>
                        <div className="h-[40vh]">
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
