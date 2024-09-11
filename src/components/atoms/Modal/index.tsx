import React from "react";
import { ModalProps } from "@mui/material";
import { CustomModal as GModal } from "./style";

interface CustomModalProps extends ModalProps {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

export const Modal: React.FC<CustomModalProps> = ({
  open = false,
  onClose,
  children,
  ...props
}) => {
  return (
    <GModal open={open} onClose={onClose} {...props} className="">
      {children}
    </GModal>
  );
};
