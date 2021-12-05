import { lazy, LazyExoticComponent } from "react";
import { NoLazyComponent } from "../lazy-load-module/pages/NoLazyComponent";

type JSXComponent = () => JSX.Element
interface Route {
        path: string,
        to: string,
        Component: LazyExoticComponent<JSXComponent>  | JSXComponent,
        name: string
}

const LazyLayout = lazy(()=> import(/* webpackChunkName: "lazyLayout" */'../lazy-load-module/layout/LazyLayout'))

export const routes: Route[] = [
    {
        path: '/lazyLayout/*',
        to: '/lazyLayout/',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },{
        path: 'Nolazy',
        to: '/Nolazy',
        Component: NoLazyComponent,
        name: 'Nolazy'
    }
]