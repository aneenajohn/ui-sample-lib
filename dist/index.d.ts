/// <reference types="react" />
import * as react_jsx_runtime from 'react/jsx-runtime';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
    variant: 'primary' | 'secondary';
};
declare const Button: ({ variant, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

export { Button };
