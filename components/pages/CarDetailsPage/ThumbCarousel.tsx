import Image, { StaticImageData } from "next/image";
import React from "react";
import silverCar2 from "@/assests/cars/silver-car2.png";

type PropType = {
    selected: boolean;
    index: number;
    onClick: () => void;
    item: {
        id: number;
        imgSrc: StaticImageData;
        alt: string;
    };
};

export const ThumbCarousel: React.FC<PropType> = (props) => {
    const { selected, index, onClick, item } = props;

    return (
        <div>
            <button
                onClick={onClick}
                type="button"
                className={`rounded-md border-2 aspect-square  w-14 h-14 ${
                    selected ? "  border-[#4dffd5]" : "border-gray-300"
                }`}
            >
                {!selected ? (
                    <Image
                        src={silverCar2}
                        alt="silver car"
                        className="w-full"
                        priority
                    />
                ) : (
                    <Image src={item.imgSrc} alt={item.alt} priority />
                )}
            </button>
        </div>
    );
};
