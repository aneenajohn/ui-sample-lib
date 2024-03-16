type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  variant: 'primary' | 'secondary';
};

const Button = ({ variant, ...props }: ButtonProps) => {
  return (
    <button
      style={{
        background: variant === 'primary' ? 'blue' : 'red',
        padding: '1rem',
      }}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
