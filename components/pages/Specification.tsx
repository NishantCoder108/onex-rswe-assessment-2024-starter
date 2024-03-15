import Link from "next/link";
import React from "react";
import AppButton from "../common/AppButton";
import { ArrowRightIcon } from "lucide-react";

type KeyValuePairs = Record<string, string | number>;

interface ISpecification {
    Exterior: KeyValuePairs;
    Interior: KeyValuePairs;
    ["BEV Performance"]?: KeyValuePairs;
    Charging?: KeyValuePairs;
}

interface IProps {
    specificationData: ISpecification;
}
const Specification = ({ specificationData }: IProps) => {
    const {
        Exterior,
        Interior,
        "BEV Performance": BevPerformance,
        Charging,
    } = specificationData;
    return (
        <div className=" bg-[#FBFCFE] px-14 py-12">
            <p className="font-bold text-2xl mb-12">Specifications</p>

            <div className="flex flex-wrap gap-40 justify-beween">
                <div className="w-full sw:w-1/2 md:w-1/4   flex flex-col gap-4">
                    {!!Exterior && (
                        <>
                            <h1 className="font-semibold">Exterior</h1>

                            {Object.entries(Exterior).map(([key, value]) => (
                                <div
                                    key={key}
                                    className="flex items-center flex-nowrap justify-between"
                                >
                                    <p>{key}</p>
                                    <p>{value}</p>
                                </div>
                            ))}
                        </>
                    )}
                </div>

                <div className="w-full sm:w-1/2 md:w-1/4   flex flex-col gap-4">
                    {!!Interior && (
                        <>
                            <h1 className="font-semibold">Interior</h1>

                            {Object.entries(Interior).map(([key, value]) => (
                                <div
                                    key={key}
                                    className="flex items-center flex-nowrap justify-between"
                                >
                                    <p>{key}</p>
                                    <p>{value}</p>
                                </div>
                            ))}
                        </>
                    )}

                    <div>
                        <Link
                            href="#"
                            className="text-xs  text-[#0036c3] flex items-center gap-2"
                        >
                            <span> Show more </span>{" "}
                            <ArrowRightIcon size={12} />
                        </Link>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col gap-12 ">
                    <div className="w-full flex flex-col gap-4">
                        {!!BevPerformance && (
                            <>
                                <h1 className="font-semibold">
                                    BEV Performance
                                </h1>

                                {Object.entries(BevPerformance).map(
                                    ([key, value]) => (
                                        <div
                                            key={key}
                                            className="flex items-center flex-nowrap justify-between"
                                        >
                                            <p>{key}</p>
                                            <p>{value}</p>
                                        </div>
                                    )
                                )}
                            </>
                        )}
                    </div>

                    <div className="w-full flex flex-col gap-4">
                        {!!Charging && (
                            <>
                                <h1 className="font-semibold">Charging</h1>

                                {Object.entries(Charging).map(
                                    ([key, value]) => (
                                        <div
                                            key={key}
                                            className="flex items-center flex-nowrap justify-between"
                                        >
                                            <p>{key}</p>
                                            <p>{value}</p>
                                        </div>
                                    )
                                )}
                            </>
                        )}

                        <div>
                            <Link
                                href="#"
                                className="text-xs underline text-[#0036c3]"
                            >
                                Show more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center py-16">
                <AppButton
                    variant="outline"
                    className="text-[#0036c3] text-xs border border-[#0036c3]"
                    btnText="Show all specifications"
                />
            </div>
        </div>
    );
};

export default Specification;
