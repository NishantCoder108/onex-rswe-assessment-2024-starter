import dieselFuel from "@/assests/diesel-fuel.svg";
import automaticTransmission from "@/assests/automatic-transmission.svg";
import miles from "@/assests/Vector.svg";
import displacement from "@/assests/displacement.svg";

export const aboutData = [
    {
        imgUrl: dieselFuel,
        label: "Fuel",
        value: "Diesel Fuel",
    },
    {
        label: "Transmission",
        imgUrl: automaticTransmission,
        value: "Automatic Transmission",
    },
    {
        label: "Miles",
        imgUrl: miles,
        value: "11,594 Miles",
    },
    {
        label: "Displacement",
        imgUrl: displacement,
        value: "3.5L Displacement",
    },
];

export const specificationData = {
    Exterior: {
        ["Body Style"]: "Hatchback",
        ["Exterior Colour"]: "Blue",
        ["Length"]: "175″",
        ["Wheelbase"]: "106″",
        ["Width"]: "69.7″",
        ["Clearance"]: "6″",
        ["Full Width"]: "N/A",
    },
    Interior: {
        ["Seating"]: "5 adults",
        ["Interior Colour"]: "N/A",
        ["Head Room Front"]: "41″",
        ["Head Room Rear"]: "37″",
        ["Leg Room Front"]: "42″",
        ["Leg Room Rear"]: "33″",
        ["Shoulder Room Front"]: "54″",
    },
    ["BEV Performance"]: {
        ["Horsepower"]: "107 hp",
        ["MPGe"]: "102",
        ["Top Speed"]: "90 mph",
    },
    Charging: {
        ["Electric Range"]: "73 Mi.",
        ["Battery Size"]: "24 kWh",
        ["Cost to charge (full)"]: "$2.50",
    },
};
