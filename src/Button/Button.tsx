import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
} & JSX.IntrinsicElements["button"];

export const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};
