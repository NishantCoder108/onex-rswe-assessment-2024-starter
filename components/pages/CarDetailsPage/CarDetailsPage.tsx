"use client";
import React from "react";
import CarImgCarousel from "./CarImgCarousel";
import CarInfoPage from "./CarInfoPage";
import About from "../About/About";
import Specification from "../Specification";
import { specificationData } from "@/lib/data";

const CarDetailsPage = () => {
    const {
        Exterior,
        Interior,
        "BEV Performance": BevPerformance,
        Charging,
    } = specificationData;

    return (
        <div>
            <div className="flex flex-col sm:flex-row">
                <div className="sm:w-4/6 w-full bg-[#FBFCFE] ">
                    <CarImgCarousel />
                </div>

                <div className="sm:w-1/3 w-full mt-4 sm:mt-0">
                    <CarInfoPage />
                </div>
            </div>
            <About />
            <Specification
                Exterior={Exterior}
                Interior={Interior}
                Charging={Charging}
                BevPerformance={BevPerformance}
            />
        </div>
    );
};

export default CarDetailsPage;
