import React from "react";
import {BoxProps} from "@mui/material";

export interface IContainerProps extends BoxProps  {
    children: React.ReactNode,
}