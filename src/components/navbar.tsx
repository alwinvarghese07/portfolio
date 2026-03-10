import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex flex-col justify-center items-center md:justify-end md:items-end gap-6 pt-4 md:pt-0">
            <div className="flex gap-6 md:gap-10 font-medium text-lg md:text-[20px] text-white">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`
                    }
                >
                    About
                </NavLink>
                <a
                    href="https://drive.google.com/file/d/1_il5qfrxZyYEk4FaXB-OcMko4ve7F-vk/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-50 hover:opacity-100 transition-opacity duration-300"
                >
                    Resume
                </a>
            </div>
            {/* <div className="border-b border-[#5b5b5b] w-full"></div> */}
        </div>
    );
}