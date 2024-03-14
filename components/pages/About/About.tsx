import React from "react";
import automaticTransmission from "@/assests/automatic-transmission.svg";
import dieselFuel from "@/assests/diesel-fuel.svg";
import displacement from "@/assests/displacement.svg";
import miles from "@/assests/Vector.svg";
import Image from "next/image";

const About = () => {
    return (
        <div className="h-72 bg-[#FBFCFE] px-14 py-12">
            <p className="font-bold text-2xl mb-12">About this car</p>

            <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                    <Image src={dieselFuel} alt="diesel fuel" />
                    <p className="font-medium">Diesel Fuel</p>
                </div>
                <div className="flex items-start gap-4">
                    <Image
                        src={automaticTransmission}
                        alt="Automatic Transmission"
                    />
                    <p className="font-medium">Automatic Transmission</p>
                </div>
                <div className="flex items-start gap-4">
                    <Image src={miles} alt="diesel fuel" />
                    <p className="font-medium">11,594 Miles</p>
                </div>
                <div className="flex items-start gap-4">
                    <Image src={displacement} alt="diesel fuel" />
                    <p className="font-medium">Displacement</p>
                </div>
            </div>
        </div>
    );
};

export default About;
