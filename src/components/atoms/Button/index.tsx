import { ButtonBaseProps } from "@mui/material";
import { Button as MuiButton } from "./style";

interface ButtonProps extends ButtonBaseProps {
  children: React.ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "inherit"
    | "error"
    | "warning"
    | "info";
  variant?: "text" | "outlined" | "contained";
  disabled?: boolean;
  onClick?: () => void;
  fullwidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  color = "secondary",
  variant = "contained",
  disabled = false,
  onClick,
  fullwidth = false,
  ...props
}) => {
  return (
    <MuiButton
      className="custom-btn"
      color={color}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      fullWidth={fullwidth}
      {...props}
    >
      {children}
    </MuiButton>
  );
};
