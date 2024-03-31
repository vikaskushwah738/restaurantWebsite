"use client"
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";
const restaurantShares = [
    {
        id: 1,
        name: "Facebook",
        designation: "Share your dining experience with friends and family on Facebook.",
        image: "https://res.cloudinary.com/dy6829ixb/image/upload/v1711891415/images_2_zaebky.jpg"
    },
    {
        id: 2,
        name: "Twitter",
        designation: "Tweet about your delicious meal and tag us on Twitter.",
        image: "https://res.cloudinary.com/dy6829ixb/image/upload/v1711891415/images_2_zaebky.jpg"
    },
    {
        id: 3,
        name: "Instagram",
        designation: "Capture Insta-worthy photos of your food and share them on Instagram.",
        image: "https://res.cloudinary.com/dy6829ixb/image/upload/v1711891415/images_2_zaebky.jpg"
    },
    {
        id: 4,
        name: "Pinterest",
        designation: "Pin your favorite dishes to your Pinterest boards for future reference.",
        image: "https://res.cloudinary.com/dy6829ixb/image/upload/v1711891415/images_2_zaebky.jpg"
    },
    {
        id: 5,
        name: "Email",
        designation: "Send an email to your loved ones inviting them to dine with us.",
        image: "https://res.cloudinary.com/dy6829ixb/image/upload/v1711891415/images_2_zaebky.jpg"
    }
];
const OurShafe = () => {
    return (
        <div className="relative h-[40rem] overflow-hidden
    flex items-center justify-center">
            <WavyBackground>
                       <h2 className="text-2xl md:text-4xl lg:text-7xl
                       text-white font-bold text-center mb-8">Meet our shafe</h2>
                       <p className="text-base md:text-lg text-white
                       text-center mb-4">What are the common health and safety hazards in the hospitality industry?</p>
                       <div className="flex flex-row items-center
                       justify-center mb-10 w-full">
                          <AnimatedTooltip items={restaurantShares}/>
                       </div>
            </WavyBackground>

        </div>
    )
}

export default OurShafe