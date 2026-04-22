import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

export default function Navbar() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2
            }}
            className="flex flex-col justify-center items-center md:justify-end md:items-end gap-6 pt-4 md:pt-0"
        >
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.08,
                            delayChildren: 0.3
                        }
                    }
                }}
                className="flex gap-6 md:gap-10 font-medium text-lg md:text-[20px] text-white"
            >

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -10 },
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
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`
                        }
                    >
                        Home
                    </NavLink>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -10 },
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
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`
                        }
                    >
                        About
                    </NavLink>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -10 },
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
                    <a
                        href="https://drive.google.com/file/d/1_il5qfrxZyYEk4FaXB-OcMko4ve7F-vk/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-50 hover:opacity-100 transition-opacity duration-300"
                    >
                        Resume
                    </a>
                </motion.div>

            </motion.div>
        </motion.div>
    );
}