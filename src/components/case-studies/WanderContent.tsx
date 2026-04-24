import moodboard from "../../assets/images/moodboard.png"
import userFlow from "../../assets/images/userflows.png"
import lowFidelity from "../../assets/images/lowfidelity.png"
import wireframes from "../../assets/images/wireframes.png"
import highFidelity from "../../assets/images/highfidelity.png"
import emptystate from "../../assets/images/emptystate.png"
import keyScreens from "../../assets/images/keyscreens.png"
import persona1 from "../../assets/images/persona1.png"
import persona2 from "../../assets/images/persona2.png"
import alltrails from "../../assets/images/trails_logo.png"
import gaiagps from "../../assets/images/gaia_logo.png"
import figma from "../../assets/images/figma_logo.png"
import miro from "../../assets/images/miro_logo.png"
import wanderLogo from "../../assets/images/wander_logo.png"
import reddit from "../../assets/images/reddit.png"
import Reveal from "../reveal";

export default function WanderContent() {
    return (
        <div className="w-full flex flex-col gap-14 md:gap-24 font-['Inter'] text-zinc-200">
            {/* OVERVIEW */}
            <Reveal>
                <div className="flex flex-col gap-8 md:gap-10">
                    <div className="flex items-center gap-4 md:mb-4">
                        <h3 className="text-sm font-semibold tracking-widest text-[#A6A6A6] uppercase">Overview</h3>
                        <div className="h-px bg-zinc-800 grow"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <div className="flex flex-col gap-8 md:gap-14 bg-[#1c1c1c] p-8 md:p-14 rounded-4xl border border-zinc-800/30">
                            <div className="flex flex-col gap-4">
                                <h4 className="text-2xl font-bold font-['Bitcount_Prop_Single'] text-[#FFFFFF]">Project Description</h4>
                                <p className="text-[#D4D4D4] leading-relaxed text-md md:text-lg">
                                    Many outdoor enthusiasts struggle to find reliable adventure spots, plan trips efficiently, and connect with like-minded explorers. I designed Wander to simplify this process, offering seamless discovery, trip management, and social connectivity in one intuitive app.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="text-2xl font-bold font-['Bitcount_Prop_Single'] text-[#FFFFFF]">Goal</h4>
                                <p className="text-[#D4D4D4] leading-relaxed text-md md:text-lg">
                                    The goal of Wander is to make outdoor adventure planning effortless by offering personalized recommendations and intuitive trip management. It connects adventurers, helping them explore, plan, and share experiences seamlessly.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8 md:gap-10 md:pl-8 p-8 md:p-14 bg-[#1c1c1c] rounded-4xl border border-zinc-800/30">
                            <div className="flex flex-col gap-4">
                                <h4 className="text-xl font-bold font-['Bitcount_Prop_Single'] text-[#FFFFFF]">Timeline</h4>
                                <p className="text-[#D4D4D4] text-md md:text-lg">1 Month</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-xl font-bold font-['Bitcount_Prop_Single'] text-[#FFFFFF]">Responsibilities</h4>
                                    <ul className="flex flex-col gap-1.5 text-[#D4D4D4] text-md md:text-lg">
                                        <li>UX Research</li>
                                        <li>Sketching</li>
                                        <li>UI/UX Design</li>
                                        <li>Prototyping</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-xl font-bold font-['Bitcount_Prop_Single'] text-[#FFFFFF]">Tools</h4>
                                    <ul className="flex flex-col gap-4 text-[#D4D4D4] text-md md:text-lg">
                                        <div className="flex items-center gap-4">
                                            <img src={figma} alt="Figma" className="w-6" />
                                            <li>Figma</li>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <img src={miro} alt="Miro" className="w-6" />
                                            <li>Miro</li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-6 pt-10 w-full md:w-[70%] mx-auto text-center">
                        <div className="flex justify-center items-center gap-4 flex-wrap">
                            <h2 className="text-2xl md:text-3xl font-bold font-['Bitcount_Prop_Single']">What is </h2>
                            <div className="w-40">
                                <img src={wanderLogo} alt="Wander Logo" className="w-full h-full object-fill" />
                            </div>
                        </div>
                        <p className="text-[#D4D4D4] text-start leading-relaxed text-md md:text-lg">
                            Wander is your go-to app for discovering and planning outdoor adventures effortlessly. Whether it's hiking, camping, or exploring hidden trails, Wander helps you find the best spots with personalized recommendations. Connect with fellow adventurers, organize trips, and make every journey unforgettable.
                        </p>
                    </div>
                </div>
            </Reveal>

            {/* RESEARCH */}
            <Reveal>
                <div className="flex flex-col gap-8 md:gap-10">
                    <div className="flex items-center gap-4 md:mb-4">
                        <h3 className="text-sm font-semibold tracking-widest text-[#A6A6A6] uppercase">Research</h3>
                        <div className="h-px bg-zinc-800 grow"></div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-3xl font-['Bitcount_Prop_Single'] text-[#FFFFFF]">Observing the demand</h4>
                        <p className="text-[#D4D4D4] leading-relaxed text-md md:text-lg">
                            Across online forums, social media groups, and adventure communities, people frequently asked for an app that helps them discover new outdoor activities, plan trips effortlessly, and connect with fellow adventurers. Many shared frustrations about scattered information, lack of reliable recommendations, and difficulty coordinating trips with friends.
                        </p>
                    </div>

                    <div className="w-full rounded-2xl overflow-hidden border border-zinc-800/50">
                        <img src={reddit} alt="Reddit" className="w-full h-full object-cover" />
                    </div>
                </div>
            </Reveal>

            {/* MARKET COMPARISON */}
            <Reveal>
                <div className="flex flex-col gap-8 md:gap-10">
                    <div className="flex items-center gap-4 md:mb-4">
                        <h3 className="text-sm font-semibold tracking-widest text-[#A6A6A6] uppercase">Market Analysis</h3>
                        <div className="h-px bg-zinc-800 grow"></div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-3xl font-['Bitcount_Prop_Single'] text-[#FFFFFF]">Competitive Landscape</h4>
                        <p className="text-[#D4D4D4] leading-relaxed text-md md:text-lg">
                            To better understand the landscape, we analyzed existing apps that cater to outdoor adventurers. Here's how they compare.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 md:gap-8">
                        {/* AllTrails */}
                        <div className="flex flex-col md:flex-row border border-zinc-800/30 rounded-4xl overflow-hidden bg-[#1c1c1c] shadow-md">
                            <div className="md:w-1/4 pt-8 px-8 flex items-center justify-start md:justify-center border-b md:border-b-0 md:border-r border-zinc-800/30">
                                <div className="flex justify-center items-center gap-4">
                                    <div className="w-12 h-12">
                                        <img src={alltrails} alt="AllTrails" className="w-full h-full rounded-lg" />
                                    </div>
                                    <span className="font-bold text-xl text-white tracking-wide">AllTrails</span>
                                </div>
                            </div>
                            <div className="md:w-3/4 p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                                <div className="flex flex-col gap-4">
                                    <h5 className="font-bold text-lg text-[#FFFFFF]">Key Features</h5>
                                    <ul className="list-disc pl-5 text-[#D4D4D4] text-md md:text-lg space-y-2.5 marker:text-zinc-500">
                                        <li>Huge trail database with reviews.</li>
                                        <li>GPS tracking & offline maps.</li>
                                        <li>Filters for difficulty, length, elevation.</li>
                                        <li>User-uploaded trail photos & reviews.</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h5 className="font-bold text-lg text-[#FFFFFF]">Drawbacks</h5>
                                    <ul className="list-disc pl-5 text-[#D4D4D4] text-md md:text-lg space-y-2.5 marker:text-zinc-500">
                                        <li>Lacks collaborative trip-planning features.</li>
                                        <li>Limited personalization for adventure recommendations.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Gaia GPS */}
                        <div className="flex flex-col md:flex-row border border-zinc-800/30 rounded-4xl overflow-hidden bg-[#1c1c1c] shadow-md">
                            <div className="md:w-1/4 pt-8 px-8 flex items-center justify-start md:justify-center border-b md:border-b-0 md:border-r border-zinc-800/30">
                                <div className="flex justify-center items-center gap-4">
                                    <div className="w-12 h-12">
                                        <img src={gaiagps} alt="Gaia GPS" className="w-full h-full object-fill rounded-lg" />
                                    </div>
                                    <span className="font-bold text-xl text-white tracking-wide">Gaia GPS</span>
                                </div>
                            </div>
                            <div className="md:w-3/4 p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                                <div className="flex flex-col gap-4">
                                    <h5 className="font-bold text-lg text-[#FFFFFF]">Key Features</h5>
                                    <ul className="list-disc pl-5 text-[#D4D4D4] text-md md:text-lg space-y-2.5 marker:text-zinc-500">
                                        <li>Detailed topo & satellite maps.</li>
                                        <li>Custom route planning.</li>
                                        <li>Offline maps for remote trips.</li>
                                        <li>Works with CarPlay & Android Auto.</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h5 className="font-bold text-lg text-[#FFFFFF]">Drawbacks</h5>
                                    <ul className="list-disc pl-5 text-[#D4D4D4] text-md md:text-lg space-y-2.5 marker:text-zinc-500">
                                        <li>Steep learning curve for new users.</li>
                                        <li>Interface feels cluttered with advanced tools.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* INSIGHTS */}
            <Reveal>
                <div className="flex flex-col gap-8 md:gap-10">
                    <div className="flex items-center gap-4 md:mb-4">
                        <h3 className="text-sm font-semibold tracking-widest text-[#A6A6A6] uppercase">Insights</h3>
                        <div className="h-px bg-zinc-800 grow"></div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-3xl font-['Bitcount_Prop_Single'] text-[#FFFFFF]">User Persona</h4>
                        <p className="text-[#D4D4D4] leading-relaxed text-md md:text-lg">
                            To better understand our ideal user, I created user personas based on insights from user research, surveys, competitor analysis, and key pain points. These personas help represent the needs, behaviors, and frustrations of real users, ensuring that every design decision aligns with their expectations and enhances their outdoor adventure experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-12 md:gap-20 mt-8">
                        {/* Persona 1 */}
                        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start bg-[#1c1c1c] p-4 md:p-8 rounded-4xl border border-zinc-800/30">
                            <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] shrink-0 rounded-full bg-zinc-800/80 overflow-hidden shadow-2xl border-4 border-zinc-800/50">
                                <img src={persona1} alt="Persona 1" className="w-full h-full object-fill" />
                            </div>
                            <div className="flex flex-col gap-6 w-full">
                                <div>
                                    <h4 className="text-[28px] md:text-[32px] font-['Bitcount_Prop_Single'] text-white tracking-wide">Emily Carter, 27</h4>
                                    <div className="flex flex-col gap-2 mt-3 text-md md:text-lg text-[#D4D4D4]">
                                        <p className="flex items-center gap-2">
                                            <span className="text-lg">💼</span> <span className="font-medium text-white">Marketing Specialist</span>
                                            <span className="text-zinc-600 mx-2">|</span>
                                            <span className="text-lg">📍</span> <span className="font-medium text-white">Denver, CO</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span className="text-lg">🤍</span> <span className="font-medium text-white">Interests: Hiking, backpacking, solo adventures</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-md md:text-lg text-[#D4D4D4] leading-relaxed italic">
                                    "A 27-year-old marketing professional who loves weekend hikes but struggles with trip planning and finding companions. She needs a simple way to organize adventures and meet fellow explorers."
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                    <div className="flex flex-col gap-3">
                                        <h5 className="font-bold text-white tracking-wide uppercase text-xs">Needs</h5>
                                        <ul className="list-disc pl-5 text-[#D4D4D4] text-md md:text-lg space-y-2 marker:text-zinc-500">
                                            <li>Find nearby spots</li>
                                            <li>Discover new getaways</li>
                                            <li>Plan trips easily</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h5 className="font-bold text-white tracking-wide uppercase text-xs">Challenges</h5>
                                        <ul className="list-disc pl-5 text-[#D4D4D4] text-md md:text-lg space-y-2 marker:text-zinc-500">
                                            <li>Hard to find good hiking spots</li>
                                            <li>Trip planning feels complicated</li>
                                            <li>Wants to meet fellow adventurers</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Persona 2 */}
                        <div className="flex flex-col md:flex-row-reverse gap-10 items-center md:items-start bg-[#1c1c1c] p-8 md:p-14 rounded-4xl border border-zinc-800/30">
                            <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] shrink-0 rounded-full bg-zinc-800/80 overflow-hidden shadow-2xl border-4 border-zinc-800/50">
                                <img src={persona2} alt="Persona 2" className="w-full h-full object-fill" />
                            </div>
                            <div className="flex flex-col gap-6 w-full">
                                <div>
                                    <h4 className="text-[28px] md:text-[32px] font-['Bitcount_Prop_Single'] text-white tracking-wide">Jake Miller, 34</h4>
                                    <div className="flex flex-col gap-2 mt-3 text-md md:text-lg text-[#D4D4D4]">
                                        <p className="flex items-center gap-2">
                                            <span className="text-lg">💼</span> <span className="font-medium text-white">Software Engineer</span>
                                            <span className="text-zinc-600 mx-2">|</span>
                                            <span className="text-lg">📍</span> <span className="font-medium text-white">Seattle, WA</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span className="text-lg">🤍</span> <span className="font-medium text-white">Interests: Group camping, road trips, kayaking</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-md md:text-lg text-[#D4D4D4] leading-relaxed italic">
                                    "A 34-year-old software engineer who enjoys group trips but struggles with planning. He needs an easy way to organize and track adventures."
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                    <div className="flex flex-col gap-3">
                                        <h5 className="font-bold text-white tracking-wide uppercase text-xs">Needs</h5>
                                        <ul className="list-disc pl-5 text-[#D4D4D4] text-md md:text-lg space-y-2 marker:text-zinc-500">
                                            <li>Plan trips effortlessly with friends</li>
                                            <li>Keep all trip details organized</li>
                                            <li>Find adventure spots for your group</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h5 className="font-bold text-white tracking-wide uppercase text-xs">Challenges</h5>
                                        <ul className="list-disc pl-5 text-[#D4D4D4] text-md md:text-lg space-y-2 marker:text-zinc-500">
                                            <li>Planning with friends is messy</li>
                                            <li>Hard to find spots for all skill levels</li>
                                            <li>No way to track past trips</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* IDEATION & DESIGN */}
            <div className="flex flex-col gap-14 md:gap-24">
                <Reveal>
                    <div className="flex flex-col gap-8 md:gap-10">
                        <div className="flex items-center gap-4 md:mb-4">
                            <h3 className="text-sm font-semibold tracking-widest text-[#A6A6A6] uppercase">Ideation & Design</h3>
                            <div className="h-px bg-zinc-800 grow"></div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h4 className="text-3xl font-['Bitcount_Prop_Single'] text-[#FFFFFF]">Moodboard</h4>
                            <div className="rounded-2xl overflow-hidden border border-zinc-800/50">
                                <img src={moodboard} alt="Moodboard" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* USER FLOW */}
                <Reveal>
                    <div className="flex flex-col gap-8">
                        <h4 className="text-3xl font-['Bitcount_Prop_Single'] text-[#FFFFFF]">User Flow</h4>
                        <div className="rounded-2xl overflow-hidden border border-zinc-800/50 bg-[#1c1c1c]/30">
                            <img src={userFlow} alt="User Flow" className="w-full h-full object-contain" />
                        </div>
                    </div>
                </Reveal>

                {/* LOW-FIDELITY */}
                <Reveal>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-3xl font-['Bitcount_Prop_Single'] text-[#FFFFFF]">Low-Fidelity</h4>
                        <p className="text-[#D4D4D4] leading-relaxed text-md md:text-lg max-w-full">
                            These low-fidelity sketches helped explore initial ideas and layouts, allowing for quick iterations before moving to higher fidelity designs. They served as a foundation for refining the user flow and interface.
                        </p>
                        <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-14 mt-4">
                            <h4 className="md:w-1/3 text-3xl md:text-5xl font-['Bitcount_Prop_Single'] text-[#FFFFFF] leading-tight">Sketches</h4>
                            <div className="md:w-2/3 rounded-2xl overflow-hidden border border-zinc-700/50">
                                <img src={lowFidelity} alt="Low Fidelity" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* WIREFRAMES */}
                <Reveal>
                    <div className="flex flex-col-reverse items-start md:flex-row md:items-center gap-4 md:gap-14 mt-4">
                        <div className="md:w-3/4 rounded-2xl overflow-hidden border border-zinc-800/50">
                            <img src={wireframes} alt="Wireframes" className="w-full h-full object-cover" />
                        </div>
                        <div className="md:w-1/4 flex justify-start">
                            <h4 className="text-4xl md:text-5xl font-['Bitcount_Prop_Single'] text-[#FFFFFF]">Wireframes</h4>
                        </div>
                    </div>
                </Reveal>

                {/* HIGH-FIDELITY */}
                <Reveal>
                    <div className="flex flex-col gap-8 md:gap-10">
                        <h4 className="text-3xl font-['Bitcount_Prop_Single'] text-[#FFFFFF]">High-Fidelity</h4>
                        <p className="text-[#D4D4D4] leading-relaxed text-md md:text-lg max-w-full">
                            As the design took shape, I focused on crafting a seamless and engaging experience that balances aesthetics with functionality. Taking subtle inspiration from apps like AllTrails and Gaia GPS, I refined the interface to enhance navigation and trip planning, ensuring it meets the needs of outdoor adventurers.
                        </p>
                        <div className="rounded-2xl overflow-hidden border border-zinc-800/50">
                            <img src={highFidelity} alt="High Fidelity" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </Reveal>

                {/* EMPTY STATE */}
                <Reveal>
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                        <div className="md:w-1/2 flex flex-col gap-6">
                            <h4 className="text-3xl font-['Bitcount_Prop_Single'] text-[#FFFFFF]">Empty State</h4>
                            <p className="text-[#D4D4D4] leading-relaxed text-md md:text-lg">
                                Empty states play a crucial role in guiding users when there's no data to display. I designed them to be informative yet visually engaging, ensuring users understand what to do next.
                            </p>
                        </div>
                        <div className="md:w-1/2 rounded-4xl overflow-hidden border border-zinc-800/50">
                            <img src={emptystate} alt="Empty State" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* KEY SCREENS */}
            <Reveal>
                <div className="flex flex-col gap-8 md:gap-10">
                    <div className="flex items-center gap-4 md:mb-4">
                        <h3 className="text-sm font-semibold tracking-widest text-[#A6A6A6] uppercase">Key Screens</h3>
                        <div className="h-px bg-zinc-800 grow"></div>
                    </div>
                    <p className="text-[#D4D4D4] leading-relaxed text-md md:text-lg">
                        Here are some of the most essential screens from the app, showcasing the core user experience and design choices. Each screen is crafted to ensure a seamless and intuitive journey for adventure seekers.
                    </p>
                    <div className="rounded-2xl overflow-hidden border border-zinc-800/50">
                        <img src={keyScreens} alt="Key Screens" className="w-full h-full object-cover" />
                    </div>
                </div>
            </Reveal>

            {/* CONCLUSION */}
            <Reveal>
                <div className="flex flex-col gap-8 md:gap-10">
                    <div className="flex items-center gap-4 md:mb-4">
                        <h3 className="text-sm font-semibold tracking-widest text-[#A6A6A6] uppercase">Conclusion</h3>
                        <div className="h-px bg-zinc-800 grow"></div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 items-start bg-[#1c1c1c] p-8 md:p-14 rounded-4xl border border-zinc-800/30">
                        <div className="md:w-1/2 flex flex-col gap-6">
                            <h4 className="text-3xl font-['Bitcount_Prop_Single'] text-[#FFFFFF]">Wrapping It Up</h4>
                            <p className="text-[#D4D4D4] leading-relaxed text-md md:text-lg">
                                Building this app wasn't just about making trip planning easier; it was about understanding what really gets people excited about adventure. Through research, testing, and plenty of trial and error, I saw that planning a trip isn't just about finding the best route; it's about the thrill of discovery and the people you share it with.
                            </p>
                        </div>

                        <div className="md:w-1/2 flex flex-col gap-6 md:pl-10 md:border-l border-zinc-800/50">
                            <h4 className="text-3xl font-['Bitcount_Prop_Single'] text-[#FFFFFF]">One big takeaway?</h4>
                            <p className="text-[#D4D4D4] leading-relaxed text-md md:text-lg">
                                Great design isn't just about solving problems; it's about creating moments of ease and excitement. By simplifying the planning process, this app ensures that users spend less time figuring things out and more time exploring the outdoors.
                            </p>
                            <p className="text-[#D4D4D4] leading-relaxed text-md md:text-lg italic opacity-80">
                                Moving forward, adding more personalization and community-driven features could take this even further.
                            </p>
                        </div>
                    </div>
                </div>
            </Reveal>

        </div>
    );
}
