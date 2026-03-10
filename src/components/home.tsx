import BentoGrid from "./BentoGrid";

export default function HomeSection() {
    return (
        <div className="pt-[80px] pb-[60px] h-full flex flex-col w-full gap-20">

            <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-10 md:gap-20">
                <div className="font-semibold w-full md:w-[60%] font-['Bitcount_Prop_Single'] flex flex-col text-white">
                    <h1 className="text-4xl md:text-[64px] leading-tight">Hey there👋🏼, I'm Alwin.<br className="hidden md:block"></br></h1>
                    <h1 className="text-3xl md:text-[58px] leading-tight opacity-90">UI/UX Designer creating intuitive digital products.</h1>
                </div>
                <div className="w-full md:w-[40%] h-[250px] md:h-[350px]">
                    <BentoGrid />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 md:gap-40">
                <div className="flex flex-col gap-2">
                    <p className="font-light text-[12px] md:text-[14px] text-[#c7c7c7]">📍 CURRENTLY IN</p>
                    <p className="font-medium text-[16px] md:text-[20px] text-white">Bengaluru</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-light text-[12px] md:text-[14px] text-[#c7c7c7]">💻 DESIGNING AT</p>
                    <p className="font-medium text-[16px] md:text-[20px] text-white">ITProfound Inc.</p>
                </div>
            </div>

        </div>
    );
}