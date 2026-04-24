import orders from "../../assets/images/order_flow.jpg";
import myorders from "../../assets/images/myorders_flow.jpg";
import lowFidelity from "../../assets/images/sketches.png";
import Reveal from "../reveal";
import notif from "../../assets/videos/notif.mp4"
import liveTracking from "../../assets/videos/live_tracking.mp4"
import orderlive from "../../assets/videos/order_live.mp4"
import hifi from "../../assets/images/hifi_designs.png"
import td_1 from "../../assets/images/td_1.png"
import td_2 from "../../assets/images/td_2.png"
import laundrymate from "../../assets/images/laundrymate.png"
import spincycles from "../../assets/images/spincycles.png"
import uclean from "../../assets/images/uclean.png"

export default function TumbledryContent() {
    return (
        <div className="w-full flex flex-col gap-14 md:gap-24 font-['Inter'] text-zinc-200">
            {/* PRODUCT OVERVIEW */}
            <Reveal>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 border-y border-zinc-800/50 backdrop-blur-sm bg-[#1c1c1c] rounded-2xl mt-4">
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Role</span>
                        <span className="text-md md:text-md md:text-lg text-zinc-100 font-medium">Product Designer</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Platform</span>
                        <span className="text-md md:text-lg text-zinc-100 font-medium">iOS & Android App</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Timeline</span>
                        <span className="text-md md:text-lg text-zinc-100 font-medium">2 Months</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Focus</span>
                        <span className="text-md md:text-lg text-zinc-100 font-medium">UX Research, UX/UI Design, Prototyping</span>
                    </div>
                </div>
            </Reveal>
            {/* UNDERSTANDING THE CURRENT EXPERIENCE */}
            <Reveal>
                <div className="flex flex-col md:flex-row items-start md:items-start bg-[#1c1c1c] p-8 md:p-14 rounded-4xl gap-6 border border-zinc-800/30">
                    <h2 className="text-2xl md:text-5xl font-['Bitcount_Prop_Single'] text-white leading-tight">
                        The Current Experience
                    </h2>
                    <div className="md:w-4/5 flex flex-col gap-6 text-md md:text-md md:text-lg text-[##A1A1A1] leading-relaxed">
                        <p>
                            Tumbledry provides a mobile app that allows users to schedule laundry pickups and deliveries. However, reviewing the product revealed several gaps in the overall experience - from booking and pricing visibility to order clarity and payment expectations.
                        </p>
                        <p>
                            In the current flow, selecting a service leads directly to choosing a pickup slot, and tapping 'Schedule Pickup' immediately confirms the order without a review step. Users are not prompted to specify garment details, pricing is hidden within the navigation menu, and payment expectations are not communicated during booking. Together, these issues create a lack of transparency in the service journey.
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
                        <div className="flex flex-col gap-6">
                            <h4 className="text-3xl font-['Bitcount_Prop_Single'] text-[#FFFFFF]">Digging deeper</h4>
                            <p className="text-text-[#D4D4D4] text-md md:text-lg leading-relaxed">
                                To better understand the current experience, I audited the Tumbledry mobile app and walked through the entire lifecycle of a laundry order - from selecting a service to scheduling pickup and tracking the order. This helped uncover friction points, inconsistencies, and areas where the experience could be simplified or made more transparent.                            </p>
                            <p className="text-text-[#D4D4D4] text-md md:text-lg leading-relaxed">
                                In addition, I explored a few other laundry service apps to understand how similar platforms communicate pricing, order details, and booking confirmations during the scheduling process. Comparing these experiences helped identify common patterns, usability gaps, and opportunities to create a more seamless and trustworthy booking flow.                            </p>
                            <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-4 md:pt-8">
                                {/* Competitor Logos Placeholder */}
                                <div className="md:h-20 md:w-20 h-14 w-14 flex items-center justify-center ">
                                    <img src={laundrymate} alt="Competitor Logo 1" className="w-full h-full object-contain md:rounded-2xl rounded-xl" />
                                </div>
                                <div className="md:h-20 md:w-20 h-14 w-14 flex items-center justify-center">
                                    <img src={spincycles} alt="Competitor Logo 2" className="w-full h-full object-contain md:rounded-2xl rounded-xl" />
                                </div>
                                <div className="md:h-20 md:w-20 h-14 w-14 flex items-center justify-center">
                                    <img src={uclean} alt="Competitor Logo 3" className="w-full h-full object-contain md:rounded-2xl rounded-xl" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-6">
                            <div className="rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700">
                                <img src={td_2} alt="Research Moodboard 1" className="w-full h-full object-contain" />
                            </div>
                            <div className="rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-700">
                                <img src={td_1} alt="Research Moodboard 2" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* KEY INSIGHTS */}
            <Reveal>
                <h4 className="text-3xl font-['Bitcount_Prop_Single'] text-[#FFFFFF]">Key Insights</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-10">
                    <div className="p-6 rounded-3xl bg-[#1c1c1c] border border-zinc-800/50 flex flex-col gap-4">
                        <h5 className="text-xl font-bold text-zinc-100">Price Clarity</h5>
                        <p className="text-text-[#D4D4D4]">Users need to understand the expected cost before scheduling a pickup. When pricing is hidden or difficult to find, it creates uncertainty during the booking decision.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-[#1c1c1c] border border-zinc-800/50 flex flex-col gap-4">
                        <h5 className="text-xl font-bold text-zinc-100">Service Details</h5>
                        <p className="text-text-[#D4D4D4]">The booking flow does not capture important details such as garment type or quantity. Without this information, users may not fully understand what they are requesting from the service.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-[#1c1c1c] border border-zinc-800/50 flex flex-col gap-4">
                        <h5 className="text-xl font-bold text-zinc-100">Booking Confirmation</h5>
                        <p className="text-text-[#D4D4D4]">After selecting a pickup slot, tapping “Schedule Pickup” immediately places the order. Users typically expect a confirmation or review step before committing to a service booking.</p>
                    </div>
                </div>
            </Reveal>

            {/* LOW FIDELITY EXPLORATION */}
            <Reveal>
                <div className="flex flex-col gap-8 md:gap-10">
                    <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-sm font-semibold tracking-widest text-[#A6A6A6] uppercase">Ideation</h3>
                        <div className="h-px bg-zinc-800 grow"></div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-3xl font-['Bitcount_Prop_Single'] text-[#FFFFFF]">Low Fidelity & Flows</h4>
                        <p className="text-text-[#D4D4D4] text-md md:text-lg leading-relaxed mt-4">
                            With the key insights identified, the next step was to explore ways to simplify the booking experience while improving transparency for users. Early wireframes focused on restructuring the scheduling flow, surfacing pricing at the right moment, capturing essential service details such as garment types, and introducing a confirmation step before placing an order.                        </p>
                    </div>
                    <div className="flex flex-col gap-8 mt-4">
                        <div className="flex flex-col gap-4">
                            <h5 className="md:text-2xl text-xl font-semibold text-zinc-100 font-['Inter'] tracking-wide">Order Flow</h5>
                            <div className="md:rounded-3xl rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/50">
                                <img src={orders} alt="Order Flow" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h5 className="md:text-2xl text-xl font-semibold text-zinc-100 font-['Inter'] tracking-wide">My Orders Flow</h5>
                            <div className="md:rounded-3xl rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/50">
                                <img src={myorders} alt="My Orders Flow" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h5 className="md:text-2xl text-xl font-semibold text-zinc-100 font-['Inter'] tracking-wide">Sketches</h5>
                            <div className="md:rounded-3xl rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/50">
                                <img src={lowFidelity} alt="Sketches" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* DESIGN SOLUTION & HIGH FIDELITY */}
            <Reveal>
                <div className="flex flex-col gap-8 md:gap-10">
                    <div className="flex items-center gap-8 md:gap-10">
                        <h3 className="text-sm font-semibold tracking-widest text-[#A6A6A6] uppercase">Design Solution</h3>
                        <div className="h-px bg-zinc-800 grow"></div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="text-3xl font-['Bitcount_Prop_Single'] text-[#FFFFFF]">High Fidelity Transformation</h4>
                        <div className="flex flex-col gap-4">
                            <p className="text-text-[#D4D4D4] text-md md:text-lg leading-relaxed mt-4">
                                Building on the early wireframes, the concepts were translated into a complete high-fidelity redesign of the Tumbledry mobile experience. The focus was to create a clearer and more structured service journey, ensuring users could understand what they were booking at every step of the process.                            </p>
                            <p className="text-text-[#D4D4D4] text-md md:text-lg leading-relaxed mt-4">
                                The redesigned flow surfaces pricing earlier, captures important service details such as garment types, and introduces a confirmation step before scheduling pickup. Improvements were also made to navigation, order tracking, and information hierarchy to make the overall experience feel more transparent and predictable while keeping the booking process simple.                            </p>
                        </div>
                    </div>
                    <div className="rounded-4xl overflow-hidden mt-6">
                        <img src={hifi} alt="High Fidelity Screens" className="w-full h-full rounded-3xl" />
                    </div>
                </div>
            </Reveal>

            {/* EXPERIENCE MOMENTS */}
            <div className="flex flex-col gap-8 md:gap-10">
                <Reveal>
                    <div className="flex items-center gap-8 md:gap-10">
                        <h3 className="text-sm font-semibold tracking-widest text-[#A6A6A6] uppercase">Experience Moments</h3>
                        <div className="h-px bg-zinc-800 grow"></div>
                    </div>
                </Reveal>

                {/* Moment 1 */}
                <Reveal>
                    <div className="flex flex-col md:flex-row items-stretch gap-8 group">
                        <div className="md:w-5/12 flex flex-col justify-center gap-6 p-8 md:p-12 bg-[#1c1c1c] rounded-4xl border border-transparent group-hover:bg-zinc-900/60 group-hover:border-zinc-700/50 transition-all duration-500">
                            <h4 className="text-3xl font-['Bitcount_Prop_Single'] text-white">Booking Experience</h4>
                            <p className="text-md md:text-lg text-text-[#D4D4D4] leading-relaxed">
                                A clearer booking flow that gives users visibility into pricing and order details before scheduling a pickup.
                            </p>
                            <ul className="text-md md:text-lg text-text-[#D4D4D4] leading-relaxed list-disc pl-5">
                                <li>Pricing is surfaced earlier in the booking flow</li>
                                <li>Users can add garment details before confirming</li>
                                <li>A confirmation step prevents accidental bookings</li>
                            </ul>
                        </div>
                        <div className="md:w-7/12 w-full rounded-4xl overflow-hidden bg-zinc-950 min-h-[400px] flex items-center justify-center border border-zinc-800/30 relative">
                            <video src={orderlive} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                    </div>
                </Reveal>

                {/* Moment 2 */}
                <Reveal>
                    <div className="flex flex-col md:flex-row-reverse items-stretch gap-8 group">
                        <div className="md:w-5/12 flex flex-col justify-center gap-6 p-8 md:p-12 bg-[#1c1c1c] rounded-4xl border border-transparent group-hover:bg-zinc-900/60 group-hover:border-zinc-700/50 transition-all duration-500">
                            <h4 className="text-3xl font-['Bitcount_Prop_Single'] text-white">Live Tracking</h4>
                            <p className="text-md md:text-lg text-text-[#D4D4D4] leading-relaxed">
                                A simple tracking experience that keeps users informed about the progress of their laundry order.
                            </p>
                            <ul className="text-md md:text-lg text-text-[#D4D4D4] leading-relaxed list-disc pl-5">
                                <li>Visual order status shows the current stage of the service</li>
                                <li>Users can quickly check pickup, processing, and delivery updates</li>
                                <li>Order details remain accessible throughout the journey</li>
                            </ul>
                        </div>

                        <div className="md:w-7/12 rounded-4xl w-full overflow-hidden min-h-[400px] flex items-center justify-center relative">
                            <video src={liveTracking} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                    </div>
                </Reveal>

                {/* Moment 3 */}
                <Reveal>
                    <div className="flex flex-col md:flex-row items-stretch gap-8 group">
                        <div className="md:w-5/12 flex flex-col justify-center gap-6 p-8 md:p-12 bg-[#1c1c1c] rounded-4xl border border-transparent group-hover:bg-zinc-900/60 group-hover:border-zinc-700/50 transition-all duration-500">
                            <h4 className="text-3xl font-['Bitcount_Prop_Single'] text-white">Notifications</h4>
                            <p className="text-md md:text-lg text-text-[#D4D4D4] leading-relaxed">
                                Timely updates keep users aware of important events without needing to constantly check the app.
                            </p>
                            <ul className="text-md md:text-lg text-text-[#D4D4D4] leading-relaxed list-disc pl-5">
                                <li>Pickup reminders help users prepare their laundry</li>
                                <li>Status updates notify users as the order progresses</li>
                                <li>Delivery alerts inform users when the order is ready</li>
                            </ul>
                        </div>
                        <div className="md:w-7/12 w-full rounded-4xl overflow-hidden bg-[#CFEBFF] min-h-[400px] flex items-center justify-center">
                            <div className="md:w-7/12 w-full rounded-4xl overflow-hidden min-h-[400px] flex items-center justify-center relative">
                                <video src={notif} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* OUTCOME / REFLECTION */}
            <Reveal>
                <div className="bg-[#1c1c1c] text-zinc-300 rounded-4xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center justify-between mt-4 border border-zinc-800/50">
                    <div className="md:w-full flex flex-col gap-4 md:gap-8">
                        <h3 className="text-3xl md:text-5xl font-['Bitcount_Prop_Single'] text-white tracking-tight">Takeaway</h3>
                        <p className="text-md md:text-lg font-medium text-text-[#D4D4D4] leading-relaxed">
                            Redesigning the Tumbledry experience highlighted how important transparency is in service-based products. When users are booking a service that involves cost and physical pickup, they need clear visibility into what they are scheduling and what it will cost.
                        </p>
                        <p className="text-md md:text-lg font-medium text-text-[#D4D4D4] leading-relaxed">
                            This project also reinforced the value of structuring complex flows into simple, predictable steps. By surfacing pricing earlier, capturing service details, and introducing a confirmation step, the overall booking experience becomes easier to understand and more trustworthy.
                        </p>
                    </div>
                </div>
            </Reveal>
        </div>
    );
}
