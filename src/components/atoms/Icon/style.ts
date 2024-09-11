import styled from "@emotion/styled";

interface IconContainerProps {
  weight?: number;
  size?: number;
  color?: string;
  cursor?: string;
}

export const IconContainer = styled.i<IconContainerProps>`
  font-family: "Material Symbols Rounded";
  font-variation-settings: "FILL" 1, "wght" ${({ weight }) => weight || 100},
    "GRAD" 0, "opsz" ${({ size }) => size || 24};
  font-style: normal;
  font-size: ${({ size }) => size || 24}px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
  color: ${({ color }) => color || "#000000"};
  cursor: ${({ cursor }) => cursor || "default"};
`;
