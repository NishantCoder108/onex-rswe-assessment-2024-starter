"use client";
import React from "react";
import CarImgCarousel from "./CarImgCarousel";
import CarInfoPage from "./CarInfoPage";

const CarDetailsPage = () => {
    return (
        <div>
            <div className="flex flex-col sm:flex-row">
                <div className="sm:w-4/6 w-full bg-[#FBFCFE] h-screen">
                    <CarImgCarousel />
                </div>

                <div className="sm:w-1/3 w-full mt-4 sm:mt-0">
                    <CarInfoPage />
                </div>
            </div>
        </div>
    );
};

export default CarDetailsPage;
