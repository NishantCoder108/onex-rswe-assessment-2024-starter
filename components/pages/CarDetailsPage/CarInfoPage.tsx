import AppSelectColor from "@/components/common/AppSelectColor";
import StarRating from "@/components/common/StarRating";
import { Badge } from "@/components/ui/badge";
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
        </div>
    );
};
export default CarInfoPage;
