import * as React from "react";


export interface IBaseFC<T> {
    children: React.ReactNode | ((props: T) => React.ReactNode)
}