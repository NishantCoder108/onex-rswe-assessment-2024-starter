import React from "react";
import { Button } from "../ui/button";

interface IButton {
    btnText: string;
    className?: string;
    variant?:
        | "link"
        | "default"
        | "destructive"
        | "outline"
        | "secondary"
        | "ghost"
        | null;
}
const AppButton = ({ btnText, className, ...props }: IButton) => {
    return (
        <div>
            <Button {...props} className={className}>
                {btnText}
            </Button>
        </div>
    );
};

export default AppButton;
