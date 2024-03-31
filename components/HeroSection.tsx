"use client";
import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { cn } from "@/utils/cn";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md 
    flex flex-col items-center justify-center relative 
    mx-auto py-10 md:py-0">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="text-white pt-10 md:pt-7  md:px-0 
              px-7  text-center flex justify-center items-center flex-col">
                <h1 className="md:text-4xl md:w-2/3 text-xl">Discover the Royal Flavors of Rajasthan:
                    A Culinary Odyssey Awaits at Rajasthan Rasoi!
                </h1>
                <p className="text-xl pt-5 md:w-3/5 md:px-0 px-8">
                    Experience the Essence of Rajasthan: Indulge in Authentic Rajasthani Cuisine at Our Restaurant. Taste Tradition in Every Bite!
                    where every meal is a feast for the senses and a homage to centuries-old recipes. Step into our world and let the flavors of Rajasthan mesmerize you, one bite at a time.
                </p>
                <div className="mt-8">
                    <Link href={"/"}>
                    <Button borderRadius="1.75rem" className="bg-black text-lg">
                    Explore Respy
                </Button>
                        
                    </Link>
                </div>
              
            </div>


        </div>
    )
}

export default HeroSection