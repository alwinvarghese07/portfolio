import CustomCursor from "../components/CustomCursor";

export default function MainLayout({ children }: any) {
    return (
        <div className="w-full relative">
            <CustomCursor />
            <div className="w-full px-[250px] py-[40px]">
                {children}
            </div>
        </div>
    );
}
