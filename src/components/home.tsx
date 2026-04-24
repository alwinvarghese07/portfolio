import { motion } from "motion/react";

export default function HomeSection() {
    return (
        <div className="pt-4 md:pt-[80px] flex flex-col w-full gap-8 md:gap-20 px-4">

            <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-10 md:gap-20">
                <div className="font-semibold w-full font-['Bitcount_Prop_Single'] flex flex-col gap-4 md:gap-6 text-white">

                    {/* HERO LINE 1 */}
                    <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.1
                        }}
                        className="text-4xl sm:text-3xl md:text-[68px] lg:text-[76px] leading-[1.1] tracking-tight bg-clip-text"
                    >
                        Hey there
                        <motion.span
                            style={{ display: "inline-block", originX: 0.7, originY: 0.7 }}
                            initial={{ rotate: 0 }}
                            animate={{ rotate: [0, 10, -6, 8, 0] }}
                            transition={{
                                duration: 1,
                                ease: [0.4, 0, 0.2, 1],
                                delay: 0.8,
                                repeat: Infinity,
                                repeatDelay: 3
                            }}
                        >
                            👋🏼
                        </motion.span>
                        , <br className="md:hidden" /> I'm Alwin Varghese.
                    </motion.div>

                    {/* HERO LINE 2 */}
                    <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1.4,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.25
                        }}
                        className="text-2xl md:text-3xl sm:text-4xl md:text-[54px] lg:text-[62px] leading-[1.2] text-[#d4d4d4] opacity-90"
                    >
                        Designing digital products that just make sense..
                    </motion.div>

                </div>
            </div>

            <div className="flex flex-col gap-10 md:gap-40">
                <div className="flex flex-col md:flex-row gap-10 md:gap-40">
                    {/* LOCATION */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.6,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="flex flex-col gap-2 md:gap-3"
                    >
                        <p className="font-medium text-[15px] md:text-[15px] text-[#a1a1a1] tracking-[0.10 rem]">
                            📍 CURRENTLY IN
                        </p>
                        <p className="font-semibold text-[16px] md:text-[20px] text-white/90">
                            Bengaluru, IN
                        </p>
                    </motion.div>

                    {/* COMPANY */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.75,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="flex flex-col gap-2 md:gap-3"
                    >
                        <p className="font-medium text-[15px] md:text-[15px] text-[#a1a1a1] tracking-[0.10 rem]">
                            💻 DESIGNING AT
                        </p>
                        <p className="font-semibold text-[16px] md:text-[20px] text-white/90">
                            ITProfound Inc.
                        </p>
                    </motion.div>
                </div>
            </div>

        </div>
    );
}