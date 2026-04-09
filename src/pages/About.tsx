import Navbar from "../components/navbar";
import MainLayout from "../layouts/MainLayout";
import Footer1 from "../components/FooterDark";
import profile from "../assets/images/alwin.png";
import SpotifyCard from "../components/SpotifyCard";
import YTCard from "../components/YoutubeCard";

export default function About() {
    return (
        <div className="relative bg-black min-h-screen">
            <section className="relative z-30 bg-black overflow-hidden">
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                    <div className="custom-grain-layer"></div>
                </div>
                <MainLayout>
                    <div className="flex flex-col">
                        <div className="h-[10vh]">
                            <Navbar />
                        </div>

                        <div className="py-20 flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
                            <div className="w-full md:w-[45%]">
                                <div className="aspect-square relative rounded-[40px] overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl">
                                    <div className="absolute inset-0 flex items-center justify-center text-white/5">
                                        [Well… this should have loaded by now]
                                    </div>
                                    <img
                                        src={profile}
                                        alt="Alwin Varghese Saji"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex flex-col gap-8">
                                <div>
                                    <span className="text-sm font-bold text-[#A6A6A6] font-['Bitcount_Prop_Single'] text-[64px] leading-[100%] tracking-[1px]">
                                        A bit about me
                                    </span>
                                </div>

                                <div className="flex flex-col gap-6 text-[18px] text-white/70 font-['Inter'] leading-relaxed font-light">
                                    <p>
                                        I'm Alwin Varghese Saji, a UI/UX designer from India and a Computer Science undergrad, focused on designing clear, practical digital experiences.
                                    </p>
                                    <p>
                                        I've previously interned at Malayala Manorama, one of India's largest media organizations, and I'm currently working at ITProfound, where I design end-to-end experiences for travel and hospitality products.
                                    </p>
                                    <p>
                                        Alongside design, I produce electronic music under the name Alweece. Music has been a constant for me and gives me a different creative outlet outside of screens and interfaces.
                                    </p>
                                    <p>
                                        When I'm not working, you'll probably find me producing music, watching football, F1, WWE, cricket or tweaking my Spotify playlists.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Outside of design section */}
                        <div className="py-20 flex flex-col items-center">
                            <div className="mb-[60px] ">
                                <span className="text-sm font-bold text-[#A6A6A6] font-['Bitcount_Prop_Single'] text-[64px] tracking-[1px]">
                                    Outside of design
                                </span>
                            </div>

                            <div className="flex flex-row gap-10 justify-center items-center">
                                <SpotifyCard />
                                <YTCard />
                            </div>
                        </div>
                        <div>
                            <Footer1 />
                        </div>
                    </div>
                </MainLayout>
            </section>
        </div>
    );
}
