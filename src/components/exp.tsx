import manormama from "../assets/images/malayala_manorama.png";
import itpro from "../assets/images/itpro.png";

export default function Exp() {
    return (
        <div className="flex flex-col justify-center h-full items-center w-full gap-8">

            <div className="font-['Inter'] font-medium text-[32px]">
                <h1>Experience crafted alongside</h1>
            </div>
            <div className="flex flex-row justify-between gap-10">
                <img src={manormama} alt="manormama" className="w-[300px]" />
                <img src={itpro} alt="itpro" className="w-[300px]" />
            </div>

        </div>

    );
}