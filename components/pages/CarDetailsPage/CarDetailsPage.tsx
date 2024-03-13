import React from "react";
import CarImgCarousel from "./CarImgCarousel";
import CarInfoPage from "./CarInfoPage";

const CarDetailsPage = () => {
    return (
        <div>
            <div className="flex flex-col sm:flex-row">
                <div className="sm:w-3/4 w-full bg-[#FBFCFE] h-screen">
                    <CarImgCarousel />
                </div>

                <div className="sm:w-1/4 w-full bg-green-600 mt-4 sm:mt-0">
                    <CarInfoPage />
                </div>
            </div>
        </div>
    );
};

export default CarDetailsPage;
