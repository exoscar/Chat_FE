import { Typography as GTypography, TypographyProps } from "@mui/material";

interface CustomTypographyProps extends TypographyProps {
  children: React.ReactNode;
}

const Typography: React.FC<CustomTypographyProps> = ({
  children,
  fontSize = 16,
  fontWeight = "normal",
  color = "initial",
  ...props
}) => {
  return (
    <GTypography
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      {...props}
    >
      {children}
    </GTypography>
  );
};

export default Typography;
