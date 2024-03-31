"use client";
import Link from "next/link"
import dishesData from "../data/restaurant.json"
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
interface Dishes {
    id: number,
    name: string,
    price: number,
    description: string,
    image:string
}

const DishesRestaurant = () => {
    const dishes: Dishes[] = dishesData.dishes;
    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="md:text-4xl text-orange-500 text-2xl font-medium uppercase">Our best selling Dishes</h2>
                    <p className="md:text-2xl text-xl pt-5">Hyderabad Hub Restaurant
                        A place where people hang out</p>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 
        lg:grid-cols-3 gap-8 justify-center px-10">
                    {dishes.map((dishe: Dishes) => (

                        <BackgroundGradient key={dishe.id} className="bg-gray-900 rounded-3xl
        overflow-hidden h-full max-w-sm flex flex-grow" >
                            <div className="text-center pb-5">
                                <div className="flex justify-center items-center pt-3 pb-4">
                                <Image src={dishe.image} alt="dishe" height={250} width={200}></Image>
                                </div>                
                                <p className="text-xl">{dishe.name}</p>
                                <p className="text-xl">{dishe.price}</p>
                                <p className="pb-5 px-3">{dishe.description}</p>
                                <button className=" border-2 px-3 py-1 hover:text-gray-900 hover:bg-white hover:font-medium  rounded-full border-blue-50">Order</button>
                            </div>
                        </BackgroundGradient>
                    ))}
                </div>

            </div>
            <div className="mt-20 text-center">
                <Link href={'/'} className=" px-4 py-2 border rounded-md 
        border-neutral-600 text-neutral-700 bg-white 
        hover:bg-gray-100 transition duration-200" >
                    View All Dishes
                </Link>
            </div>
        </div>
    )
}

export default DishesRestaurant