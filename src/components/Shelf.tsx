import React from "react";
import { motion } from "motion/react";
import pixelShelf from "../assets/images/pixel_shelf.jpg";
import f1Car from "../assets/images/f1_car.png";
import fcbLogo from "../assets/images/fcb_logo.png";
import rcbLogo from "../assets/images/rcb_logo.png";
import flStudioLogo from "../assets/images/fl_studio_logo.png";
import controllerLogo from "../assets/images/controller_logo.png";
import wweLogo from "../assets/images/wwe_logo.png";
import basketballLogo from "../assets/images/basketball_logo.png";
import djLogo from "../assets/images/dj_logo.png";

const Shelf: React.FC = () => {
    return (
        <div className="relative w-full h-full overflow-hidden transition-transform duration-500 p-0 m-0">
            <img
                src={pixelShelf}
                alt="Shelf"
                className="absolute inset-0 w-full h-full object-fill m-0 p-0 block scale-[1.12]"
                style={{ imageRendering: 'pixelated' }}
            />

            {/* Objects on Shelf */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top Left - F1 Car */}
                <motion.img
                    src={f1Car}
                    alt="F1 Car"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute bottom-[54%] left-[5%] w-[45%] object-contain drop-shadow-[0_10px_8px_rgba(0,0,0,0.5)] pointer-events-auto cursor-pointer origin-bottom"
                    whileHover={{ scale: 1.1, y: -5 }}
                    style={{ imageRendering: 'pixelated' }}
                />

                {/* Top Middle - FCB Logo */}
                <motion.img
                    src={fcbLogo}
                    alt="FC Barcelona"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute bottom-[54%] left-[55%] w-[14%] object-contain drop-shadow-[0_10px_8px_rgba(0,0,0,0.5)] pointer-events-auto cursor-pointer origin-bottom"
                    whileHover={{ scale: 1.1, y: -5, rotate: -5 }}
                    style={{ imageRendering: 'pixelated' }}
                />

                {/* Top Right - RCB Logo */}
                <motion.img
                    src={rcbLogo}
                    alt="Royal Challengers Bangalore"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute bottom-[54%] left-[75%] w-[11%] object-contain drop-shadow-[0_10px_8px_rgba(0,0,0,0.5)] pointer-events-auto cursor-pointer origin-bottom"
                    whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                    style={{ imageRendering: 'pixelated' }}
                />

                {/* Bottom Shelf Items Container */}
                <div className="absolute bottom-[10%] left-0 w-full flex justify-evenly items-end pointer-events-none px-[2%]">
                    {/* Bottom Left - FL Studio */}
                    <motion.img
                        src={flStudioLogo}
                        alt="FL Studio"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="w-[9%] object-contain drop-shadow-[0_10px_8px_rgba(0,0,0,0.5)] pointer-events-auto cursor-pointer origin-bottom"
                        whileHover={{ scale: 1.1, y: -5, rotate: -5 }}
                        style={{ imageRendering: 'pixelated' }}
                    />

                    {/* Bottom Middle - PS5 Controller */}
                    <motion.img
                        src={controllerLogo}
                        alt="PS5 Controller"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="w-[14%] object-contain drop-shadow-[0_10px_8px_rgba(0,0,0,0.5)] pointer-events-auto cursor-pointer origin-bottom"
                        whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                        style={{ imageRendering: 'pixelated' }}
                    />

                    {/* Bottom Right - WWE Logo */}
                    <motion.img
                        src={wweLogo}
                        alt="WWE Logo"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="w-[14%] object-contain drop-shadow-[0_10px_8px_rgba(0,0,0,0.5)] pointer-events-auto cursor-pointer origin-bottom"
                        whileHover={{ scale: 1.1, y: -5, rotate: -5 }}
                        style={{ imageRendering: 'pixelated' }}
                    />

                    {/* Bottom Far Right - Basketball */}
                    <motion.img
                        src={basketballLogo}
                        alt="Basketball"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="w-[12%] object-contain drop-shadow-[0_10px_8px_rgba(0,0,0,0.5)] pointer-events-auto cursor-pointer origin-bottom"
                        whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                        style={{ imageRendering: 'pixelated' }}
                    />

                    {/* Bottom Extreme Right - DJ Deck */}
                    <motion.img
                        src={djLogo}
                        alt="DJ Deck"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="w-[25%] object-contain drop-shadow-[0_10px_8px_rgba(0,0,0,0.5)] pointer-events-auto cursor-pointer origin-bottom"
                        whileHover={{ scale: 1.1, y: -5, rotate: -5 }}
                        style={{ imageRendering: 'pixelated' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Shelf;
