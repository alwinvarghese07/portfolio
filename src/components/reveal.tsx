import { motion } from "framer-motion";

export default function Reveal({ children }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}