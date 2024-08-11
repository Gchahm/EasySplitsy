import * as React from "react";

export interface IPersonaProps {
    name: string;
    subText?: string | React.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
}