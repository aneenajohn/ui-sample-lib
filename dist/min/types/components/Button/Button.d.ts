/// <reference types="react" />
type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
    variant: 'primary' | 'secondary';
};
declare const Button: ({ variant, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
