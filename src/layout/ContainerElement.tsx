import { Box, Container} from "@mui/material";
import React from "react";
import {IContainerProps} from "../types/containerTypes";
import BottomNavigationElement from "./BottomNavigation.tsx";



const ContainerElement: React.FC<IContainerProps> = ({ children, ...boxProps }) => {



    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: 3,
                minHeight: "100vh",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                component="section"
                sx={{
                    padding: 5,
                    backgroundColor: (theme) => theme.palette.background.default,
                    height: "85vh",
                    width: "100%",
                    borderRadius: 15,
                    ...boxProps.sx,
                }}
                {...boxProps}
            >
                {children}

                <BottomNavigationElement/>
            </Box>



        </Container>
    );
};

export default ContainerElement;
