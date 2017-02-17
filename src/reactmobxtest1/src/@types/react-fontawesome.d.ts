// Modified https://github.com/DefinitelyTyped/DefinitelyTyped version to support ES6 import syntax

// Type definitions for react-fontawesome 1.1
// Project: https://github.com/danawoodman/react-fontawesome
// Definitions by: Timur Rustamov <https://github.com/timurrustamov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare module 'react-fontawesome' {
  //Import react
  import * as React from 'react';

  type FontAwesomeSize = 'lg' | '2x' | '3x' | '4x' | '5x';

  interface FontAwesomeProps {
    border?: boolean,
    cssModule?: string,
    className?: string,
    fixedWidth?: boolean,
    flip?: boolean,
    inverse?: boolean
    name: string,
    pulse?: boolean,
    rotate?: number,
    size?: FontAwesomeSize,
    spin?: boolean,
    stack?: string,
    style?: React.CSSProperties
  }

  export default class FontAwesome extends React.Component<FontAwesomeProps, {}> {}
}
