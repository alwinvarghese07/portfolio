import manormama from "../assets/images/malayala_manorama.png";
import itpro from "../assets/images/itpro.png";

export default function Exp() {
    return (
        <div className="flex flex-col justify-center h-full items-center w-full gap-8">

            <div className="font-['Inter'] font-medium text-xl md:text-[28px] text-[#c7c7c7] text-center">
                <h1>Experience crafted alongside</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
                <img src={manormama} alt="manormama" className="w-[180px] md:w-[250px]" />
                <img src={itpro} alt="itpro" className="w-[180px] md:w-[250px]" />
            </div>

        </div>

    );
}