import { lazy, Suspense } from "react";
import { motion } from "motion/react";
import Navbar from "../components/navbar";
import MainLayout from "../layouts/MainLayout";
import Footer1 from "../components/FooterDark";
import AboutLayout from "../components/BentoGrid";
import CustomCursor from "../components/CustomCursor";

const SpotifyCard = lazy(() => import("../components/SpotifyCard"));
const YTCard = lazy(() => import("../components/YoutubeCard"));

export default function About() {
    return (
        <div className="relative bg-black min-h-screen">
            <CustomCursor />
            <section className="relative z-30 bg-black overflow-hidden">

                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                    <div className="custom-grain-layer"></div>
                </div>

                <MainLayout>
                    <div className="flex flex-col px-4 md:px-8 max-w-7xl mx-auto">

                        {/* NAVBAR */}
                        <div className="h-[10vh]">
                            <Navbar />
                        </div>

                        <div>
                            <AboutLayout />
                        </div>

                        {/* HERO SECTION */}
                        <div className="pt-20 flex flex-col gap-8">

                            {/* TEXT */}
                            <div className="w-full flex flex-col gap-8">

                                {/* TITLE */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 1.2,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                >
                                    <span className="font-bold text-[#A6A6A6] font-['Bitcount_Prop_Single'] text-4xl md:text-[64px] leading-[100%] tracking-[1px]">
                                        A bit about me
                                    </span>
                                </motion.div>

                                {/* PARAGRAPHS */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    variants={{
                                        hidden: {},
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.08,
                                                delayChildren: 0.1
                                            }
                                        }
                                    }}
                                    className="flex flex-col gap-6 text-md md:text-lg text-white/70 font-['Inter'] leading-relaxed font-light"
                                >
                                    {[
                                        "I'm Alwin Varghese Saji, a UI/UX designer from India and a Computer Science undergrad, focused on designing clear, practical digital experiences.",
                                        "I've previously interned at Malayala Manorama, one of India's largest media organizations, and I'm currently working at ITProfound, where I design end-to-end experiences for travel and hospitality products.",
                                        "Alongside design, I produce electronic music under the name Alweece. Music has been a constant for me and gives me a different creative outlet outside of screens and interfaces.",
                                        "When I'm not working, you'll probably find me producing music, watching football, F1, WWE, cricket or tweaking my Spotify playlists."
                                    ].map((text, i) => (
                                        <motion.p
                                            key={i}
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: {
                                                        duration: 0.8,
                                                        ease: [0.16, 1, 0.3, 1]
                                                    }
                                                }
                                            }}
                                        >
                                            {text}
                                        </motion.p>
                                    ))}
                                </motion.div>

                            </div>
                        </div>

                        {/* OUTSIDE DESIGN */}
                        <div className="hidden md:flex py-20 flex-col items-center">

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="mb-[60px]"
                            >
                                <span className="font-bold text-[#A6A6A6] font-['Bitcount_Prop_Single'] text-4xl md:text-[64px] tracking-[1px]">
                                    Outside of design
                                </span>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.15,
                                            delayChildren: 0.1
                                        }
                                    }
                                }}
                                className="flex flex-col md:flex-row gap-10 justify-center items-center"
                            >
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 40 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 1,
                                                ease: [0.16, 1, 0.3, 1]
                                            }
                                        }
                                    }}
                                    className="w-full"
                                >
                                    <Suspense fallback={<div className="h-[250px] md:h-full w-full rounded-2xl bg-white/5" />}>
                                        <SpotifyCard />
                                    </Suspense>
                                </motion.div>

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 40 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 1,
                                                ease: [0.16, 1, 0.3, 1]
                                            }
                                        }
                                    }}
                                    className="w-full"
                                >
                                    <Suspense fallback={<div className="h-[250px] md:h-full w-full rounded-2xl bg-white/5" />}>
                                        <YTCard />
                                    </Suspense>
                                </motion.div>
                            </motion.div>

                        </div>

                        <div>
                            <Footer1 />
                        </div>

                    </div>
                </MainLayout>
            </section>
        </div>
    );
}