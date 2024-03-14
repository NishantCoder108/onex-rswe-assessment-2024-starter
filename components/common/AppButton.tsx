import React from "react";
import { Button } from "../ui/button";

interface IButton {
    btnText: string;
    className?: string;
}
const AppButton = ({ btnText, className }: IButton) => {
    return (
        <div>
            <Button className={className}>{btnText}</Button>
        </div>
    );
};

export default AppButton;
