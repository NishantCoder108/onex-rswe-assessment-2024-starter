import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import silverCar1 from "@/assests/cars/silver-car1.png";
import Image from "next/image";

const CarImgCarousel = () => {
    return (
        <div className="flex items-center justify-evenly mt-12 ">
            <Carousel className="w-full max-w-xs sm:max-w-sm  md:max-w-xl  xl:max-w-3xl">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="outline-none border-none shadow-none bg-transparent">
                                    <CardContent className="flex relative aspect-video items-center justify-center p-6">
                                        {/* <span className="text-4xl font-semibold">
                                            {index + 1}
                                        </span> */}
                                        <Image
                                            src={silverCar1}
                                            alt="silver car 1"
                                        />
                                        <div className="absolute inset-0 bg-[#FBFCFE] opacity-50"></div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>{" "}
        </div>
    );
};

export default CarImgCarousel;
