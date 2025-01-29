import classNames from 'classnames';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

const BUTTON_VARIANTS = {
  primary:
    'bg-buttonBgPrimary border border-solid border-borderPrimary rounded-xl text-background dark:text-foreground',
  secondary:
    'bg-buttonBgSecondary border border-solid border-borderSecondary rounded-xl text-foreground',
};

export const Button = ({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const buttonClassNames = BUTTON_VARIANTS[variant];

  return (
    <button
      {...props}
      className={classNames(buttonClassNames, 'py-3 px-4', className)}
    >
      {children}
    </button>
  );
};
