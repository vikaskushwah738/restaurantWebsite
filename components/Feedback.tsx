"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const customerFeedback = [
    {
        quote: "The service provided exceeded my expectations. I am thoroughly impressed!",
        name: "John Doe",
        title: "CEO, ABC Company"
    },
    {
        quote: "I'm amazed by the quality of products and the professionalism of the team.",
        name: "Jane Smith",
        title: "Marketing Manager, XYZ Corporation"
    },
    {
        quote: "The support team went above and beyond to assist us with our queries. Highly recommended!",
        name: "David Johnson",
        title: "CTO, Acme Inc."
    },
    {
        quote: "Fantastic experience! The product delivered exactly what was promised.",
        name: "Emily Brown",
        title: "Operations Manager, LMN Enterprises"
    },
    {
        quote: "I've never had such a seamless integration process. Kudos to the team!",
        name: "Michael Wilson",
        title: "IT Director, PQR Ltd."
    },
    {
        quote: "Our company's productivity has soared since implementing their solutions.",
        name: "Sarah Taylor",
        title: "HR Manager, RST Industries"
    },
    {
        quote: "Great communication and excellent attention to detail. A pleasure to work with!",
        name: "Chris Anderson",
        title: "Finance Director, UVW Corporation"
    },
    {
        quote: "Their services have made a significant impact on our bottom line. Thank you!",
        name: "Jessica Martinez",
        title: "Sales Manager, WXY Group"
    },
    {
        quote: "I couldn't be happier with the results. Highly recommend their services!",
        name: "Daniel Garcia",
        title: "Founder & CEO, ZYX Solutions"
    },
    {
        quote: "Efficient, reliable, and professional. They deliver every time!",
        name: "Michelle Lee",
        title: "Operations Director, 123 Enterprises"
    }
];

const Feedback = () => {
    return (
        <div className="h-[40rem] w-full dark:bg-black
        dark:bg-grid-white/[0.2] relative flex flex-col 
        items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center z-10  mb-8">Here our Customer Feedback</h2>
            <div className="flex justify-center w-full overflow-hidden
            px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={customerFeedback}
                        direction="right"
                        speed="slow"
                    />

                </div>
            </div>
        </div>
    )
}

export default Feedback