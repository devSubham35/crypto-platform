import React, { MouseEvent } from 'react';
import clsx from 'clsx';
import { BiLoaderAlt } from "react-icons/bi";


interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  variant?: 'outlined' | 'filled';
  loading?: boolean
}

const CustomButton = ({
  children,
  className,
  loading = false,
  variant = 'outlined',
  ...props
}: CustomButtonProps) => {
  const baseClasses =
    'whitespace-nowrap customBorderGradient flex justify-center items-center py-[14px] px-[2rem] rounded-full font-semibold text-[0.8rem] text-white/90 relative overflow-hidden';
  const outlinedStyles = 'text-white';
  const filledStyles = 'bg-gradient-to-br from-[#26a4ce] via-[#b257c25b] to-[#b820e69f]';

  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple-effect');

    const ripple = button.getElementsByClassName('ripple-effect')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <button
      className={clsx(
        baseClasses,
        variant === 'outlined' ? outlinedStyles : filledStyles,
        loading ? "opacity-30" : "",
        'ripple',
        className
      )}
      // disabled={loading ?? props?.disabled}
      onClick={(e) => {
        createRipple(e);
        props.onClick?.(e);
      }}
      {...props}
    >
      {loading ? <BiLoaderAlt className='text-xl animate-spin my-[4px]' /> : children}
    </button>
  );
};

export default CustomButton;
