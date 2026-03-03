import Navbar from "../components/navbar";
import MainLayout from "../layouts/MainLayout";
import HomeSection from "../components/home";
import Exp from "../components/exp";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
    return (
        <div className="relative bg-black">
            <div className="fixed inset-0 pointer-events-none z-50">
                <div className="custom-grain-layer"></div>
                <div className="image opacity-10"></div>
            </div>

            <section className="relative z-30 bg-black h-screen">
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
                <div className="flex flex-col items-center px-[120px]">
                    <ProjectsSection />
                </div>
            </section>

            <div className="h-[200vh] bg-transparent pointer-events-none" />
        </div>
    );
}
