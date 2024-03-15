import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import { ThumbCarousel } from "./ThumbCarousel";
import { useCallback, useEffect, useState } from "react";

interface ICarCarousel {
    id: number;
    imgSrc: StaticImageData;
    alt: string;
}

interface IProps {
    carCarousel: ICarCarousel[];
}

const CarImgCarousel = ({ carCarousel }: IProps) => {
    const [api, setApi] = useState<CarouselApi>();
    const [selectedCarousel, setSelectedCarousel] = useState(0);

    const onThumbClick = useCallback(
        (index: number) => {
            if (!api) return;

            api.scrollTo(index);
            setSelectedCarousel(index);
        },
        [api]
    );

    useEffect(() => {
        if (!api) return;

        const handleSelect = () => {
            const selectedIdx = api.selectedScrollSnap();
            setSelectedCarousel(selectedIdx);
        };

        api.on("select", handleSelect);

        return () => {
            api.off("select", handleSelect);
        };
    }, [api]);

    if (!carCarousel) return "Loading...";

    return (
        <div className="flex items-center justify-evenly mt-12 flex-col ">
            <Carousel
                setApi={setApi}
                className="w-full max-w-xs sm:max-w-sm  md:max-w-xl  xl:max-w-3xl"
            >
                <CarouselContent>
                    {carCarousel.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card className="outline-none border-none shadow-none bg-transparent">
                                    <CardContent className="flex relative aspect-video items-center justify-center p-6">
                                        <Image
                                            src={item.imgSrc}
                                            alt={item.alt}
                                        />
                                        <div className="absolute inset-0 bg-[#FBFCFE] opacity-50"></div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="bg-[#DDFFF7]" />
                <CarouselNext className="bg-[#DDFFF7]" />
            </Carousel>
            <div className="flex  gap-4">
                {carCarousel.map((item, index) => (
                    <ThumbCarousel
                        key={index}
                        onClick={() => onThumbClick(index)}
                        selected={index === selectedCarousel}
                        index={index}
                        item={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarImgCarousel;
