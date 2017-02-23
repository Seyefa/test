import 'react';

declare module 'react' {
    interface HTMLAttributes<T> {
        styleName?: string;
    }
}