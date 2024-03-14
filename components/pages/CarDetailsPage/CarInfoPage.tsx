import AppButton from "@/components/common/AppButton";
import AppSelectColor from "@/components/common/AppSelectColor";
import StarRating from "@/components/common/AppStarRating";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

const CarInfoPage = () => {
    return (
        <div className="  h-full pt-9 px-8">
            <div className=" border-b border-[#BDBDBD] ">
                <Badge className="bg-[#DDFFF7] text-[#0036C3] mb-3 hover:text-white">
                    NEW
                </Badge>
                <p className="text-2xl font-bold ">2021 Tesla Model 3</p>
                <p className="text-xs my-1">
                    <span className="text-gray-400 pr-3">VIN</span>{" "}
                    JN1AZ0CPOBT009448
                </p>
                <StarRating rating={5} />
                <p className=" font-semibold text-lg pb-4 pt-3">$41,103</p>
            </div>

            <div>
                <p className="font-bold my-4">Colour</p>
                <AppSelectColor />
            </div>

            <div className="my-12 text-center">
                <AppButton
                    className="bg-[#0036C3] hover:bg-blue-500 w-full text-[#00F3B9] hover:text-white"
                    btnText="Order Now"
                />
                <p className="text-xs my-4 text-gray-400">
                    Estimated within 16 Aug - 23 Aug
                </p>
            </div>

            <div className="border-b border-[#bdbdbd95] pb-7">
                <p className="font-semibold text-xl pb-4 pt-2 ">
                    Tesla believes in accelerating the world&apos;s transition
                    to sustainable energy with electric cars.
                </p>
                <Link className="underline text-[#0036C3]" href="#">
                    View the Tesla collection
                </Link>
            </div>

            <div className="">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-bold text-xs">
                            Description
                        </AccordionTrigger>
                        <AccordionContent className="text-xs">
                            The 2021 Tesla Model 3 offers sleek design,
                            impressive electric range, and cutting-edge
                            technology in a compact sedan package.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-bold text-xs">
                            Product Highlights
                        </AccordionTrigger>
                        <AccordionContent className="text-xs">
                            The 2021 Tesla Model 3 boasts impressive electric
                            range, quick acceleration, and a minimalist interior
                            with a large touchscreen display.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3 " className="border-none">
                        <AccordionTrigger className="font-bold text-xs ">
                            Delivery & Warranty
                        </AccordionTrigger>
                        <AccordionContent className="text-xs ">
                            The 2021 Tesla Model 3 offers delivery options and a
                            warranty package that includes four years or 50,000
                            miles of coverage for the vehicle and eight years or
                            100,000 miles for the battery and drive unit.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};
export default CarInfoPage;
