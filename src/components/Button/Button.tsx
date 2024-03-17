import './Button.css';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  variant: 'primary' | 'secondary';
};

const Button = ({ variant, ...props }: ButtonProps) => {
  return (
    <button
      style={{
        background: variant === 'primary' ? '#7676c9' : '#dc9d54',
        padding: '1rem',
        borderRadius: '0.5rem',
        cursor: 'pointer',
      }}
      className='button'
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
