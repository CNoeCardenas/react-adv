import { FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage } from "../forms/pages";
import { lazy, LazyExoticComponent } from "react";
import { NoLazyComponent } from "../lazy-load-module/pages/NoLazyComponent";
import { RegisterFormikPage } from "../forms/pages/RegisterFormikPage";
import { DynamicForm } from "../forms/pages/DynamicForm";

type JSXComponent = () => JSX.Element
interface Route {
    path: string,
    to: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "lazyLayout" */'../lazy-load-module/layout/LazyLayout'))

export const routes: Route[] = [
    {
        path: '/lazyLayout/*',
        to: '/lazyLayout/',
        Component: LazyLayout,
        name: 'Lazy Layout'
    }, {
        path: 'Nolazy',
        to: '/Nolazy',
        Component: NoLazyComponent,
        name: 'Nolazy'
    }
    , {
        path: 'RegisterPage',
        to: '/RegisterPage',
        Component: RegisterPage,
        name: 'SignUp'
    },
    {
        path: 'FormikBasic',
        to: '/FormikBasic',
        Component: FormikBasicPage,
        name: 'Formik Basic'
    },
    {
        path: 'FormikYup',
        to: '/FormikYup',
        Component: FormikYupPage,
        name: 'Formik Yup'
    },
    {
        path: 'FormikComponents',
        to: '/FormikComponents',
        Component: FormikComponents,
        name: 'Formik Components'
    },
    {
        path: 'FormikAbstraction',
        to: '/FormikAbstraction',
        Component: FormikAbstraction,
        name: 'Formik Abstraction'
    },
    {
        path: 'RegisterFormikPage',
        to: '/RegisterFormikPage',
        Component: RegisterFormikPage,
        name: 'Register Formik'
    },
    {
        path: 'DynamicForm',
        to: '/DynamicForm',
        Component: DynamicForm,
        name: 'Dynamic Formik'
    }
]