import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { cn } from "@/lib/utils";

const AppSelectColor = () => {
    const listColor = [
        {
            hexColor: "#0036C3",
            color: "blue",
        },
        {
            hexColor: "#D43A55",
            color: "red",
        },
        {
            hexColor: "#030303",
            color: "black",
        },
        {
            hexColor: "#00ff11",
            color: "green",
        },
        {
            hexColor: "#FFFFFF",
            color: "silver",
        },
    ];

    const [selectedColor, setSelectedColor] = useState(listColor[4].color);

    const handleColorChange = (color: string) => {
        console.log({ color });
        setSelectedColor(color);
    };

    console.log("Selected Color :", selectedColor);

    return (
        <div>
            <RadioGroup
                defaultValue={selectedColor}
                className="flex items-center justify-between "
            >
                <div className="flex gap-4 items-center justify-items-center">
                    {listColor.map((item, index) => (
                        <div
                            key={index}
                            className={cn(
                                "border-2 rounded-full border-transparent flex items-center justify-center",
                                selectedColor === item.color &&
                                    "border-[#47ffd4] "
                            )}
                        >
                            <div className="flex border-2 border-transparent rounded-full  ">
                                <RadioGroupItem
                                    value={item.color}
                                    className={cn("w-5 h-5 border-gray-300")}
                                    style={{ backgroundColor: item.hexColor }}
                                    id={item.color}
                                    onClick={() =>
                                        handleColorChange(item.color)
                                    }
                                    checked={false}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <p className="font-bold text-xs">
                    {selectedColor?.toUpperCase()}
                </p>
            </RadioGroup>
        </div>
    );
};

export default AppSelectColor;
