import BentoGrid from "./BentoGrid";

export default function HomeSection() {
    return (
        <div className="pt-[160px] pb-[60px] h-full flex flex-col w-full gap-20">

            <div className="flex flex-col md:flex-row w-full justify-between items-center gap-10">
                <div className="font-semibold w-[60%] font-['Bitcount_Prop_Single'] flex flex-col text-white">
                    <h1 className="text-[64px]">Hey there👋🏼, I'm Alwin.<br></br></h1>
                    <h1 className="text-[58px]">UI/UX Designer creating intuitive digital products.</h1>
                </div>
                <div className="w-[40%] h-[350px]">
                    <BentoGrid />
                </div>
            </div>
            <div className="flex flex-row gap-40">
                <div className="flex flex-col gap-2">
                    <p className="font-light text-[14px]">CURRENTLY IN</p>
                    <p className="font-medium text-[20px] text-white">Bengaluru</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-light text-[14px]">DESIGNING AT</p>
                    <p className="font-medium text-[20px] text-white">ITProfound Inc.</p>
                </div>
            </div>

        </div>
    );
}