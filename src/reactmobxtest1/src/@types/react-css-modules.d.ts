// Modified https://github.com/DefinitelyTyped/DefinitelyTyped version to support ES6 import syntax

// Type definitions for react-css-modules 3.7.9
// Project: https://github.com/gajus/react-css-modules
// Definitions by: Kostya Esmukov <https://github.com/KostyaEsmukov>, Tadas Dailyda <https://github.com/skirsdeda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

interface TypeOptions {
    allowMultiple?: boolean;
    errorWhenNotFound?: boolean;
}

type StylesObject = any;

interface CSSModules {
    (defaultStyles: StylesObject, options?: TypeOptions): <C extends Function>(Component: C) => C;
    <C extends Function>(Component: C, defaultStyles: StylesObject, options?: TypeOptions): C;
}

declare module CSSModules {
    // Extend your component's Prop interface with this one to get access to `this.props.styles`
    //
    // interface MyComponentProps extends CSSModules.InjectedCSSModuleProps {}
    interface InjectedCSSModuleProps {
        styles?: StylesObject;
    }
}

declare let CSSModules: CSSModules;

declare module 'react-css-modules' {
    export default CSSModules;
}

// declare module 'react' {
//     interface HTMLAttributes<T> {
//         styleName?: string;
//     }
// }