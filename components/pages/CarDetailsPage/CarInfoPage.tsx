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
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface IAvailableColor {
    hexColor: string;
    color: string;
}

interface ICarDetails {
    key: string;
    desc: string;
}

interface ICarInfoPage {
    isNew: boolean;
    availableColor: IAvailableColor[];
    estimateTime: string;

    moto?: string;
    name: string;
    price: string;
    priceSymbol: string;
    rating?: number;
    viewCollection?: string;
    viewCollectionUrl?: string;
    vin: string;
    carDetails?: ICarDetails[];
}

interface IProps {
    carInfo: ICarInfoPage;
}

const CarInfoPage = ({ carInfo }: IProps) => {
    const {
        isNew,
        availableColor,
        estimateTime,
        moto,
        name,
        price,
        priceSymbol,
        rating,
        viewCollection,
        viewCollectionUrl,
        vin,
        carDetails,
    } = carInfo;

    return (
        <div className="  h-full pt-9 px-8">
            <div className=" border-b border-[#BDBDBD] ">
                {!!isNew && (
                    <Badge className="bg-[#DDFFF7] text-[#0036C3] mb-3 hover:text-white">
                        NEW
                    </Badge>
                )}

                <p className="text-2xl font-bold ">{name}</p>
                <p className="text-xs my-1">
                    <span className="text-gray-400 pr-3">VIN</span>
                    {vin}
                </p>

                <StarRating rating={rating || 0} />
                <p className=" font-semibold text-lg pb-4 pt-3">
                    {priceSymbol}
                    {price}
                </p>
            </div>

            <div>
                <p className="font-bold my-4">Colour</p>
                <AppSelectColor availableColor={availableColor} />
            </div>

            <div className="my-12 text-center">
                <AppButton
                    className="bg-[#0036C3] hover:bg-blue-500 w-full text-[#00F3B9] hover:text-white"
                    btnText="Order Now"
                />

                {!!estimateTime && (
                    <p className="text-xs my-4 text-gray-400">
                        Estimated within {estimateTime}
                    </p>
                )}
            </div>

            {!!moto && viewCollectionUrl && (
                <div className="border-b border-[#bdbdbd95] pb-7">
                    <p className="font-semibold text-xl pb-4 pt-2 ">{moto}</p>
                    <Link
                        className="underline text-[#0036C3]"
                        href={viewCollectionUrl}
                    >
                        {viewCollection}
                    </Link>
                </div>
            )}

            <div className="">
                <Accordion type="single" collapsible>
                    {!!carDetails &&
                        carDetails.map((item, index) => (
                            <AccordionItem
                                key={item.key}
                                value={item.key}
                                className={cn(
                                    index === carDetails.length - 1 &&
                                        "border-none"
                                )}
                            >
                                <AccordionTrigger className="font-bold text-xs">
                                    {item.key}
                                </AccordionTrigger>
                                <AccordionContent className="text-xs">
                                    {item.desc}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                </Accordion>
            </div>
        </div>
    );
};
export default CarInfoPage;
