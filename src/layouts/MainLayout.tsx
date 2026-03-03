export default function MainLayout({ children }: any) {
    return (
        <div className="w-full relative">
            <div className="w-full px-[120px] py-[40px]">
                {children}
            </div>
        </div>
    );
}
