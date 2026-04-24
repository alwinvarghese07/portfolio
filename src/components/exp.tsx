import { motion } from "motion/react";
import manormama from "../assets/images/malayala_manorama.png";
import itpro from "../assets/images/itpro.png";

export default function Exp() {
    return (
        <div className="flex flex-col justify-center h-full items-center w-full gap-10 md:gap-14 px-8">

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.4
                }}
                className="font-['Bitcount_Prop_Single'] font-medium text-xl md:text-[28px] text-[#c7c7c7] text-center"
            >
                <h1>Experience crafted alongside</h1>
            </motion.div>

            {/* Logos */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.2,
                            delayChildren: 0.6
                        }
                    }
                }}
                className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20"
            >

                <motion.img
                    src={manormama}
                    alt="Malayala Manorama"
                    className="w-[200px] md:w-[250px] opacity-80"
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                                ease: [0.16, 1, 0.3, 1]
                            }
                        }
                    }}
                />

                <motion.img
                    src={itpro}
                    alt="ITProfound"
                    className="w-[200px] md:w-[250px] opacity-80"
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                                ease: [0.16, 1, 0.3, 1]
                            }
                        }
                    }}
                />

            </motion.div>

        </div>
    );
}