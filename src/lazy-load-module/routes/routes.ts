import {  LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";


type JSXComponent = () => JSX.Element
interface Route {
        path: string,
        to: string,
        Component: LazyExoticComponent<JSXComponent>  | JSXComponent,
        name: string
}

export const routes: Route[] = [
    {
        path: 'lazy1',
        to: '/lazy1',
        Component: LazyPage1,
        name: 'Lazy1'
    }, {
        path: 'lazy2',
        to: '/lazy2',
        Component: LazyPage2,
        name: 'Lazy2'
    }, {
        path: 'lazy3',
        to: '/lazy3',
        Component: LazyPage3,
        name: 'Lazy3'
    }
]