import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex justify-end items-end">
            <div className="flex gap-10 font-medium text-[20px] text-white">
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
        </div>
    );
}