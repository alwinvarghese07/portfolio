import { motion } from "motion/react";
import Navbar from "../components/navbar";
import MainLayout from "../layouts/MainLayout";
import Footer1 from "../components/FooterDark";
import profile from "../assets/images/alwin.png";
import SpotifyCard from "../components/SpotifyCard";
import YTCard from "../components/YoutubeCard";
import AboutLayout from "../components/BentoGrid";

export default function About() {
    return (
        <div className="relative bg-black min-h-screen">
            <section className="relative z-30 bg-black overflow-hidden">

                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                    <div className="custom-grain-layer"></div>
                </div>

                <MainLayout>
                    <div className="flex flex-col px-4">

                        {/* NAVBAR */}
                        <div className="h-[10vh]">
                            <Navbar />
                        </div>

                        <div>
                            <AboutLayout />
                        </div>

                        {/* HERO SECTION */}
                        <div className="md:pt-20 flex flex-col md:flex-row gap-12 lg:gap-20 items-start">

                            {/* IMAGE */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.16, 1, 0.3, 1],
                                    delay: 0.2
                                }}
                                className="w-full md:w-[45%]"
                            >
                                <div className="aspect-square relative rounded-[40px] overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl">
                                    <div className="absolute inset-0 flex items-center justify-center text-white/5">
                                        [Well… this should have loaded by now]
                                    </div>
                                    <img
                                        src={profile}
                                        alt="Alwin Varghese Saji"
                                    />
                                </div>
                            </motion.div>

                            {/* TEXT */}
                            <div className="w-full flex flex-col gap-8">

                                {/* TITLE */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 1.2,
                                        ease: [0.16, 1, 0.3, 1],
                                        delay: 0.35
                                    }}
                                >
                                    <span className="font-bold text-[#A6A6A6] font-['Bitcount_Prop_Single'] text-4xl md:text-[64px] leading-[100%] tracking-[1px]">
                                        A bit about me
                                    </span>
                                </motion.div>

                                {/* PARAGRAPHS */}
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        hidden: {},
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.08,
                                                delayChildren: 0.5
                                            }
                                        }
                                    }}
                                    className="flex flex-col gap-6 text-sm md:text-lg text-white/70 font-['Inter'] leading-relaxed font-light"
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
                        <div className="py-20 flex flex-col items-center">

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.16, 1, 0.3, 1],
                                    delay: 0.2
                                }}
                                className="mb-[60px]"
                            >
                                <span className="font-bold text-[#A6A6A6] font-['Bitcount_Prop_Single'] text-4xl md:text-[64px] tracking-[1px]">
                                    Outside of design
                                </span>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.15,
                                            delayChildren: 0.3
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
                                    <SpotifyCard />
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
                                    <YTCard />
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