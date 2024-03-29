"use client";
import React from "react";
import CarImgCarousel from "./CarImgCarousel";
import CarInfoPage from "./CarInfoPage";
import About from "../About/About";
import Specification from "../Specification";
import {
    aboutData,
    carCarouselList,
    carInfoDetails,
    specificationData,
} from "@/lib/data";
import AppSkeleton from "@/components/common/AppSkeleton";

const CarDetailsPage = () => {
    if (
        !carCarouselList ||
        !specificationData ||
        !aboutData ||
        !carInfoDetails
    ) {
        return <AppSkeleton />;
    }

    return (
        <div>
            <div className="flex flex-col sm:flex-row">
                <div className="sm:w-4/6 w-full bg-[#FBFCFE] ">
                    <CarImgCarousel carCarousel={carCarouselList} />
                </div>

                <div className="sm:w-1/3 w-full mt-4 sm:mt-0">
                    <CarInfoPage carInfo={carInfoDetails} />
                </div>
            </div>
            <About aboutData={aboutData} />
            <Specification specificationData={specificationData} />
        </div>
    );
};

export default CarDetailsPage;
