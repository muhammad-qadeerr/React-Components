// Exercise: Create a Bootstrap Button Component.

import React from "react";

interface Props {
  children: string;
  color?: string; // Optional Property - we can also set supported values here instead of string as 'primary' | 'secondary' | 'danger'
  onClick: () => void;
}

export const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
