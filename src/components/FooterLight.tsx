import mailIcon from "../assets/images/mail.png";
import linkedinIcon from "../assets/images/linkedin.png";
import xIcon from "../assets/images/insta.png";

export default function Footer() {
    return (
        <footer className="w-full mt-20 pt-10 border-t border-[#D0D0D0]">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10 mt-10">
                    {/* Left side */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[32px] font-bold text-black font-['Inter'] leading-tight">
                            Glad you made it this far.
                        </h2>
                        <p className="text-[18px] text-black/50 font-['Inter']">
                            Hope something here sparked an idea or at least left you a little curious.
                        </p>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right w-full md:w-auto">
                        <span className="text-[18px] text-black/50 font-['Inter']">
                            Let's keep the conversation going.
                        </span>
                        <div className="flex gap-6 items-center">
                            {/* Add your icon paths here */}
                            <a
                                target="_blank"
                                href="mailto:alwinvarghese229@gmail.com" className="w-10 h-10 flex items-center justify-center transition-transform hover:scale-110">
                                <img src={mailIcon} alt="Mail" className="w-10 h-10" />
                            </a>
                            <a
                                target="_blank"
                                href="https://linkedin.com/in/alwinvarghesesaji" className="w-10 h-10 flex items-center justify-center transition-transform hover:scale-110">
                                <img src={linkedinIcon} alt="LinkedIn" className="w-9 h-9" />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.instagram.com/alweece/" className="w-10 h-10 flex items-center justify-center transition-transform hover:scale-110">
                                <img src={xIcon} alt="X" className="w-10 h-10" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="w-full mt-24 flex justify-center">
                    <span className="text-[14px] text-black/30 font-medium font-['Inter']">
                        © Alwin Varghese Saji, 2026
                    </span>
                </div>
            </div>
        </footer>
    );
}
