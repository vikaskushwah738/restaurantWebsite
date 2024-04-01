import DishesRestaurant from "@/components/DishesRestaurant";
import Feedback from "@/components/Feedback";
import HeroSection from "@/components/HeroSection";
import OurShafe from "@/components/OurShafe";
import UpComingDishes from "@/components/UpComingDishes";
import WhyChoseUs from "@/components/WhyChoseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    
    <HeroSection/>

    <DishesRestaurant/>

    <WhyChoseUs/>

    <Feedback/>

    <UpComingDishes/>

    <OurShafe/>

    
  </main>
  );
}
