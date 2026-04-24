import CustomCursor from "../components/CustomCursor";

export default function MainLayout({ children }: any) {
    return (
        <div className="w-full h-full relative">
            <CustomCursor />
            <div className="w-full h-full px-6 md:px-[100px] lg:px-[250px] py-[40px]">
                {children}
            </div>
        </div>
    );
}
