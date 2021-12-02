import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element
interface Route {
        path: string,
        to: string,
        Component: LazyExoticComponent<JSXComponent>  | JSXComponent,
        name: string
}

const Lazy1 = lazy(()=> import(/* webpackChunkName: "lazy1" */'../lazy-load-module/pages/LazyPage1'))
const Lazy2 = lazy(()=> import(/* webpackChunkName: "lazy2" */'../lazy-load-module/pages/LazyPage2'))
const Lazy3 = lazy(()=> import(/* webpackChunkName: "lazy3" */'../lazy-load-module/pages/LazyPage3'))

export const routes: Route[] = [
    {
        path: 'lazy1',
        to: '/lazy1',
        Component: Lazy1,
        name: 'Lazy-1'
    },{
        path: 'lazy2',
        to: '/lazy2',
        Component: Lazy2,
        name: 'Lazy-2'
    },{
        path: 'lazy3',
        to: '/lazy3',
        Component: Lazy3,
        name: 'Lazy-3'
    }
]