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




export default function WanderContent() {
    return (
        <div className="w-full flex flex-col gap-32 font-['Inter']">
            {/* OVERVIEW */}
            <div className="flex flex-col gap-10">
                <h3 className="text-xl font-semibold tracking-widest text-[#A6A6A6] uppercase">Overview</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-b border-zinc-800 pb-16">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-2xl font-bold font-serif text-[#FFFFFF]">Project Description</h4>
                            <p className="text-zinc-300 leading-relaxed text-[18px]">
                                Many outdoor enthusiasts struggle to find reliable adventure spots, plan trips efficiently, and connect with like-minded explorers. I designed Wander to simplify this process, offering seamless discovery, trip management, and social connectivity in one intuitive app.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-2xl font-bold font-serif text-[#FFFFFF]">Goal</h4>
                            <p className="text-zinc-300 leading-relaxed text-[18px]">
                                The goal of Wander is to make outdoor adventure planning effortless by offering personalized recommendations and intuitive trip management. It connects adventurers, helping them explore, plan, and share experiences seamlessly.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-10 md:pl-8">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-xl font-bold font-serif text-[#FFFFFF]">Timeline</h4>
                            <p className="text-zinc-400 text-[18px]">November 2023 - December 2023</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="flex flex-col gap-4">
                                <h4 className="text-xl font-bold font-serif text-[#FFFFFF]">Responsibilities</h4>
                                <ul className="flex flex-col gap-1.5 text-zinc-300 text-[18px]">
                                    <li>UX Research</li>
                                    <li>Sketching</li>
                                    <li>UI/UX Design</li>
                                    <li>Prototyping</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="text-xl font-bold font-serif text-[#FFFFFF]">Tools</h4>
                                <ul className="flex flex-col gap-4 text-zinc-300 text-[18px]">
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

                <div className="flex flex-col items-center gap-6 pt-10 w-[60%] mx-auto">
                    <div className="flex justify-center items-center gap-4">
                        <h2 className="text-2xl font-bold font-serif">What is </h2>
                        <div className="w-40">
                            <img src={wanderLogo} alt="Wander Logo" className="w-full h-full object-fill" />
                        </div>
                    </div>
                    <p className="text-center text-zinc-300 leading-relaxed text-[18px]">
                        Wander is your go-to app for discovering and planning outdoor adventures effortlessly. Whether it's hiking, camping, or exploring hidden trails, Wander helps you find the best spots with personalized recommendations. Connect with fellow adventurers, organize trips, and make every journey unforgettable.
                    </p>
                </div>
            </div>

            {/* RESEARCH */}
            <div className="flex flex-col gap-10 pt-10 border-t border-zinc-800">
                <h3 className="text-xl font-semibold tracking-widest text-[#A6A6A6] uppercase">Research</h3>

                <div className="flex flex-col gap-4">
                    <h4 className="text-2xl font-bold font-serif text-[#FFFFFF]">Observing the demand</h4>
                    <p className="text-zinc-300 leading-relaxed text-[18px]">
                        Across online forums, social media groups, and adventure communities, people frequently asked for an app that helps them discover new outdoor activities, plan trips effortlessly, and connect with fellow adventurers. Many shared frustrations about scattered information, lack of reliable recommendations, and difficulty coordinating trips with friends.
                    </p>
                </div>

                <div className="w-full">
                    <img src={reddit} alt="Reddit" className="w-full h-full object-fill" />
                </div>
            </div>

            {/* MARKET COMPARISON */}
            <div className="flex flex-col gap-10 pt-10 border-t border-zinc-800">
                <div className="flex flex-col gap-4">
                    <h4 className="text-2xl font-bold font-serif text-[#FFFFFF]">Market Comparison</h4>
                    <p className="text-zinc-300 leading-relaxed text-[18px]">
                        To better understand the landscape, we analyzed existing apps that cater to outdoor adventurers. Here's how they compare.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    {/* AllTrails */}
                    <div className="flex flex-col md:flex-row border border-zinc-700/60 rounded-2xl overflow-hidden bg-[#1D1D1D]/50 shadow-md">
                        <div className="w-[25%] p-8 flex items-center justify-start md:justify-center border-b md:border-b-0 md:border-r border-zinc-700/60">
                            <div className="flex justify-center items-center gap-4">
                                <div className="w-[30%] h-[30%]">
                                    <img src={alltrails} alt="AllTrails" className="w-full h-full rounded-lg" />
                                </div>
                                <span className="font-bold text-xl text-white tracking-wide">AllTrails</span>
                            </div>
                        </div>
                        <div className="md:w-[75%] p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex flex-col gap-4">
                                <h5 className="font-serif font-bold text-[17px] text-[#FFFFFF]">Key Features</h5>
                                <ul className="list-disc pl-5 text-zinc-300 text-[18px] space-y-2.5 marker:text-zinc-500">
                                    <li>Huge trail database with reviews.</li>
                                    <li>GPS tracking & offline maps.</li>
                                    <li>Filters for difficulty, length, elevation.</li>
                                    <li>User-uploaded trail photos & reviews.</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h5 className="font-serif font-bold text-[18px] text-[#FFFFFF]">Drawbacks</h5>
                                <ul className="list-disc pl-5 text-zinc-300 text-[18px] space-y-2.5 marker:text-zinc-500">
                                    <li>Lacks collaborative trip-planning features.</li>
                                    <li>Limited personalization for adventure recommendations.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Gaia GPS */}
                    <div className="flex flex-col md:flex-row border border-zinc-700/60 rounded-2xl overflow-hidden bg-[#1D1D1D]/50 shadow-md">
                        <div className="w-[25%] p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-zinc-700/60">
                            <div className="flex justify-center items-center gap-4">
                                <div className="w-[30%] h-[30%]">
                                    <img src={gaiagps} alt="Gaia GPS" className="w-full h-full object-fill rounded-lg" />
                                </div>
                                <span className="font-bold text-xl text-white tracking-wide">Gaia GPS</span>
                            </div>
                        </div>
                        <div className="md:w-[75%] p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex flex-col gap-4">
                                <h5 className="font-serif font-bold text-[18px] text-[#FFFFFF]">Key Features</h5>
                                <ul className="list-disc pl-5 text-zinc-300 text-[18px] space-y-2.5 marker:text-zinc-500">
                                    <li>Detailed topo & satellite maps.</li>
                                    <li>Custom route planning.</li>
                                    <li>Offline maps for remote trips.</li>
                                    <li>Works with CarPlay & Android Auto.</li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h5 className="font-serif font-bold text-[18px] text-[#FFFFFF]">Drawbacks</h5>
                                <ul className="list-disc pl-5 text-zinc-300 text-[18px] space-y-2.5 marker:text-zinc-500">
                                    <li>Steep learning curve for new users.</li>
                                    <li>Interface feels cluttered with advanced tools.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* INSIGHTS */}
            <div className="flex flex-col gap-10 pt-10 border-t border-zinc-800">
                <h3 className="text-xl font-semibold tracking-widest text-[#A6A6A6] uppercase">Insights</h3>

                <div className="flex flex-col gap-4">
                    <h4 className="text-2xl font-bold font-serif text-[#FFFFFF]">User Persona</h4>
                    <p className="text-zinc-300 leading-relaxed text-[18px]">
                        To better understand our ideal user, I created user personas based on insights from user research, surveys, competitor analysis, and key pain points. These personas help represent the needs, behaviors, and frustrations of real users, ensuring that every design decision aligns with their expectations and enhances their outdoor adventure experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-20 mt-8">
                    {/* Persona 1 */}
                    <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                        <div className="w-[280px] h-[280px] shrink-0 rounded-full bg-zinc-800/80 overflow-hidden shadow-2xl border-4 border-zinc-800/50">
                            <div>
                                <img src={persona1} alt="Persona 1" className="w-full h-full object-fill" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 pt-2 w-full">
                            <div>
                                <h4 className="text-[24px] font-bold font-serif text-white tracking-wide">Emily Carter, 27</h4>
                                <div className="flex flex-col gap-2 mt-3 text-[16px] text-zinc-300">
                                    <p className="flex items-center gap-2">
                                        <span className="text-lg">💼</span> <span className="font-medium text-white">Marketing Specialist</span>
                                        <span className="text-zinc-600 mx-2">|</span>
                                        <span className="text-lg">📍</span> <span className="font-medium text-white">Denver, CO</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="text-lg">🤍</span> <span className="font-medium text-white">Outdoor Interests: Hiking, backpacking, solo adventures</span>
                                    </p>
                                </div>
                            </div>
                            <p className="text-[18px] text-zinc-400 font-semibold leading-relaxed">
                                A 27-year-old marketing professional who loves weekend hikes but struggles with trip planning and finding companions. She needs a simple way to organize adventures and meet fellow explorers.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[18px] pt-4">
                                <div className="flex flex-col gap-3">
                                    <h5 className="font-bold text-white tracking-wide">Needs</h5>
                                    <ul className="list-disc pl-5 text-zinc-400 text-[18px] space-y-2.5 marker:text-zinc-500">
                                        <li>Find nearby spots</li>
                                        <li>Discover new getaways</li>
                                        <li>Plan trips easily</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h5 className="font-bold text-white tracking-wide">Challenges</h5>
                                    <ul className="list-disc pl-5 text-zinc-400 text-[18px] space-y-2.5 marker:text-zinc-500">
                                        <li>Hard to find good hiking spots</li>
                                        <li>Trip planning feels complicated</li>
                                        <li>Wants to meet fellow adventurers</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Persona 2 */}
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center md:items-start pt-16 border-t border-zinc-800/30">
                        <div className="w-[280px] h-[280px] shrink-0 rounded-full bg-zinc-800/80 overflow-hidden shadow-2xl border-4 border-zinc-800/50">
                            <div>
                                <img src={persona2} alt="Persona 2" className="w-full h-full object-fill" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 pt-2 w-full">
                            <div>
                                <h4 className="text-[26px] font-bold font-serif text-white tracking-wide">Jake Miller, 34</h4>
                                <div className="flex flex-col gap-2 mt-3 text-[16px] text-zinc-300">
                                    <p className="flex items-center gap-2">
                                        <span className="text-lg">💼</span> <span className="font-medium text-white">Software Engineer</span>
                                        <span className="text-zinc-600 mx-2">|</span>
                                        <span className="text-lg">📍</span> <span className="font-medium text-white">Seattle, WA</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="text-lg">🤍</span> <span className="font-medium text-white">Outdoor Interests: Group camping, road trips, kayaking</span>
                                    </p>
                                </div>
                            </div>
                            <p className="text-[18px] text-zinc-400 leading-relaxed">
                                A 34-year-old software engineer who enjoys group trips but struggles with planning. He needs an easy way to organize and track adventures.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[18px] pt-4">
                                <div className="flex flex-col gap-3">
                                    <h5 className="font-bold text-white tracking-wide">Needs</h5>
                                    <ul className="list-disc pl-5 text-zinc-400 text-[18px] space-y-2.5 marker:text-zinc-500">
                                        <li>Plan trips effortlessly with friends</li>
                                        <li>Keep all trip details organized</li>
                                        <li>Find adventure spots for your group</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h5 className="font-bold text-white tracking-wide">Challenges</h5>
                                    <ul className="list-disc pl-5 text-zinc-400 text-[18px] space-y-2.5 marker:text-zinc-500">
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

            {/* IDEATION & DESIGN */}
            <div className="flex flex-col gap-10 pt-10 border-t border-zinc-800 pb-20">
                <h3 className="text-xl font-semibold tracking-widest text-[#A6A6A6] uppercase">Ideation & Design</h3>

                <h4 className="text-2xl font-bold font-serif text-[#FFFFFF]">Moodboard</h4>

                <div>
                    <img src={moodboard} alt="Moodboard" className="w-full h-full object-fill" />
                </div>

                {/* USER FLOW */}
                <div className="flex flex-col gap-6 pt-16">
                    <h4 className="text-2xl font-bold font-serif text-[#FFFFFF]">User Flow</h4>
                    <div>
                        <img src={userFlow} alt="User Flow" className="w-full h-full object-fill" />
                    </div>
                </div>

                {/* LOW-FIDELITY */}
                <div className="flex flex-col gap-6 pt-16">
                    <h4 className="text-2xl font-bold font-serif text-[#FFFFFF]">Low-Fidelity</h4>
                    <p className="text-zinc-300 leading-relaxed text-[18px] max-w-full">
                        These low-fidelity sketches helped explore initial ideas and layouts, allowing for quick iterations before moving to higher fidelity designs. They served as a foundation for refining the user flow and interface.
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-10 mt-4">
                        <div>
                            <img src={lowFidelity} alt="Low Fidelity" className="w-full h-full object-fill" />
                        </div>
                        <div className="md:w-[30%] flex justify-center md:justify-start">
                            <h4 className="text-3xl font-bold font-serif text-[#FFFFFF]">Sketches</h4>
                        </div>
                    </div>
                </div>

                {/* WIREFRAMES */}
                <div className="flex flex-col md:flex-row items-center gap-10 pt-24">
                    <div className="md:w-[25%] flex justify-start pl-4 md:pl-10">
                        <h4 className="text-3xl font-bold font-serif text-[#FFFFFF]">Wireframes</h4>
                    </div>
                    <div>
                        <img src={wireframes} alt="Wireframes" className="w-full h-full object-fill" />
                    </div>
                </div>

                {/* HIGH-FIDELITY */}
                <div className="flex flex-col gap-6 pt-24">
                    <h4 className="text-2xl font-bold font-serif text-[#FFFFFF]">High-Fidelity</h4>
                    <p className="text-zinc-300 leading-relaxed text-[18px] max-w-full">
                        As the design took shape, I focused on crafting a seamless and engaging experience that balances aesthetics with functionality. Taking subtle inspiration from apps like AllTrails and Gaia GPS, I refined the interface to enhance navigation and trip planning, ensuring it meets the needs of outdoor adventurers.
                    </p>
                    <div>
                        <img src={highFidelity} alt="High Fidelity" className="w-full h-full object-fill" />
                    </div>
                </div>

                {/* EMPTY STATE */}
                <div className="flex flex-col md:flex-row items-center gap-16 pt-24">
                    <div className="w-[50%] flex flex-col gap-4">
                        <h4 className="text-3xl font-bold font-serif text-[#FFFFFF]">Empty State</h4>
                        <p className="text-zinc-300 leading-relaxed text-[18px]">
                            Empty states play a crucial role in guiding users when there's no data to display. I designed them to be informative yet visually engaging, ensuring users understand what to do next.
                        </p>
                    </div>
                    <div className="w-[50%]">
                        <img src={emptystate} alt="Empty State" className="w-full h-full object-fill" />
                    </div>
                </div>

            </div>

            {/* KEY SCREENS */}
            <div className="flex flex-col gap-10 pt-10 border-t border-zinc-800">
                <h4 className="text-2xl font-bold font-serif text-[#FFFFFF]">Key Screens</h4>
                <p className="text-zinc-300 leading-relaxed text-[18px] max-h-full">
                    Here are some of the most essential screens from the app, showcasing the core user experience and design choices. Each screen is crafted to ensure a seamless and intuitive journey for adventure seekers.
                </p>
                <div>
                    <img src={keyScreens} alt="Key Screens" className="w-full h-full object-fill" />
                </div>
            </div>

            {/* CONCLUSION */}
            <div className="flex flex-col gap-10 pt-10 border-t border-zinc-800">
                <h3 className="text-xl font-semibold tracking-widest text-[#A6A6A6] uppercase">Conclusion</h3>

                <div className="flex flex-col gap-6">
                    <h4 className="text-[28px] font-bold font-serif text-[#FFFFFF]">Wrapping It Up</h4>
                    <p className="text-zinc-300 leading-relaxed text-[18px]">
                        Building this app wasn't just about making trip planning easier; it was about understanding what really gets people excited about adventure. Through research, testing, and plenty of trial and error, I saw that planning a trip isn't just about finding the best route; it's about the thrill of discovery and the people you share it with.
                    </p>
                </div>

                <div className="flex flex-col gap-6 pt-6">
                    <h4 className="text-[28px] font-bold font-serif text-[#FFFFFF]">One big takeaway?</h4>
                    <p className="text-zinc-300 leading-relaxed text-[18px]">
                        Great design isn't just about solving problems; it's about creating moments of ease and excitement. By simplifying the planning process, this app ensures that users spend less time figuring things out and more time exploring the outdoors.
                    </p>
                    <p className="text-zinc-300 leading-relaxed text-[18px]">
                        Moving forward, adding more personalization and community-driven features could take this even further.
                    </p>
                </div>
            </div>

        </div>
    );
}
