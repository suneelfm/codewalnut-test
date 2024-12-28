import { MouseEventHandler, ReactNode } from "react";

interface ICustomButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary"; // For the color of the button
  disabled?: boolean;
}

export default function CustomButton(props: ICustomButtonProps) {
  const { children, variant = "primary", ...rest } = props;
  return (
    <button
      {...rest}
      className={`flex px-4 py-2 text-sm font-medium ${
        variant === "primary"
          ? "text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300"
          : "text-gray-700 bg-gray-100 hover:bg-gray-200  disabled:bg-gray"
      } rounded-md transition-colors`}
    >
      {children}
    </button>
  );
}
