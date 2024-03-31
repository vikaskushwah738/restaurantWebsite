"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const rajasthaniDishes = [
    {
        title: "Dal Baati Churma",
        description: "A traditional Rajasthani delicacy consisting of baked dough balls (baati) served with lentil curry (dal) and a sweet crumbled wheat dessert (churma)."
    },
    {
        title: "Gatte ki Sabzi",
        description: "A flavorful curry made with gram flour (besan) dumplings (gatte) cooked in a spicy yogurt-based gravy, often served with rice or roti."
    },
    {
        title: "Laal Maas",
        description: "A fiery red meat curry made with tender mutton cooked in a rich and spicy gravy, flavored with traditional Rajasthani spices."
    },
    {
        title: "Ker Sangri",
        description: "A unique Rajasthani dish made with dried desert beans (sangri) and wild berries (ker), cooked with spices to create a tangy and flavorful side dish."
    },
    {
        title: "Mirchi Vada",
        description: "Spicy green chilies stuffed with a tangy potato filling, coated in gram flour batter, and deep-fried until crispy and golden brown, a popular street food snack in Rajasthan."
    },
    {
        title: "Bajre ki Roti",
        description: "A traditional flatbread made from pearl millet (bajra) flour, commonly served with ghee (clarified butter), curries, or chutney in Rajasthani households."
    },
    {
        title: "Aloo Pyaaz Kachori",
        description: "Deep-fried pastry pockets filled with a spicy mixture of mashed potatoes (aloo) and onions (pyaaz), typically served as a savory snack or breakfast item."
    },
    {
        title: "Pyaaz ki Kachori",
        description: "Flaky, deep-fried pastries stuffed with a spiced onion filling, popularly enjoyed as a tea-time snack or breakfast option in Rajasthan."
    },
    {
        title: "Mawa Kachori",
        description: "Sweet and indulgent deep-fried pastries filled with a rich mixture of mawa (khoya), nuts, and aromatic spices, often served as a dessert or festive treat."
    },
    {
        title: "Ghevar",
        description: "A traditional Rajasthani sweet made from deep-fried flour batter, soaked in sugar syrup, and garnished with nuts and edible silver foil, typically enjoyed during festivals and celebrations."
    }
];



const WhyChoseUs = () => {
  return (
    <div className="bg-black/[0.96] h-auto">
        <StickyScroll content={rajasthaniDishes } />
    </div>
  )
}

export default WhyChoseUs