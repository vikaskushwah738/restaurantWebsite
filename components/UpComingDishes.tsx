import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
const restaurantFeatures = [
    {
        title: "Outdoor Dining",
        description: "Enjoy your meal in our spacious outdoor seating area, perfect for a relaxing dining experience.",
        link:"/"  
    },
    {
        title: "Live Music",
        description: "Experience the vibrant atmosphere with live music performances by talented local artists.",
        link:"/"  
    },
    {
        title: "Family-Friendly",
        description: "We welcome families with children of all ages, offering a kids' menu and fun activities.",
        link:"/"  
    },
    {
        title: "Local Ingredients",
        description: "We prioritize using fresh, locally sourced ingredients to create delicious and sustainable dishes.",
        link:"/"  
    },
    {
        title: "Private Events",
        description: "Host your special occasions with us! Our venue is available for private events and celebrations.",
        link:"/"  
    },
    {
        title: "Happy Hour",
        description: "Join us for our daily happy hour specials, featuring discounted drinks and appetizers.",
        link:"/"  
    },
    {
        title: "Vegetarian Options",
        description: "Vegetarian? No problem! We offer a variety of delicious vegetarian dishes to satisfy your cravings.",
        link:"/"  
    },
    {
        title: "Craft Cocktails",
        description: "Indulge in our handcrafted cocktails, expertly crafted by our talented mixologists.",
        link:"/"  
    },
    {
        title: "Dessert Bar",
        description: "Treat yourself to something sweet from our dessert bar, featuring an array of decadent desserts.",
        link:"/"  
    }
];


const UpComingDishes = () => {
    return (
        <div className="p-12 bg-gray-900">
            <div className="mx-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className=" text-orange-600
                    font-semibold tracking-wide md:text-4xl text-2xl uppercase">Soon we add new Dishes to our menu</h2>
                    <p className="mt-2 text-3xl leading-8 
                    pt-4 tracking-tight text-white
                    sm:text-4xl">What are the common health and safety hazards in the hospitality industry?</p>
                </div>
                <div className="mt-10">
                <HoverEffect items={restaurantFeatures} />
                </div>
                <div className="mt-10 text-center">
                    <Link href={"/"}
                    className=" px-4 py-2 rounded-md border-neutral-600
                    text-neutral-700 bg-white hover:bg-gray-100 
                    transition duration-200">
                        views all Dishes
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpComingDishes