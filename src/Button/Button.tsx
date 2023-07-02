import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
} & JSX.IntrinsicElements["button"];

const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default Button
