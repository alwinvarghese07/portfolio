import Navbar from "../components/navbar";
import MainLayout from "../layouts/MainLayout";
import HomeSection from "../components/home";
import Exp from "../components/exp";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/FooterDark";
import { motion } from "motion/react";

export default function Home() {
    return (
        <div className="relative bg-black">
            <section className="relative z-30 bg-black h-dvh md:h-screen overflow-hidden shadow-[0_15px_40px_-5px_rgba(255,255,255,0.15)] rounded-b-[40px] md:rounded-b-[20px]">
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                    <div className="custom-grain-layer"></div>
                </div>
                <MainLayout>
                    <div className="flex flex-col h-full relative">
                        <div className="shrink-0">
                            <Navbar />
                        </div>

                        <div className="flex-1 flex flex-col md:block">
                            <div className="h-full md:h-[60vh] flex items-center">
                                <HomeSection />
                            </div>

                            <div className="grow md:hidden"></div>

                            <div className="h-auto md:h-[40vh] py-10 md:py-0 pb-12 md:pb-0">
                                <Exp />
                            </div>
                        </div>

                        {/* Premium Subtle Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8, duration: 1.5, ease: "easeOut" }}
                            className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
                        >
                            <motion.div
                                animate={{
                                    y: [0, 8, 0],
                                    filter: ["blur(1px)", "blur(0px)", "blur(1px)"]
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="flex justify-center items-center text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </motion.div>
                        </motion.div>
                    </div>
                </MainLayout>
            </section>

            <div className="relative z-20 -mt-[100vh]">
                <section className="sticky top-0 min-h-screen bg-black w-full py-20">
                    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                        <div className="custom-grain-layer"></div>
                    </div>
                    <div className="flex flex-col items-center relative z-10 w-full">
                        <ProjectsSection />
                        <Footer />
                    </div>
                </section>

                {/* Spacer to allow the sticky section to remain fixed for exactly 100vh before scrolling */}
                <div className="h-screen bg-transparent pointer-events-none" />
            </div>
        </div>
    );
}
