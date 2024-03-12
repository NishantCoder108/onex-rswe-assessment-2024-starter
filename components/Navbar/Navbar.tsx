"use client";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import logo from "../../public/assests/logo.svg";
import singaporeFlag from "../../public/assests/singapore-flag.svg";
import indianFlag from "../../public/assests/indiaFlag.png";
import Link from "next/link";
import AppButton from "../common/AppButton";
import NavListItem from "./NavbarListItem";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

const Navbar = () => {
    const components = [
        {
            title: "Beginner's Guide to EVs",
            href: "#",
            description:
                " An introduction to electric vehicles, their technology, and benefits.",
        },
        {
            title: "EV Charging Guide",
            href: "#",
            description:
                "Information on charging infrastructure, home, and public charging.",
        },
        {
            title: "Driving an EV: Tips and Tricks",
            href: "#",
            description:
                " Advice on driving techniques to maximize your electric vehicle's range.",
        },
        {
            title: "Environmental Benefits of EVs",
            href: "#",
            description:
                " How electric vehicles contribute to reducing emissions and improving air quality.",
        },
    ];
    return (
        <div className=" py-6 px-3 sm:px-32">
            <div className="flex justify-between items-center   ">
                <div className="flex gap-3 flex-col md:flex-row flex-wrap">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Image
                                    className="min-w-max hover:cursor-pointer"
                                    src={logo}
                                    alt="Logo"
                                />
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="hover:bg-transparent font-semibold">
                                    Find EV Cars
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink className="px-2 py-1 block">
                                        <Link
                                            href="#"
                                            className="block min-w-max px-1 py-1 text-sm hover:text-gray-600 font-semibold hover:underline"
                                        >
                                            Tesla Model 3
                                        </Link>
                                        <Link
                                            href="#"
                                            className="block min-w-max px-1 py-1 text-sm hover:text-gray-600 font-semibold hover:underline"
                                        >
                                            Jaguar I-PACE
                                        </Link>
                                        <Link
                                            href="#"
                                            className="block min-w-max px-1 py-1 text-sm hover:text-gray-600 font-semibold hover:underline"
                                        >
                                            Porsche Taycan
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="hover:bg-transparent font-semibold">
                                    EV Guides
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {components.map((component) => (
                                            <NavListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </NavListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex gap-1 md:gap-3 ">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Select defaultValue="SG">
                                    <SelectTrigger className="w-16 outline-none border-none">
                                        <SelectValue placeholder="country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="IN">
                                                <Image
                                                    src={indianFlag}
                                                    width={20}
                                                    alt="IN Flag"
                                                    priority={true}
                                                />
                                            </SelectItem>
                                            <SelectItem value="SG">
                                                <Image
                                                    src={singaporeFlag}
                                                    width={20}
                                                    alt="SG Flag"
                                                    priority={true}
                                                />
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <NavigationMenu>
                        <AppButton
                            variant="hover"
                            className="rounded-md text-sm font-semibold"
                            size={"button"}
                        >
                            Log In/ Sign Up
                        </AppButton>
                    </NavigationMenu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
