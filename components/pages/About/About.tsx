import React from "react";
import Image from "next/image";

interface IAbout {
    imgUrl: string;
    label: string;
    value: string;
}

interface IAboutProps {
    aboutData: IAbout[];
}
const About = ({ aboutData }: IAboutProps) => {
    return (
        <div className="h-72 bg-[#FBFCFE] px-14 py-12">
            <p className="font-bold text-2xl mb-12">About this car</p>

            <div className="flex items-center justify-between gap-1 flex-wrap">
                {!!aboutData &&
                    aboutData.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-start gap-4 mb-3"
                        >
                            <Image src={item.imgUrl} alt={item.label} />
                            <p className="font-medium">{item.value}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default About;
