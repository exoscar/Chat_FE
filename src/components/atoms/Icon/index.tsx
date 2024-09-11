import React from "react";
import { IconContainer } from "./style";

type IconProps = {
  icon: string;
  weight?: number;
  size?: number;
  color?: string;
  cursor?: string;
  onClick?: () => void;
};

export const Icon: React.FC<IconProps> = ({
  icon,
  weight,
  size,
  color,
  cursor,
  onClick,
}) => {
  return (
    <IconContainer
      weight={weight}
      size={size}
      color={color}
      cursor={cursor}
      onClick={onClick}
    >
      {icon}
    </IconContainer>
  );
};
