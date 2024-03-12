import Link from "next/link";
import { NavigationMenuLink } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface IListItem {
    className?: string;
    title: string;
    href: string;
    children: ReactNode;
}
const NavListItem = ({ className, title, children, href }: IListItem) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    href={href}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
};
export default NavListItem;
