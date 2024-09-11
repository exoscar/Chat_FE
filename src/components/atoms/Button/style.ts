import styled from "@emotion/styled";
import { Button as MuiButton } from "@mui/material";

export const Button = styled(MuiButton)`
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  /* background-color: ${(props) => props.theme.palette.primary.main}; */
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${(props) => props.theme.palette.primary.dark};
  }
`;
