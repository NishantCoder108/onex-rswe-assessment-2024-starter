import dieselFuel from "@/assests/diesel-fuel.svg";
import automaticTransmission from "@/assests/automatic-transmission.svg";
import miles from "@/assests/Vector.svg";
import displacement from "@/assests/displacement.svg";
import silverCar1 from "@/assests/cars/silver-car1.png";

export const carCarouselList = [
    {
        id: 1,
        imgSrc: silverCar1,
        alt: "silver car 1",
    },
    {
        id: 2,
        imgSrc: silverCar1,
        alt: "silver car 1",
    },
    {
        id: 3,
        imgSrc: silverCar1,
        alt: "silver car 1",
    },
    {
        id: 4,
        imgSrc: silverCar1,
        alt: "silver car 1",
    },
    {
        id: 5,
        imgSrc: silverCar1,
        alt: "silver car 1",
    },
];

export const carInfoDetails = {
    isNew: true,
    name: "2021 Tesla Model 3",
    vin: "JN1AZ0CPOBT009448",
    rating: 5,
    price: "41,103",
    priceSymbol: "$",
    availableColor: [
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
    ],

    estimateTime: "16 Aug - 23 Aug",
    moto: "Tesla believes in accelerating the world's transition to sustainable energy with electric cars.",

    viewCollection: "View the Tesla collection",
    viewCollectionUrl: "#",
    carDetails: [
        {
            key: "Description",
            desc: `The 2021 Tesla Model 3 offers sleek design,
            impressive electric range, and cutting-edge
            technology in a compact sedan package.`,
        },
        {
            key: "Product Highlights",
            desc: `The 2021 Tesla Model 3 boasts impressive electric
            range, quick acceleration, and a minimalist interior
            with a large touchscreen display.`,
        },
        {
            key: "Delivery & Warranty",
            desc: `The 2021 Tesla Model 3 offers delivery options and a
            warranty package that includes four years or 50,000
            miles of coverage for the vehicle and eight years or
            100,000 miles for the battery and drive unit.`,
        },
    ],
};

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
