import React from "react";
import { Skeleton } from "../ui/skeleton";

const AppSkeleton = () => {
    return (
        <div className="flex flex-col items-center justify-start md:flex-row md:items-start ">
            <div className="flex flex-col space-y-3 p-14">
                <Skeleton className="h-[50vh] w-[65vw] rounded" />
                <div className="space-y-2">
                    <div className="flex items-center justify-center w-[65vw]">
                        <Skeleton className="h-16 w-[35vw]" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col space-y-3 p-14">
                <Skeleton className="h-6 w-[15vw]" />
                <Skeleton className="h-9 w-[15vw]" />
                <Skeleton className="h-4 w-[15vw]" />
                <Skeleton className="h-4 w-[15vw]" />
                <Skeleton className="h-12 w-[15vw]" />
                <div className="space-y-2">
                    <div className="flex flex-col space-y-6 items-center justify-center w-[15vw]">
                        <Skeleton className="h-6 w-[15vw]" />
                        <Skeleton className="h-6 w-[15vw]" />
                        <Skeleton className="h-6 w-[15vw]" />
                        <Skeleton className="h-6 w-[15vw]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppSkeleton;
