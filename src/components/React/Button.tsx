import { useState, type ReactNode } from "react";

interface Button {
  toggel: () => void;
  className?: string;
  children: ReactNode;
}

export const Button = ({ className, children, toggel }: Button) => {
  return (
    <button onClick={toggel} className={` cursor-pointer ${className}`}>
      {children}
    </button>
  );
};
